import padelHero from "@/assets/blog/padel-hero.jpeg";
import padelAmericano from "@/assets/blog/padel-americano.png";
import padelApp from "@/assets/blog/padel-app.jpeg";
import americanoHero from "@/assets/blog/americano-hero.jpeg";
import americanoLaughing from "@/assets/blog/americano-laughing.jpeg";
import americanoPhone from "@/assets/blog/americano-phone.jpeg";
import heatHero from "@/assets/blog/heat-hero.jpeg";
import heatShoes from "@/assets/blog/heat-shoes.jpeg";
import heatPhone from "@/assets/blog/heat-phone.jpeg";
import padelVsTennisHero from "@/assets/blog/padel-vs-tennis-hero.jpeg";
import padelVsTennisRackets from "@/assets/blog/padel-vs-tennis-rackets.jpeg";
import padelVsTennisAction from "@/assets/blog/padel-vs-tennis-action.jpeg";

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
    image: americanoHero,
    ogImage: "https://joinplayy.com/blog/padel-americano.png",
    content: [
      { type: "paragraph", text: "If you have spent any time on a padel court in Dubai you have probably heard someone mention an Americano. It keeps coming up in WhatsApp groups, venue schedules, and conversations between players warming up. But if you have never played one, the format can sound confusing at first." },
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network. One of the best ways to meet those players is through the Americano format — and here is everything you need to know about how it works." },

      { type: "heading", text: "What is an Americano?" },
      { type: "paragraph", text: "An Americano is a padel format where every player gets to compete with and against everyone else on the court during a single session. Unlike a standard match where two fixed pairs play each other from start to finish, the Americano rotates partners after every set. By the end of the session you will have played alongside and against every other player at least once." },
      { type: "paragraph", text: "The format is designed to be social first and competitive second. Points are tracked individually throughout the session and the player with the most points at the end wins, regardless of who they were partnered with at any given time. The format originated in Spain, where padel has been played competitively since the 1990s through organisations like the [World Padel Tour](https://www.worldpadeltour.com)." },

      { type: "heading", text: "How Does it Work?" },
      { type: "paragraph", text: "An Americano session typically runs with four to eight players, though four is the most common number on a single court. Each pair plays a short set, usually six games, then partners rotate. Your individual points carry over from set to set so every point you win counts toward your final total." },
      { type: "paragraph", text: "The rotation continues until every possible pairing has been played. At the end of the session the scores are tallied and the player with the highest individual total wins. Some venues add a small prize or just keep a running leaderboard for regulars." },
      { type: "paragraph", text: "Because sets are short and the format keeps moving, an Americano session usually lasts between 90 minutes and two hours for four players, making it easy to fit into an evening after work." },

      { type: "image", src: americanoLaughing, alt: "Padel players laughing together courtside after an Americano rotation in Dubai", float: "none" },

      { type: "heading", text: "Why is it Good for Beginners?" },
      { type: "paragraph", text: "The Americano format removes a lot of the pressure that comes with standard padel matches. Because you are rotating partners constantly, no single pairing carries the weight of the whole session. If one set goes badly you move on, get a new partner, and start fresh." },
      { type: "paragraph", text: "It is also genuinely one of the fastest ways to improve. Playing with and against different styles in quick succession forces you to adapt in a way that playing the same pair repeatedly does not. Most players find their game improves noticeably after a few Americano sessions simply from the variety of opponents." },
      { type: "paragraph", text: "And because everyone is competing individually, there is no pressure to carry a weaker partner or frustration at being carried. Your score reflects your own performance." },

      { type: "heading", text: "Where to Find an Americano in Dubai" },
      { type: "paragraph", text: "Most padel venues in Dubai run regular Americano sessions, usually on weekday evenings and weekend mornings when courts are most active. [ISD Padel in Dubai Sports City](https://isddubai.com), courts in JBR, and venues across Al Quoz all run sessions regularly. The easiest way to find one is to ask at your local court directly — staff will know the schedule and can add you to the list." },
      { type: "paragraph", text: "Some venues also post their Americano schedules on Instagram so following your nearest court is worth doing if you want to stay on top of upcoming sessions." },

      { type: "image", src: americanoPhone, alt: "Padel player smiling at the Playy app courtside in Dubai", float: "none" },

      { type: "heading", text: "Use Playy to Find Americano Partners" },
      { type: "paragraph", text: "Playy is a free Dubai padel app that matches players by skill level and availability. If you want to join an Americano but do not have enough players to fill the court, Playy lets you find others in your area who are looking for exactly the same thing." },
      { type: "paragraph", text: "You can create a public session for others to join, or browse sessions that players have already set up near you. Instead of waiting on WhatsApp groups to fill up, you find your players, agree on a time, and show up ready to play." },
      { type: "paragraph", text: "Playy is free to download on iOS and already used by padel players across Dubai. For a full list of padel venues running regular sessions in Dubai, the [Dubai Sports Council](https://www.dsc.gov.ae) tracks active courts across the city." },

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
  {
    slug: "what-to-wear-padel-dubai-heat",
    title: "What to Wear for Padel in Dubai's Heat",
    excerpt:
      "Playing padel in Dubai's heat? Here is exactly what to wear — from moisture-wicking tops to the right shoes — so you stay cool and play your best.",
    date: "April 27, 2026",
    image: heatHero,
    ogImage: "https://joinplayy.com/blog/heat-hero.jpeg",
    content: [
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network. Before you step onto the court and find your match, you need to make sure you are dressed for the conditions — because playing padel in Dubai is not the same as playing padel anywhere else in the world." },
      { type: "paragraph", text: "Dubai's heat is a real factor. Outdoor temperatures regularly exceed 40 degrees Celsius in summer, and even indoor courts that are air-conditioned can feel intense once you start moving. Showing up in the wrong gear will not just be uncomfortable — it will genuinely affect how well you play and how quickly you fatigue." },
      { type: "paragraph", text: "Here is exactly what to wear." },

      { type: "heading", text: "Indoor vs Outdoor: The Dubai Difference" },
      { type: "paragraph", text: "Most Dubai padel venues fall into one of two categories and what you wear changes depending on which one you are at." },
      { type: "paragraph", text: "Indoor air-conditioned courts are the norm across most major venues in Dubai. The temperature is controlled and comfortable, so your main concern is breathability and freedom of movement, not sun protection. You can wear the same gear you would wear for any fast-paced sport." },
      { type: "paragraph", text: "Outdoor courts are a different story. From May through September, outdoor play in Dubai is only practical in the early morning before 9am or in the evening after 7pm. During these hours the heat is manageable but still significant. UPF sun protection, lighter colours, and maximum breathability become essential rather than optional." },
      { type: "paragraph", text: "Know which type of court you are playing at before you pack your bag." },

      { type: "heading", text: "What to Wear on Top" },
      { type: "paragraph", text: "The single most important feature of any top for padel in Dubai is moisture wicking. This means the fabric pulls sweat away from your skin and allows it to evaporate quickly, keeping you dry and cool throughout the session. Standard cotton t-shirts absorb sweat and hold it against your skin, which makes you feel heavier and hotter as the session goes on. Avoid them." },
      { type: "paragraph", text: "Look for lightweight polyester or polyester-elastane blend tops specifically designed for racket sports. They should fit close enough not to get in the way of your swing but with enough stretch to allow full range of movement overhead and laterally." },
      { type: "paragraph", text: "For outdoor morning or evening play, a light UPF 30 or 50 top adds sun protection without adding significant heat. For indoor play, a standard moisture-wicking t-shirt or tank top is all you need." },
      { type: "paragraph", text: "Colour matters more than most people think. Light colours reflect sunlight and keep your core temperature lower on outdoor courts. Dark colours absorb heat. For outdoor summer sessions, white, light grey, and pastel tones are noticeably more comfortable than navy or black." },

      { type: "heading", text: "Shorts and Bottoms" },
      { type: "paragraph", text: "Padel involves a lot of lateral movement, quick direction changes, and crouching low for defensive shots. Your bottoms need to move with you without restriction." },
      { type: "paragraph", text: "Standard athletic shorts in a lightweight polyester fabric work well. They should hit above the knee for maximum mobility. Compression shorts or leggings underneath are a personal preference but add a layer that can trap heat in warmer conditions, so consider the court type before adding them." },
      { type: "paragraph", text: "For women, padel skirts with built-in shorts underneath have become the most popular choice across Dubai courts. They are designed specifically for racket sport movement and are widely available at Dubai sports retailers including [Decathlon](https://www.decathlon.ae) and Adidas outlets across the city." },
      { type: "paragraph", text: "Avoid denim, cargo shorts, or anything with heavy seams. The lateral movement in padel will make any non-athletic fabric uncomfortable within the first ten minutes." },

      { type: "heading", text: "The Most Important Thing: Your Shoes" },
      { type: "paragraph", text: "If you only invest in one piece of padel-specific gear, make it the shoes. This is the single most important equipment decision for a padel player in Dubai and it affects both your performance and injury risk. The professional game on tours like the [World Padel Tour](https://www.worldpadeltour.com) shows just how much footwork defines the sport at every level." },
      { type: "paragraph", text: "Most padel courts in Dubai use artificial grass or sand-filled turf surfaces. Running shoes and general trainers are built for forward motion on smooth surfaces. They lack lateral support and do not grip turf correctly, which means you will be slipping on direction changes and rolling ankles on sharp cuts." },
      { type: "paragraph", text: "Padel-specific shoes have a herringbone or small-pattern outsole designed for artificial grass. They provide grip without over-gripping, lateral ankle support for the direction changes the sport demands, and cushioning appropriate for the hard court surface underneath the turf." },
      { type: "paragraph", text: "In the Dubai heat, breathability in the upper is also worth prioritising. Mesh uppers allow airflow around the foot and reduce moisture build-up during long sessions, which matters particularly from May through September even on indoor courts." },
      { type: "paragraph", text: "Brands including Head, Babolat, and Adidas all produce dedicated padel footwear available in Dubai through major sports retailers and online at [Amazon.ae](https://www.amazon.ae)." },

      { type: "image", src: heatShoes, alt: "Close-up of padel shoes with herringbone sole on artificial grass court", float: "none" },

      { type: "heading", text: "Accessories Worth Bringing" },
      { type: "paragraph", text: "A cap or visor is essential for any outdoor session. Even in the early morning or evening, direct sunlight on an outdoor court is significant. A lightweight cap also absorbs sweat and keeps it out of your eyes during longer rallies." },
      { type: "paragraph", text: "A wristband on your dominant hand helps keep your grip dry, which matters in Dubai's humidity. When your hands sweat your grip on the racket loosens, which affects control and puts unnecessary strain on your wrist and elbow." },
      { type: "paragraph", text: "Bring more water than you think you need. A minimum of one litre per hour of play is the standard recommendation for Dubai's climate, and more for outdoor summer sessions. Most venues have water dispensers but having your own bottle means you are not hunting for hydration between points." },
      { type: "paragraph", text: "Finally, sunscreen for any outdoor session. SPF 50 on exposed skin is the minimum for a Dubai court in daylight hours." },

      { type: "heading", text: "What to Avoid" },
      { type: "paragraph", text: "Cotton in any form — tops, socks, or shorts — holds sweat and gets heavy quickly. It is the most common mistake new players make and the easiest to fix." },
      { type: "paragraph", text: "Jeans or restrictive bottoms make lateral movement genuinely difficult and will leave you sore in ways that have nothing to do with the sport." },
      { type: "paragraph", text: "Leaving your shoes in a hot car between sessions. Temperatures inside a parked car in Dubai can exceed 70 degrees Celsius in summer, which degrades the foam core and adhesives in padel shoes rapidly. Keep them in a bag inside when not in use." },
      { type: "paragraph", text: "Playing outdoor sessions between 9am and 6pm in summer without proper heat precautions. The risk of heat exhaustion is real and not worth it when most Dubai venues offer excellent indoor alternatives." },

      { type: "image", src: heatPhone, alt: "Padel player checking the Playy app courtside at sunset in Dubai", float: "none" },

      { type: "paragraph", text: "Once you are geared up, read our guide on [how to find a padel partner in Dubai](https://joinplayy.com/blog/how-to-find-a-padel-partner-in-dubai)." },

      { type: "heading", text: "Find Players to Wear It All For" },
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network. Once you have the right gear sorted, finding the right people to play with is the next step." },
      { type: "paragraph", text: "You can create a public session for others to join, or browse sessions that players near you have already set up. Whether you are a complete beginner looking for a relaxed first game or a regular player wanting consistent opponents at your level, Playy connects you with the right people without the WhatsApp group chaos." },

      { type: "paragraph", text: "A great way to meet new players once you are on the court is [how the Americano format works](https://joinplayy.com/blog/what-is-an-americano-in-padel)." },

      { type: "heading", text: "The Bottom Line" },
      { type: "paragraph", text: "Playing padel in Dubai's heat is completely manageable when you are dressed for it. Moisture-wicking fabrics, padel-specific shoes, a cap for outdoor sessions, and a wristband for your grip hand cover the essentials. Get those right and the conditions stop being a factor." },
      { type: "paragraph", text: "The gear is sorted. Now you just need the players." },

      {
        type: "cta",
        text: "Download Playy free on iOS and find your next padel partner today.",
        href: "https://joinplayy.com",
        label: "Download Playy",
      },
    ],
  },
  {
    slug: "difference-between-padel-and-tennis",
    title: "What is the Difference Between Padel and Tennis?",
    excerpt:
      "Padel and tennis look similar but play completely differently. Here is a clear breakdown of the key differences in court, equipment, rules, and gameplay.",
    date: "April 30, 2026",
    image: padelVsTennisHero,
    ogImage: "https://joinplayy.com/blog/padel-vs-tennis-hero.jpeg",
    content: [
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network. One question we hear constantly from new players is this: how is padel actually different from tennis? The two sports look similar at first glance — rackets, a net, a ball, and a court — but the experience of playing them is completely different." },
      { type: "paragraph", text: "Here is a clear breakdown of every key difference so you know exactly what you are getting into before you step on a padel court for the first time." },

      { type: "heading", text: "The Court" },
      { type: "paragraph", text: "The most obvious difference is the court itself. A padel court measures 20 metres by 10 metres and is completely enclosed by walls made of glass and metal mesh. Those walls are not just boundaries — they are part of the game. Players can use them to keep the ball in play, which is what creates the long tactical rallies padel is famous for." },
      { type: "paragraph", text: "A tennis court is significantly larger at 23.77 metres by 10.97 metres for doubles, and it is completely open. There are no walls. If the ball crosses the lines it is out, full stop. Official court dimensions and rules are maintained by the [International Padel Federation](https://www.padelfip.com)." },
      { type: "paragraph", text: "To put the size difference in perspective: you can fit roughly three padel courts into the space a single tennis court takes up. That smaller footprint is one of the main reasons padel has grown so fast in urban areas like Dubai, where space is at a premium." },

      { type: "heading", text: "The Equipment" },
      { type: "paragraph", text: "Padel rackets and tennis rackets look vaguely similar but are built completely differently. A padel racket is shorter at around 45 centimetres, solid rather than strung, and has a perforated face with holes through it. It is heavier overall but the shorter length makes it easier to manoeuvre in the tight spaces of a padel court." },
      { type: "paragraph", text: "A tennis racket is longer at 68 to 74 centimetres, has an open frame strung with strings, and is designed to generate power and spin across a much larger court. The strung face gives tennis players far more control over the ball trajectory, which is why tennis requires significantly more technical practice to master." },
      { type: "paragraph", text: "The balls look almost identical but padel balls have lower internal pressure — around 10 to 11 PSI compared to 14 PSI in a tennis ball. This means padel balls bounce lower and travel slower, which suits the enclosed court and keeps rallies alive longer." },

      { type: "image", src: padelVsTennisRackets, alt: "Padel racket and tennis racket side by side showing the difference in size and design", float: "none" },

      { type: "heading", text: "The Rules" },
      { type: "paragraph", text: "Both sports use the same scoring system — 15, 30, 40, game, set, match — so if you know tennis scoring you already know padel scoring. But the rules around how you play are quite different." },
      { type: "paragraph", text: "In padel the serve must be underhand, struck below waist level, and aimed diagonally into the opponent's service box. The ball can bounce off the back or side walls after the serve, which immediately adds a tactical element from the very first shot of each point." },
      { type: "paragraph", text: "In tennis the serve is overhead and the ball must land directly in the service box without touching any walls, because there are none. A powerful serve in tennis is one of the most dominant weapons in the sport. In padel the serve is less of a weapon and more of a starting position." },
      { type: "paragraph", text: "The wall rule is what truly separates padel from every other racket sport. After the ball bounces once on the ground, players can hit it after it has rebounded off the walls. This keeps rallies alive in ways that would be impossible in tennis and forces players to think constantly about angles and positioning rather than pure power." },

      { type: "heading", text: "The Gameplay" },
      { type: "paragraph", text: "Tennis rewards power, precision, and physical endurance. Matches can involve sprinting across a large court, covering significant distances, and sustaining that intensity across multiple sets. Singles tennis in particular is one of the most physically demanding individual sports in the world." },
      { type: "paragraph", text: "Padel is almost always played in doubles and rewards strategy, positioning, and teamwork. Because the court is smaller and the walls keep the ball in play, rallies are longer and the pace is more sustained rather than explosive. The professional game on the [World Padel Tour](https://www.worldpadeltour.com) showcases just how tactical the sport becomes at the top level." },
      { type: "paragraph", text: "Most players who come from a tennis background find padel easier to pick up than expected. The solid face of the padel racket makes ball contact more forgiving, and the smaller court means you spend less time chasing wide balls. Studies across padel clubs in Europe have found that 85 percent of beginners can sustain proper rallies within their first hour of play — something that typically takes tennis beginners months to achieve." },

      { type: "heading", text: "Which One is Easier to Learn?" },
      { type: "paragraph", text: "Padel is significantly easier for beginners. The combination of a smaller court, a solid racket with a predictable ball response, underhand serving, and the wall safety net means new players are rallying and enjoying themselves within their first session. There is less technical barrier to entry." },
      { type: "paragraph", text: "Tennis has a steeper learning curve. The overhead serve alone can take weeks to develop reliably, and covering the court footwork requires real conditioning. That does not make tennis worse — it makes the progression more rewarding for players who enjoy technical mastery — but for someone who wants to get on a court and have fun immediately, padel wins." },

      { type: "heading", text: "Which One is More Social?" },
      { type: "paragraph", text: "Padel is almost always played in doubles which means you are always sharing the court with three other people. The smaller, enclosed space creates an intimate atmosphere where conversation is easy and the social element is built into every session. Americano tournaments, where partners rotate every set, make it even easier to meet new players every time you show up." },
      { type: "paragraph", text: "Tennis can be social but singles tennis is by definition a one-on-one competition. Doubles tennis is more social but the larger court creates more distance between players and the intensity of the game makes casual conversation less natural during play." },
      { type: "paragraph", text: "In Dubai specifically, the padel scene is built around community. Most venues run regular open sessions and Americanos where you show up and meet whoever is there." },

      { type: "image", src: padelVsTennisAction, alt: "Four padel players mid-rally on an enclosed padel court at sunset in Dubai", float: "none" },

      { type: "paragraph", text: "If you are ready to find players, read our guide on [how to find a padel partner in Dubai](https://joinplayy.com/blog/how-to-find-a-padel-partner-in-dubai)." },

      { type: "heading", text: "Find Padel Players in Dubai with Playy" },
      { type: "paragraph", text: "Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network. Whether you are picking up a padel racket for the first time or switching over from tennis, Playy makes it easy to find players at your level near you." },
      { type: "paragraph", text: "You can create a public session for others to join or browse sessions that players near you have already set up. No WhatsApp groups, no chasing replies, just show up and play. For a wider view of active courts and clubs across the city, the [Dubai Sports Council](https://www.dsc.gov.ae) tracks venues across the emirate." },

      { type: "paragraph", text: "One of the best ways to meet new players is through the Americano format — [here is how it works](https://joinplayy.com/blog/what-is-an-americano-in-padel)." },

      { type: "heading", text: "The Bottom Line" },
      { type: "paragraph", text: "Padel and tennis are both brilliant racket sports but they offer completely different experiences. Tennis rewards individual power and technical mastery across a large open court. Padel rewards teamwork, strategy, and social play on a compact enclosed one." },
      { type: "paragraph", text: "If you have never tried padel and you play tennis, you will pick it up faster than you think. And if you have never played either, padel is the easier starting point. Either way, Dubai has some of the best courts in the world to play on — you just need the right people to play with." },

      {
        type: "cta",
        text: "Download Playy free on iOS and find your next padel partner today.",
        href: "https://joinplayy.com",
        label: "Download Playy",
      },
    ],
  },
];
