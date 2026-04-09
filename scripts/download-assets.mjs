import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const assets = [
  // Product images
  {
    url: "https://brevityassets.brevity.workers.dev/designer/hero-levitating-lamp-i0Udg6qEKCnw.png",
    dest: "images/hero-levitating-lamp.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/designer/product-modular-backpack-J8ZZwXyRNcL1.png",
    dest: "images/product-modular-backpack.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/designer/product-smart-planter-sv2IUOpclp2A.png",
    dest: "images/product-smart-planter.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/designer/product-eink-tablet-IbKwt4qxNzRX.png",
    dest: "images/product-eink-tablet.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/designer/product-collapsible-scooter-gW_4TBQllONc.png",
    dest: "images/product-collapsible-scooter.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/designer/search-thumbnail-1-uu-N-W5V-SGn.png",
    dest: "images/product-smart-watch.png",
  },
  // About page images
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/about-spark-ideation-6Ir7l1ilBOPO.png",
    dest: "images/about-spark-ideation.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/about-blueprint-render-I4mXkk43KXCq.png",
    dest: "images/about-blueprint-render.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/about-signal-community-Ojw0pu35SyLS.png",
    dest: "images/about-signal-community.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/team-studio-scene-jzg_q_2Xa6fK.png",
    dest: "images/team-studio-scene.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/team-avatar-1-2M3QWOw04Yzm.png",
    dest: "images/team-avatar-1.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/team-avatar-2-m7NzZe9ko9pi.png",
    dest: "images/team-avatar-2.png",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/vulnerable-blue-otter/team-avatar-3-Cicf8ETlJ8S7.png",
    dest: "images/team-avatar-3.png",
  },
  // SEO assets
  {
    url: "https://brevityassets.brevity.workers.dev/public/favicon.svg",
    dest: "seo/favicon.svg",
  },
  {
    url: "https://brevityassets.brevity.workers.dev/public/og-1.png",
    dest: "seo/og-image.png",
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(publicDir, destPath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });

    const protocol = url.startsWith("https") ? https : https;
    protocol.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const ws = fs.createWriteStream(fullPath);
      res.pipe(ws);
      ws.on("finish", () => {
        ws.close();
        console.log(`✓ ${destPath}`);
        resolve();
      });
      ws.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  // Batch 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map((a) => download(a.url, a.dest)));
  }
  console.log("Done!");
}

main().catch(console.error);
