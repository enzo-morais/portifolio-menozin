import { projects } from "@/lib/projects";

export default function sitemap() {
  const base = "https://seu-dominio.vercel.app";

  const projectUrls = projects.map((p) => ({
    url: `${base}/projetos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/sobre`, lastModified: new Date() },
    { url: `${base}/projetos`, lastModified: new Date() },
    { url: `${base}/contato`, lastModified: new Date() },
    ...projectUrls,
  ];
}
