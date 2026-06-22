import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Scrolls the window to the top whenever the route pathname changes.
 * Skips when there is a hash (anchor link) so in-page navigation still works.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Strip trailing slash (except root "/") and replace history entry so
  // /blog/foo/ canonicalises to /blog/foo. Mirrors a 301 for client nav.
  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const stripped = pathname.replace(/\/+$/, "") || "/";
      navigate(
        { pathname: stripped, search: window.location.search, hash },
        { replace: true },
      );
    }
  }, [pathname, hash, navigate]);

  useEffect(() => {
    if (hash) {
      // Wait a tick for the new route's DOM to render before scrolling to the anchor
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;