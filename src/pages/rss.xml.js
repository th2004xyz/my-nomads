import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const builds = await getCollection('builds');
	const sorted = [...builds].sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sorted.map((entry) => ({
			title: entry.data.title,
			description: entry.data.summary,
			pubDate: entry.data.date,
			link: `/builds/${entry.id}/`,
		})),
	});
}
