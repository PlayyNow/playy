## Problem
The WhatsApp preview shows 4 black/grey bars because the current `og:image` in `index.html` points to an old auto-generated Lovable screenshot (the dark landing page cropped weirdly). It needs a proper 1200x630 branded social preview image.

## Plan

1. **Generate a branded OG image** (1200x630, PNG) with:
   - Playy wordmark
   - Tagline: "Stop Scrolling. Start Playing."
   - Sub-line: "Dubai's padel community app"
   - Jet Black (#0A0A0A) background with the brand cyan→purple→pink gradient accent
   - Space Grotesk-style typography
   - Save to `src/assets/og-image.png` for preview
2. **Show it to you first** — you review, and either approve or ask for tweaks (colors, wording, layout). Nothing else changes yet.
3. Once approved, **upload via `lovable-assets`** to get a stable CDN URL, then update `index.html`:
   - Replace `og:image` and `twitter:image` with the new CDN URL
   - (Homepage-only — blog posts already handle their own via the `SEO` component)
4. Tell you that WhatsApp/LinkedIn cache previews, so you may need to force a refresh via the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to see the new image immediately in WhatsApp.

## Notes
- No layout/code changes beyond the two meta tags.
- The image is a static asset; it won't affect the app UI.