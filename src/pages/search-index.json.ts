import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', (a) => !a.data.draft);

  const index = articles.map((article) => {
    const slug = article.id.replace(/\.mdx?$/, '');
    return {
      title: article.data.title,
      description: article.data.description,
      category: article.data.category,
      url: `/${slug}/`,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
