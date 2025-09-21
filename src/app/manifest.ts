import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "callAI - AI Services Company",
    short_name: "callAI",
    description: "AI that moves your business. From automation to decision-making, we build tailored intelligence for real-world results.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F14",
    theme_color: "#4F46E5",
    icons: [
      {
        src: "/logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
