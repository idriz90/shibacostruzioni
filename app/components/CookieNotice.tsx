"use client";

import { useEffect, useState } from "react";
import { basePath } from "../basePath";

const siteUrl = (path: string) => `${basePath}${path}`;

const STORAGE_KEY = "shiba-cookie-notice-seen-v2";

export function CookieNotice() {
  const [visible, setVisible] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
    const reopen = () => setVisible(true);
    window.addEventListener("shiba:cookie-notice", reopen);
    return () => window.removeEventListener("shiba:cookie-notice", reopen);
  }, []);
  if (visible !== true) return null;
  return <aside className="cookie-notice" aria-label="Informativa cookie" aria-live="polite"><div><strong>Questo sito non usa cookie di profilazione.</strong><p>Utilizziamo solo strumenti tecnici indispensabili. Leggi la nostra <a href={siteUrl("/privacy/")}>informativa privacy</a> e la <a href={siteUrl("/cookie-policy/")}>cookie policy</a>.</p></div><button type="button" onClick={() => { try { localStorage.setItem(STORAGE_KEY, "1"); } catch {} setVisible(false); }}>Ho capito</button></aside>;
}

export function CookieSettingsButton() {
  return <button className="footer-link-button" type="button" onClick={() => window.dispatchEvent(new Event("shiba:cookie-notice"))}>Gestisci cookie</button>;
}
