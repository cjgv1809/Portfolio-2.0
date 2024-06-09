import { useEffect } from "react";

export function useMetaTagThemeColor(color: string) {
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]')!;

    if (!metaTag) {
      const metaTag = document.createElement("meta");
      metaTag.setAttribute("name", "theme-color");
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute("content", color);
  }, [color]);
}
