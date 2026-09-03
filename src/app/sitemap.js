export default function sitemap() {
  return [
    {
      url: "https://myfitnessvlog.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://myfitnessvlog.vercel.app/en/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
  ];
}