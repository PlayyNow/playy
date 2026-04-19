import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  jsonLd?: Record<string, unknown>;
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  jsonLd,
}: SEOProps) => {
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${typeof window !== "undefined" ? window.location.origin : ""}${image}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
