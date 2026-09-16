import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
};

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  useEffect(() => {
    const absoluteImage = image
      ? image.startsWith("http")
        ? image
        : `${window.location.origin}${image}`
      : undefined;

    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    if (canonical) upsertLink("canonical", canonical);

    upsertMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow",
    );


    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    if (absoluteImage) {
      upsertMeta('meta[property="og:image"]', "property", "og:image", absoluteImage);
    }
    if (publishedTime) {
      upsertMeta(
        'meta[property="article:published_time"]',
        "property",
        "article:published_time",
        publishedTime,
      );
    }

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (absoluteImage) {
      upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImage);
    }

    const scriptId = "seo-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, image, type, publishedTime, jsonLd, noindex]);

  return null;
};

export default SEO;
