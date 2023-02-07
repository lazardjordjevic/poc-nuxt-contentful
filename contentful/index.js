'use strict';

import {createClient} from 'contentful';

const defaultLocale = "en-US";
const journalPageContentType = "contentPage";

const contentfulClient = createClient({
    space: "g44h21187ivx",
    accessToken: "1O0kWf6DR3T2BKCOht3OmTWYava0UM-uZh6DFQOBJZI",
    host: "preview.contentful.com"
});

const getPageQuery = (params) => ({
    limit: 10,
    include: 10,
    locale: defaultLocale,
    'fields.slug': params.slug,
    content_type: params.pageContentType,
})

export async function GetJournalPage(slug) {
    const query = getPageQuery({
        slug: slug,
        pageContentType: journalPageContentType,
    })
    const { items } = await contentfulClient.getEntries(query)

    return items.length > 0 ? items[0] : null
}
