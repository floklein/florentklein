import type { MetadataRoute } from "next";
import { texts } from "@/lib/texts";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Florent Klein",
    short_name: "Florent Klein",
    description: texts.title,
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
