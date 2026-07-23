const LOCALE_KEY = "tome-pref-locale";

(function persistLocale() {
  const saved = localStorage.getItem(LOCALE_KEY);
  const path = window.location.pathname;
  const m = path.match(/^\/(id|en)(\/|$)/);
  const cur = m ? m[1] : "en";

  localStorage.setItem(LOCALE_KEY, cur);

  if (saved && saved !== cur) {
    if (saved === "en") {
      window.location.replace(path.replace(/^\/id/, "") || "/");
    } else if (cur === "en") {
      window.location.replace("/" + saved + path);
    }
  }
})();

import "@tomehq/theme/entry";
