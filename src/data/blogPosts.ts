import padelHero from "@/assets/blog/padel-hero.jpeg";
import padelAmericano from "@/assets/blog/padel-americano.png";
import padelApp from "@/assets/blog/padel-app.jpeg";
import americanoHero from "@/assets/blog/americano-hero.jpeg";
import americanoLaughing from "@/assets/blog/americano-laughing.jpeg";
import americanoPhone from "@/assets/blog/americano-phone.jpeg";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src?: string; alt: string; float?: "left" | "right" | "none" }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  /**
   * Absolute, publicly-resolvable URL for og:image / twitter:image.
   * Required because social crawlers (X, Facebook, WhatsApp) don't
   * execute JS and can't resolve Vite's hashed asset paths.
   */
  ogImage: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-find-a-padel-partner-in-dubai",
    title: "How to Find a Padel Partner in Dubai",
    excerpt:
      "Looking for a padel partner in Dubai? From Americano sessions to sports apps, here are the best ways to find a reliable player near you.",
    date: "April 20, 2026",
    image: padelHero,
    ogImage: "https://joinplayy.com/blog/padel-hero.jpeg",
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

      { type: "image", src: padelAmericano, alt: "Friends socialising on a padel court at sunset after an Americano session in Dubai", float: "none" },

      { type: "heading", text: "Ask at Your Local Court" },
      { type: "paragraph", text: "Simple but underrated. Court staff at most Dubai padel venues know their regulars well. Let them know you are looking for a hitting partner and they will often connect you with someone at a similar level. Some venues even have informal notice boards or player directories for exactly this reason." },

      { type: "image", src: padelApp, alt: "Padel player checking the Playy app on her phone courtside", float: "none" },

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
  {
    slug: "what-is-an-americano-in-padel",
    title: "What is an Americano in Padel?",
    excerpt:
      "Never heard of a padel Americano? Here is everything you need to know about the format, how it works, and where to find one in Dubai.",
    date: "April 23, 2026",
    image: padelAmericano,
    ogImage: "https://joinplayy.com/blog/padel-americano.png",
    content: [
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network." },
      { type: "paragraph", text: "If you have spent any time on a padel court in Dubai you have probably heard someone mention an Americano. It keeps coming up in WhatsApp groups, venue schedules, and conversations between players warming up. But if you have never played one, the format can sound confusing at first." },
      { type: "paragraph", text: "Here is everything you need to know about the padel Americano, how it works, and why it is one of the best ways to meet new players in Dubai. If you are still looking for someone to play with, see our guide on how to find a padel partner in Dubai." },

      { type: "heading", text: "What is an Americano?" },
      { type: "paragraph", text: "An Americano is a padel format where every player gets to compete with and against everyone else on the court during a single session. Unlike a standard match where two fixed pairs play each other from start to finish, the Americano rotates partners after every set. By the end of the session you will have played alongside and against every other player at least once." },
      { type: "paragraph", text: "The format is designed to be social first and competitive second. Points are tracked individually throughout the session and the player with the most points at the end wins, regardless of who they were partnered with at any given time. The format originated in Spain, where padel has been played competitively since the 1990s through organisations like the World Padel Tour (https://www.worldpadeltour.com)." },

      { type: "heading", text: "How Does it Work?" },
      { type: "paragraph", text: "An Americano session typically runs with four to eight players, though four is the most common number on a single court. Each pair plays a short set, usually six games, then partners rotate. Your individual points carry over from set to set so every point you win counts toward your final total." },
      { type: "paragraph", text: "The rotation continues until every possible pairing has been played. At the end of the session the scores are tallied and the player with the highest individual total wins. Some venues add a small prize or just keep a running leaderboard for regulars." },
      { type: "paragraph", text: "Because sets are short and the format keeps moving, an Americano session usually lasts between 90 minutes and two hours for four players, making it easy to fit into an evening after work." },

      { type: "image", src: padelHero, alt: "Padel players switching sides during an Americano rotation in Dubai", float: "none" },

      { type: "heading", text: "Why is it Good for Beginners?" },
      { type: "paragraph", text: "The Americano format removes a lot of the pressure that comes with standard padel matches. Because you are rotating partners constantly, no single pairing carries the weight of the whole session. If one set goes badly you move on, get a new partner, and start fresh." },
      { type: "paragraph", text: "It is also genuinely one of the fastest ways to improve. Playing with and against different styles in quick succession forces you to adapt in a way that playing the same pair repeatedly does not. Most players find their game improves noticeably after a few Americano sessions simply from the variety of opponents." },
      { type: "paragraph", text: "And because everyone is competing individually, there is no pressure to carry a weaker partner or frustration at being carried. Your score reflects your own performance." },

      { type: "heading", text: "Where to Find an Americano in Dubai" },
      { type: "paragraph", text: "Most padel venues in Dubai run regular Americano sessions, usually on weekday evenings and weekend mornings when courts are most active. ISD Padel in Dubai Sports City (https://isddubai.com), courts in JBR, and venues across Al Quoz all run sessions regularly. The easiest way to find one is to ask at your local court directly — staff will know the schedule and can add you to the list." },
      { type: "paragraph", text: "Some venues also post their Americano schedules on Instagram so following your nearest court is worth doing if you want to stay on top of upcoming sessions." },

      { type: "image", src: padelApp, alt: "Padel player checking the Playy app courtside in Dubai", float: "none" },

      { type: "heading", text: "Use Playy to Find Americano Partners" },
      { type: "paragraph", text: "Playy is a free Dubai padel app that matches players by skill level and availability. If you want to join an Americano but do not have enough players to fill the court, Playy lets you find others in your area who are looking for exactly the same thing." },
      { type: "paragraph", text: "You can create a public session for others to join, or browse sessions that players have already set up near you. Instead of waiting on WhatsApp groups to fill up, you find your players, agree on a time, and show up ready to play." },
      { type: "paragraph", text: "Playy is free to download on iOS and already used by padel players across Dubai. For a full list of padel venues running regular sessions in Dubai, the Dubai Sports Council (https://www.dsc.gov.ae) tracks active courts across the city." },

      { type: "heading", text: "The Bottom Line" },
      { type: "paragraph", text: "The Americano is one of padel's best formats — social, fast moving, and genuinely competitive in a way that works for every level. If you have not tried one yet, find a session near you this week. You will meet more players in two hours than you would in a month of standard matches." },
      { type: "paragraph", text: "And if you need players to fill the court first, Playy has you covered." },

      {
        type: "cta",
        text: "Download Playy free on iOS and find your next Americano partner today.",
        href: "https://joinplayy.com",
        label: "Download Playy",
      },
    ],
  },
];
