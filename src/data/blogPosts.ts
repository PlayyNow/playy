export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src?: string; alt: string; float: "left" | "right" }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-find-a-padel-partner-in-dubai",
    title: "How to Find a Padel Partner in Dubai",
    excerpt:
      "Looking for a padel partner in Dubai? From Americano sessions to sports apps, here are the best ways to find a reliable player near you.",
    date: "April 29, 2025",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80",
    content: [
      { type: "paragraph", text: "Dubai has one of the fastest growing padel scenes in the world. Courts are popping up across Motor City, JBR, Al Quoz, and beyond, and the demand for games has never been higher. The only problem? Showing up to a court without someone to play with." },
      { type: "paragraph", text: "If you have ever found yourself scrolling through WhatsApp groups hoping someone is free, or standing at a court waiting on a player who bailed, you are not alone. Finding a reliable padel partner in Dubai is one of the most common frustrations for players at every level." },
      { type: "paragraph", text: "Here is how to actually fix that." },

      { type: "heading", text: "Join Dubai Padel WhatsApp and Telegram Groups" },
      { type: "paragraph", text: "The most common starting point is community groups. There are dozens of WhatsApp and Telegram groups specifically for Dubai padel players, some organized by area, some by skill level, and some by nationality. A quick search on Google or asking at your local court will usually get you added within a day." },
      { type: "paragraph", text: "The downside is noise. These groups can be chaotic, and finding someone who matches your schedule, location, and skill level still requires a lot of back and forth. It works, but it is not efficient." },

      { type: "heading", text: "Show Up to Americano Tournaments" },
      { type: "paragraph", text: "Americano is a padel format where partners rotate every set, meaning you end up playing with and against almost everyone on the court. Most padel venues in Dubai run regular Americano sessions open to all levels." },
      { type: "paragraph", text: "It is one of the best ways to meet players organically. Show up a few times and you will naturally find people who match your style and availability." },

      { type: "heading", text: "Ask at Your Local Court" },
      { type: "paragraph", text: "Simple but underrated. Court staff at most Dubai padel venues know their regulars well. Let them know you are looking for a hitting partner and they will often connect you with someone at a similar level. Some venues even have informal notice boards or player directories for exactly this reason." },

      { type: "heading", text: "Use an App Built for This" },
      { type: "paragraph", text: "The most direct solution is using an app designed specifically to match sports players. Playy is a Dubai based app built for exactly this. You create a profile, set your sport, skill level, and availability, and connect with players near you who are looking for the same thing." },
      { type: "paragraph", text: "Instead of posting in a group and waiting to see who replies, Playy shows you players in your area who are actively looking for a game. You can message them directly, agree on a time, and get on the court without the group chat chaos." },
      { type: "paragraph", text: "You can also create public sessions for others to join, or browse and jump into events that other players have already set up near you. Whether you want to organise your own game or just show up to one, it is all in the same place." },
      { type: "paragraph", text: "It is free to download and already used by players across Dubai for padel, tennis, basketball, football, and gym sessions." },

      { type: "heading", text: "The Bottom Line" },
      { type: "paragraph", text: "Finding a padel partner in Dubai does not have to mean spamming WhatsApp groups or playing with whoever happens to be free. Between Americano sessions, local court communities, and dedicated apps like Playy, there are better ways to find consistent, well matched partners." },
      { type: "paragraph", text: "The Dubai padel scene is big enough that your ideal playing partner is almost certainly out there. You just need the right place to find them." },

      {
        type: "cta",
        text: "Download Playy free on iOS and find your next padel partner today.",
        href: "https://joinplayy.com",
        label: "Download Playy",
      },
    ],
  },
];
