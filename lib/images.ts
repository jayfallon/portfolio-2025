const CLOUDFRONT =
  process.env.NEXT_PUBLIC_CLOUDFRONT_URL ?? "https://dbf43z1u0dmox.cloudfront.net";

export function resolveImageSrc(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/icon-") || src.startsWith("/images/") || src.endsWith(".pdf")) {
    return src;
  }
  if (src.startsWith("/")) return `${CLOUDFRONT}${src}`;
  return src;
}
