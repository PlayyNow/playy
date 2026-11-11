import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CalendarDays, Users, TrendingUp, Smile, Scale, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/p-logo.jpeg";

/* Bio funnel page, part of joinplayy.com.
   Every link gets its own path so Vercel Analytics counts visits per account:
   /go/playy-tt, /go/playy-ig, /go/karim-tt, /go/karim-ig, /go/nader-tt, /go/nader-ig, /go/cap (anything else).
   A store tap first opens /go/<src>/ios or /go/<src>/android (counted as a page view), then hands off to the store. */
export const IOS_URL = "https://apps.apple.com/us/app/playy-find-your-game/id6759396368";
export const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.playynow.app";
const PLAYERS = "380+";

type Device = "ios" | "android" | "desktop";
function device(): Device {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && "ontouchend" in document)) return "ios";
  return "desktop";
}
function storeUrl(store: "ios" | "android", src: string) {
  if (store === "android") return ANDROID_URL + "&referrer=" + encodeURIComponent("utm_source=" + src + "&utm_medium=bio");
  return IOS_URL;
}
function useNoIndex(title: string) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!m) { m = document.createElement("meta"); m.name = "robots"; document.head.appendChild(m); }
    m.content = "noindex, follow";
  }, [title]);
}

export const GoOut = () => {
  const { src = "direct", store = "ios" } = useParams();
  useNoIndex("Opening the store… | Playy");
  useEffect(() => {
    const t = setTimeout(() => window.location.replace(storeUrl(store === "android" ? "android" : "ios", src)), 350);
    return () => clearTimeout(t);
  }, [src, store]);
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">Opening the {store === "android" ? "Google Play" : "App Store"}…</p>
    </main>
  );
};

const PILLARS = [
  { icon: CalendarDays, title: "Discover", text: "Find padel games and events across Dubai, any day of the week. Or create your own." },
  { icon: Users, title: "Playyers", text: "Meet players at your level and build a crew that actually shows up." },
  { icon: TrendingUp, title: "Progress", text: "Log your games and watch your level climb." },
];
const VIBE = [
  { icon: Smile, title: "All levels welcome", text: "First time with a racket or haven't played in months? There's a game for you." },
  { icon: Scale, title: "Fair games", text: "You're matched with people at your level, so nobody gets dominated." },
  { icon: Sparkles, title: "Just for fun", text: "No pressure, no judging. Come for the game, leave with new people to play with." },
];
const FAQ = [
  { q: "Is Playy free?", a: "Yes. Download it, set your level and start finding games." },
  { q: "I haven't played in a while. Will I get destroyed?", a: "No. Games and events are matched by level, and plenty are made for beginners and people getting back into it." },
  { q: "Do I need a partner or a group?", a: "No. Join an event solo or find players at your level in the app. That's the whole point." },
  { q: "Is it only padel?", a: "Padel is our main sport in Dubai. Football, basketball and tennis are in the app too." },
];

const Go = () => {
  const { src = "direct" } = useParams();
  const navigate = useNavigate();
  const d = useMemo(device, []);
  useNoIndex("Get Playy | Padel games and events in Dubai for every level");
  const go = (store: "ios" | "android") => navigate(`/go/${src}/${store}`);
  const [sticky, setSticky] = useState(false);
  useEffect(() => { const on = () => setSticky(window.scrollY > window.innerHeight * 0.6); on(); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on); }, []);
  const get = () => (d === "android" ? go("android") : d === "ios" ? go("ios") : document.getElementById("stores")?.scrollIntoView({ behavior: "smooth" }));

  const Cta = ({ big = false }: { big?: boolean }) => (
    <Button size="lg" onClick={get} className={`w-full ${big ? "h-16 text-lg" : "h-14 text-base"} font-semibold rounded-2xl bg-brand-gradient hover:opacity-90`}>
      Get Playy
    </Button>
  );

  return (
    <main className="min-h-[100svh] bg-background text-foreground pb-28">
      <div className="w-full max-w-md mx-auto px-6">
        <section className="min-h-[100svh] flex flex-col pt-10 pb-6">
          <a href="/" aria-label="Playy home" className="flex items-center gap-3 mb-10 self-start">
            <img src={logo} alt="Playy" className="w-11 h-11 rounded-xl" width={44} height={44} />
            <span className="text-xl font-bold text-gradient">Playy</span>
          </a>
          <p className="text-sm font-semibold text-primary mb-3">Padel in Dubai, every level</p>
          <h1 className="text-5xl font-bold tracking-tight leading-[1.05] mb-5">
            Nobody too new.<br /><span className="text-gradient">Nobody too good.</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Find padel games and events in Dubai whenever you want to play. All levels welcome, fair games, just for fun and meeting new people.
          </p>
          <p className="flex items-center gap-2 text-sm mb-8"><Users className="w-4 h-4 text-primary" /> {PLAYERS} players already on Playy</p>
          <div className="mt-auto"><Cta big /></div>
        </section>

        <section className="py-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">What you get</h2>
          <div className="space-y-5">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4"><Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" /><div><p className="font-semibold">{title}</p><p className="text-muted-foreground">{text}</p></div></div>
            ))}
          </div>
        </section>

        <section className="py-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-2">Our events</h2>
          <p className="text-muted-foreground mb-6">Hosted by Playy and players in the community.</p>
          <div className="grid gap-3">
            {VIBE.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-5"><Icon className="w-5 h-5 text-primary mb-2" /><p className="font-semibold mb-1">{title}</p><p className="text-sm text-muted-foreground">{text}</p></div>
            ))}
          </div>
        </section>

        <section className="py-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Questions</h2>
          <Accordion type="single" collapsible>
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={"q" + i}><AccordionTrigger className="text-left">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{f.a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="stores" className="py-10 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">{d === "desktop" ? "Playy is a phone app. Pick your store:" : "Here to Playy."}</p>
          {d === "desktop" ? (
            <div className="grid gap-3">
              <Button size="lg" onClick={() => go("ios")} className="w-full h-14 rounded-2xl bg-brand-gradient font-semibold">App Store (iPhone)</Button>
              <Button size="lg" variant="outline" onClick={() => go("android")} className="w-full h-14 rounded-2xl border-2 font-semibold">Google Play (Android)</Button>
            </div>
          ) : <Cta />}
          <p className="mt-8 text-sm"><a href="/" className="text-muted-foreground hover:text-foreground underline underline-offset-4">More about Playy</a> · <a href="/blog/" className="text-muted-foreground hover:text-foreground underline underline-offset-4">Padel guides</a></p>
        </section>
      </div>

      {d !== "desktop" && sticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border px-6 py-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <div className="max-w-md mx-auto"><Cta /></div>
        </div>
      )}
    </main>
  );
};

export default Go;
