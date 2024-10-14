import { hostname } from "os";

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com", 
        },
        {
            protocol: "https",
            hostname: "ideogram.ai",
        },
        {
            protocol: "https",
            hostname: "www.pexels.com"
        },
        {
          protocol: "https",
          hostname: "static.wixstatic.com",
        },
        {
          protocol: "https",
          hostname: "people.pic1.co",
        },
        {
          protocol: "https",
          hostname: "app-uploads-cdn.fera.ai",
        },
      ],
    },
  };
  
  export default nextConfig;