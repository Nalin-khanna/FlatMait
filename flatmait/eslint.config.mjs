import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["src/app/generated/prisma/**",  ".next/**" , "node_modules/**"],

  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Example overrides:
      "@next/next/no-img-element": "off", // use native <img> if needed
      "react/react-in-jsx-scope": "off", // not needed with React 17+
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
