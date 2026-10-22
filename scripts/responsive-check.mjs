// Usage: node scripts/responsive-check.mjs [outDir] [baseUrl]
import { chromium } from "playwright";
import fs from "node:fs";

const out = process.argv[2] ?? "responsive-shots";
const base = process.argv[3] ?? "http://localhost:5199";
const sizes = [
  [320, 568], [360, 740], [390, 844], [430, 932], [600, 960], [768, 1024], [820, 1180],
  [844, 390], [1024, 768], [1280, 800], [1440, 900], [1920, 1080], [2560, 1440],
];
const pages = ["/", "/profile", "/facility", "/contact", "/product"];
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
let problems = 0;
for (const [w, h] of sizes) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: w < 1000, isMobile: w < 700 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    // scroll through so scroll-triggered reveals fire, then return to top
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += h * 0.6) { await page.mouse.wheel(0, h * 0.6); await page.waitForTimeout(120); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    // freeze scroll-reveal states so screenshots show the settled layout
    await page.addStyleTag({ content: ".fade-in-left,.fade-in-right,.animate-section-card,.process-section-card,.our-process-title{transform:none!important;opacity:1!important;visibility:visible!important}" });
    const res = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const bad = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (r.right > vw + 1 && !el.closest("[data-overflow-ok]")) {
          // ignore elements clipped by an overflow-hidden ancestor
          let a = el.parentElement, clipped = false;
          while (a && a !== document.body) {
            const o = getComputedStyle(a).overflowX;
            if ((o === "hidden" || o === "auto" || o === "scroll") && a.getBoundingClientRect().right <= vw + 1) { clipped = true; break; }
            a = a.parentElement;
          }
          if (!clipped) bad.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)} right=${Math.round(r.right)}`);
        }
      }
      return { vw, sw: document.documentElement.scrollWidth, bad: bad.slice(0, 4) };
    });
    const name = `${p === "/" ? "home" : p.slice(1)}-${w}x${h}`;
    const full = await page.evaluate(() => document.documentElement.scrollHeight);
    const slice = process.env.SLICE ? Number(process.env.SLICE) : 0;
    if (slice && w <= 430) {
      for (let y = 0, i = 0; y < full; y += slice, i++)
        await page.screenshot({ path: `${out}/${name}-${i}.png`, fullPage: true, clip: { x: 0, y, width: w, height: Math.min(slice, full - y) } });
    } else await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    if (res.sw > res.vw + 1 || res.bad.length) {
      problems++;
      console.log(`FAIL ${name}: scrollWidth=${res.sw} vw=${res.vw}`, res.bad);
    }
  }
  await ctx.close();
}
await browser.close();
console.log(problems ? `${problems} problem page(s)` : "No horizontal overflow on any page/size");
