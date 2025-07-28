import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
     S3ID: process.env.S3ID,
S3KEY: process.env.S3KEY,
S3REGION: process.env.S3REGION,
S3ENDPOINTURL: process.env.S3ENDPOINTURL,
S3BUCKET: process.env.S3BUCKET,
  },
  
  
};

export default nextConfig;
