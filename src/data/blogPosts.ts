export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-padel-courts-dubai",
    title: "The Best Padel Courts in Dubai Right Now",
    excerpt:
      "From rooftop courts to hidden community spots, here's where Dubai's padel scene is really happening this season.",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80",
    content: [
      "Padel has officially taken over Dubai. From Dubai Marina to Al Quoz, courts are popping up faster than you can book a slot.",
      "We rounded up the best courts based on surface quality, lighting, vibe, and how easy it is to actually find a game.",
      "Whether you're a beginner looking for friendly rallies or a competitive player chasing serious matches, there's a court here for you.",
    ],
  },
  {
    slug: "find-players-your-level",
    title: "How to Find Players at Your Level in Dubai",
    excerpt:
      "Tired of mismatched games? Here's how to consistently match with players who push you without crushing you.",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80",
    content: [
      "The biggest frustration in pickup sports? Mismatched skill levels. You either get destroyed or spend an hour playing down.",
      "Skill matching isn't just about a number. It's about playstyle, intensity, and what you actually want out of a game.",
      "Here's how to dial in your profile so every match feels like the right match.",
    ],
  },
  {
    slug: "dubai-football-pickup-guide",
    title: "The Ultimate Guide to Pickup Football in Dubai",
    excerpt:
      "Where to play, when to show up, and how to get into the best 5-a-side games across the city.",
    date: "April 3, 2026",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80",
    content: [
      "Football in Dubai isn't just about the big leagues. The real action is in the pickup games happening every night across the city.",
      "From turf pitches in JLT to grass fields in Al Barsha, there's a game starting somewhere right now.",
      "Here's everything you need to know to get into the best pickup football scene in Dubai.",
    ],
  },
];
