/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vectorlogo.zone" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "jupyter.org" },
      { protocol: "https", hostname: "scikit-learn.org" },
      { protocol: "https", hostname: "pandas.pydata.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "seaborn.pydata.org" },
      { protocol: "https", hostname: "reactjs.org" },
      { protocol: "https", hostname: "nodejs.org" },
    ],
  },
};

export default nextConfig;
