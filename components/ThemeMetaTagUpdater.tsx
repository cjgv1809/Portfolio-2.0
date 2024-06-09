import { useMetaTagThemeColor } from "@/hooks/useMetaTagThemeColor";
import { useTheme } from "@/hooks/useTheme";

function ThemeMetaTagUpdater() {
  const { theme } = useTheme();
  const themeSelected = theme === "dark" ? "#141414" : "#fff";
  useMetaTagThemeColor(themeSelected);
  return null;
}

export default ThemeMetaTagUpdater;
