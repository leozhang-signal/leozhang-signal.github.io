import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../content/consts';

const title = SITE.title;
const description = SITE.description;

export async function GET(context) {
  const posts = await getCollection('post');
  
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.id}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}