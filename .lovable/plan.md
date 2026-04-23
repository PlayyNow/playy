

## Goal
Update the existing blog post date and add a new "What is an Americano in Padel?" post to the static blog data file.

## Changes

### 1. Update existing post date
In `src/data/blogPosts.ts`, change the `date` field of the `how-to-find-a-padel-partner-in-dubai` post:
- From: `"April 29, 2025"`
- To: `"April 20, 2025"`

### 2. Add new blog post
Append a second entry to the `blogPosts` array in `src/data/blogPosts.ts` with:

- **slug**: `what-is-an-americano-in-padel`
- **title**: `What is an Americano in Padel?`
- **excerpt**: `Never heard of a padel Americano? Here is everything you need to know about the format, how it works, and where to find one in Dubai.`
- **date**: `April 23, 2025`
- **image**: reuse `padelAmericano` (existing asset `src/assets/blog/padel-americano.png`) as hero — this is the closest-matching existing asset and avoids broken images
- **ogImage**: `https://joinplayy.com/blog/padel-americano.png`
- **content blocks** (in order):
  1. Paragraph — "If you have spent any time on a padel court in Dubai..."
  2. Paragraph — "Here is everything you need to know about the padel Americano..." (with internal-link sentence merged in: "If you are still looking for someone to play with, see our guide on how to find a padel partner in Dubai.")
  3. Heading — `What is an Americano?`
  4. Paragraph — "An Americano is a padel format..."
  5. Paragraph — "The format is designed to be social first..."
  6. Heading — `How Does it Work?`
  7. Paragraph — "An Americano session typically runs..."
  8. Paragraph — "The rotation continues until every possible pairing..."
  9. Paragraph — "Because sets are short..."
  10. Image — reuse `padelHero` asset, alt: "Padel players switching sides during an Americano rotation in Dubai", float: `none`
  11. Heading — `Why is it Good for Beginners?`
  12. Paragraph — "The Americano format removes a lot of the pressure..."
  13. Paragraph — "It is also genuinely one of the fastest ways to improve..."
  14. Paragraph — "And because everyone is competing individually..."
  15. Heading — `Where to Find an Americano in Dubai`
  16. Paragraph — "Most padel venues in Dubai run regular Americano sessions..."
  17. Paragraph — "Some venues also post their Americano schedules on Instagram..."
  18. Image — reuse `padelApp` asset, alt: "Padel player checking the Playy app courtside in Dubai", float: `none`
  19. Heading — `Use Playy to Find Americano Partners`
  20. Paragraph — "Playy is a free Dubai padel app that matches players by skill level..."
  21. Paragraph — "You can create a public session for others to join..."
  22. Paragraph — "Playy is free to download on iOS..."
  23. Heading — `The Bottom Line`
  24. Paragraph — "The Americano is one of padel's best formats..."
  25. Paragraph — "And if you need players to fill the court first, Playy has you covered."
  26. CTA block — text: `Download Playy free on iOS and find your next Americano partner today.`, href: `https://joinplayy.com`, label: `Download Playy`

### 3. Internal link handling
The source asks for an internal link to the partner-finding post. Since the existing `BlogBlock` types (`paragraph`, `heading`, `image`, `cta`) don't render inline anchor tags, the cleanest non-invasive solution is to mention the other post in plain prose within the second paragraph (e.g., "If you are still looking for someone to play with, see our guide on how to find a padel partner in Dubai."). No type or renderer changes needed.

If you'd prefer real clickable internal links, that requires extending `BlogBlock` and `BlogPost.tsx` to support an inline-link block or basic markdown — say the word and I'll add that as a follow-up.

## Technical details
- Single file touched: `src/data/blogPosts.ts`
- New post automatically appears on `/blog` (the second post will render in the grid below the featured one — see `src/pages/Blog.tsx` `[featured, ...rest]` destructuring) and at `/blog/what-is-an-americano-in-padel`
- Sitemap (`scripts/sitemap.mjs`) and prerender (`scripts/prerender.mjs`) already iterate `blogPosts`, so the new post will be included automatically on the next build
- No new image assets are added; existing assets are reused. Provide actual hero/Americano/courtside images later and we'll swap them in
- `ogImage` URL assumes `padel-americano.png` is published at `joinplayy.com/blog/` — same convention used for the existing post

