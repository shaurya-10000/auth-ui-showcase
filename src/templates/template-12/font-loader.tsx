import { fontImportUrl } from "./theme";

interface FontLoaderProps {
  family: string;
}

/** Loads the chosen Google Font. Renders nothing when the default system font is selected. */
export default function FontLoader({ family }: FontLoaderProps) {
  const url = fontImportUrl(family);
  if (!url) return null;

  return <style>{`@import url("${url}");`}</style>;
}
