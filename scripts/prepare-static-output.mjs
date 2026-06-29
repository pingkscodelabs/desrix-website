import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputPublicDir = join(process.cwd(), ".output", "public");
const assetsDir = join(outputPublicDir, "assets");

if (!existsSync(outputPublicDir) || !existsSync(assetsDir)) {
  throw new Error("Build output not found. Run vite build first.");
}

const assets = readdirSync(assetsDir);
const entryJs = assets.find((name) => /^index-.*\.js$/.test(name));
const entryCss = assets.find((name) => /^styles-.*\.css$/.test(name));

if (!entryJs || !entryCss) {
  throw new Error("Could not find generated entry assets in .output/public/assets.");
}

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DesRIX - Enterprise IT Services</title>
    <link rel="stylesheet" crossorigin href="/assets/${entryCss}" />
    <script type="module" crossorigin src="/assets/${entryJs}"></script>
  </head>
  <body>
    <main id="fallback-content" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:760px;margin:40px auto;padding:24px;border:1px solid #d8dde8;border-radius:14px;box-shadow:0 10px 30px rgba(2,6,23,.08);">
      <h1 style="margin-top:0;">DesRIX</h1>
      <p>Cloud, DevOps, AI, and scalable IT delivery for European businesses.</p>
      <p>If the interactive app is loading slowly, continue via <a href="/about">About</a>, <a href="/services">Services</a>, or <a href="/contact">Contact</a>.</p>
    </main>
  </body>
</html>
`;

const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^assets/ - [L]
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>
`;

writeFileSync(join(outputPublicDir, "index.html"), indexHtml, "utf8");
writeFileSync(join(outputPublicDir, ".htaccess"), htaccess, "utf8");

console.log("Prepared static output:", join(outputPublicDir, "index.html"));
console.log("Prepared static output:", join(outputPublicDir, ".htaccess"));
