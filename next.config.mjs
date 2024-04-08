import { fileURLToPath } from 'url';
import { dirname } from 'path';

/** @type {import('next').NextConfig} */
import path from "path";

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes("_app")) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    return config;
  },
}
export default nextConfig;
