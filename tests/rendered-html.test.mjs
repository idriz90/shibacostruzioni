import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const out = path.join(process.cwd(), "out");
const domain = "https://shibacostruzioni.it";

const pages = [
  ["index.html", `${domain}/`, true],
  ["servizi/index.html", `${domain}/servizi/`, true],
  ["progetti/index.html", `${domain}/progetti/`, true],
  ["chi-siamo/index.html", `${domain}/chi-siamo/`, true],
  ["come-lavoriamo/index.html", `${domain}/come-lavoriamo/`, true],
  ["contatti/index.html", `${domain}/contatti/`, true],
  ["blog/index.html", `${domain}/blog/`, false],
  ["privacy/index.html", `${domain}/privacy/`, false],
  ["cookie-policy/index.html", `${domain}/cookie-policy/`, false],
];

test("ogni pagina ha metadati SEO coerenti e un solo H1", async () => {
  for (const [file, canonical, indexable] of pages) {
    const html = await readFile(path.join(out, file), "utf8");
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, file);
    assert.match(html, /<meta name="description" content="[^"]+"/i, file);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), file);
    if (indexable) {
      assert.doesNotMatch(html, /<meta name="robots" content="noindex/i, file);
    } else {
      assert.match(html, /<meta name="robots" content="noindex, follow"/i, file);
    }
  }
});

test("robots e sitemap puntano al dominio definitivo", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(path.join(out, "robots.txt"), "utf8"),
    readFile(path.join(out, "sitemap.xml"), "utf8"),
  ]);
  assert.match(robots, /Allow: \/\s/);
  assert.ok(robots.includes(`Sitemap: ${domain}/sitemap.xml`));
  for (const route of ["/", "/servizi/", "/progetti/", "/chi-siamo/", "/come-lavoriamo/", "/contatti/"]) {
    assert.ok(sitemap.includes(`<loc>${domain}${route}</loc>`), route);
  }
  assert.doesNotMatch(sitemap, /\/(blog|privacy|cookie-policy)\//);
});

test("la home espone dati strutturati locali", async () => {
  const html = await readFile(path.join(out, "index.html"), "utf8");
  assert.match(html, /"@type":"GeneralContractor"/);
  assert.match(html, /"postalCode":"56017"/);
  assert.match(html, /"taxID":"02226750509"/);
});
