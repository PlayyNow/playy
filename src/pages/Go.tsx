import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apple, Play, Users, CalendarDays, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/playy-logo-3d.png";

/* Bio funnel page. Each source gets its own path so Vercel Analytics counts visits per source:
   /go/tt (TikTok bio), /go/ig (Instagram bio), /go/cap (post captions), /go (anything else).
   A store tap first opens /go/<src>/ios or /go/<src>/android (counted as a page view), then hands off to the store. */
export const IOS_URL = "https://apps.apple.com/us/app/playy-find-your-game/id6759396368";
export const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.playynow.app";
const SOURCES: Record<string, string> = { tt: "tiktok", ig: "instagram", cap: "caption", wa: "whatsapp", web: "website" };

function platform(): "ios" | "android" | "desktop" {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && "ontouchend" in document)) return "ios";
  return "desktop";
}
function storeUrl(store: "ios" | "android", src: string) {
  if (store === "android") return ANDROID_URL + "&referrer=" + encodeURIComponent("utm_source=" + (SOURCES[src] || "direct") + "&utm_medium=bio");
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

const Go = () => {
  const { src = "direct" } = useParams();
  const navigate = useNavigate();
  const p = useMemo(platform, []);
  useNoIndex("Get Playy | Find padel players at your level in Dubai");
  const go = (store: "ios" | "android") => navigate(`/go/${src}/${store}`);
  const primary: "ios" | "android" = p === "android" ? "android" : "ios";
  const other: "ios" | "android" = primary === "ios" ? "android" : "ios";

  return (
    <main className="min-h-[100svh] bg-background text-foreground flex flex-col">
      <div className="flex-1 w-full max-w-md mx-auto px-6 pt-10 pb-8 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <img src={logo} alt="Playy" className="w-11 h-11 rounded-xl" width={44} height={44} />
          <span className="text-xl font-bold text-gradient">Playy</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">
          Find padel players <span className="text-gradient">at your level</span> in Dubai.
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Match with players who play like you, join games and events, and never be short of a 4th again.
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3"><BadgeCheck className="w-5 h-5 text-primary shrink-0" /> Players matched to your level</li>
          <li className="flex items-center gap-3"><CalendarDays className="w-5 h-5 text-primary shrink-0" /> Games and events across Dubai</li>
          <li className="flex items-center gap-3"><Users className="w-5 h-5 text-primary shrink-0" /> 350+ players already on Playy</li>
        </ul>

        <div className="mt-auto space-y-3">
          {p === "desktop" ? (
            <>
              <Button size="lg" onClick={() => go("ios")} className="w-full h-14 text-base font-semibold rounded-xl gap-3 bg-brand-gradient hover:opacity-90"><Apple className="w-5 h-5" /> Download on the App Store</Button>
              <Button size="lg" variant="outline" onClick={() => go("android")} className="w-full h-14 text-base font-semibold rounded-xl gap-3 border-2"><Play className="w-5 h-5" /> Get it on Google Play</Button>
              <p className="text-xs text-muted-foreground text-center">Playy is a phone app. Open this page on your phone to download it.</p>
            </>
          ) : (
            <>
              <Button size="lg" onClick={() => go(primary)} className="w-full h-16 text-lg font-semibold rounded-2xl gap-3 bg-brand-gradient hover:opacity-90">
                {primary === "ios" ? <Apple className="w-5 h-5" /> : <Play className="w-5 h-5" />} Get Playy free
              </Button>
              <button type="button" onClick={() => go(other)} className="w-full text-sm text-muted-foreground underline underline-offset-4">
                {other === "android" ? "On Android? Get it on Google Play" : "On iPhone? Get it on the App Store"}
              </button>
            </>
          )}
          <p className="text-center pt-4"><a href="/" className="text-xs text-muted-foreground hover:text-foreground">Visit joinplayy.com</a></p>
        </div>
      </div>
    </main>
  );
};

export default Go;
