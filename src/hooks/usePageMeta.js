import { useEffect } from "react";

export const SITE_URL = "https://tp-shivha-shakthiy.vercel.app";
const SITE_NAME = "T P Shivha Shakthiy";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/*
  Per-page title, description, canonical URL and social tags.
  index.html holds static defaults for crawlers that don't run JavaScript
  (most link-preview bots); this keeps them accurate for those that do (Google).
*/
export function usePageMeta({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Software Engineer, Backend & Applied AI`;
    const url = SITE_URL + path;

    document.title = fullTitle;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("property", "og:url", url);
    setCanonical(url);
    setMeta("name", "robots", noindex ? "noindex" : "index, follow");
  }, [title, description, path, noindex]);
}
