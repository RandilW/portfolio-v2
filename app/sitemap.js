// generating the site map for better crawling
import projects from "./components/json/projects";

const projectsSiteMap = projects.map((project) => {
  const { id } = project;

  return {
    url: `https://randilw.com/work/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  };
});

export default function sitemap() {
  return [
    {
      url: "https://randilw.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://randilw.com/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://randilw.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectsSiteMap,
  ];
}
