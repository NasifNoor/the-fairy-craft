const fs = require("fs");
const path = require("path");

const images = [
  {
    url: "https://images.unsplash.com/photo-1618221621636-6d6a9b2f3a2b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
    name: "gallery-1.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
    name: "gallery-2.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
    name: "gallery-3.jpg",
  },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

(async () => {
  try {
    const outDir = path.join(__dirname, "..", "public", "images");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    for (const img of images) {
      const dest = path.join(outDir, img.name);
      console.log("Downloading", img.url, "->", dest);
      await download(img.url, dest);
    }

    console.log(
      "Downloaded images to public/images. You may update src/data/dummy/home.ts to point to local files if desired.",
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
