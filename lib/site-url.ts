const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (!configuredUrl) return new URL(LOCAL_SITE_URL);

  try {
    const url = new URL(configuredUrl);
    if (
      (url.protocol !== "http:" && url.protocol !== "https:")
      || (url.pathname !== "/" && url.pathname !== "")
      || url.search
      || url.hash
    ) {
      throw new Error("Unsupported protocol");
    }

    return new URL(url.origin);
  } catch {
    throw new Error("SITE_URL must be a valid HTTP(S) origin without a path, query string or fragment.");
  }
}
