import { createClient, Entry, Space, ContentfulClientApi, ContentTypeCollection } from 'contentful';

export default class ContentfulService
{
    /**
     * Return a contentful client that uses your api key and has access to a specified space
     * @returns {ContentfulClientApi}
     */
    private static contentfulClient(): ContentfulClientApi
    {
        return createClient({
            accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY,
            space: process.env.VUE_APP_CONTENTFUL_SPACE
        });
    }

    /**
     * Get the entire content model of the current space
     * This includes all content types and their field information
     * @return {Promise<ContentTypeCollection | never | void>}
     */
    public static getContentModel(): Promise<ContentTypeCollection>
    {
        return this.contentfulClient().getContentTypes()
            .then((response: any) => response.items)
            .catch(console.error);
    }

    /**
     * Get details of a specific content type
     * @param contentTypeId
     * @returns {Promise<ContentType | never | void>}
     */
    public static getContentType(contentTypeId: string): any
    {
        return this.contentfulClient().getContentType(contentTypeId)
            .then((contentType: any) => contentType)
            .catch(console.error);
    }

    /**
     * Get all entries with content type 'sprite'
     * @returns {Promise<EntryCollection<any> | never | void>}
     */
    public static getSprites(): Promise<Entry<any>[]>
    {
        return this.contentfulClient().getEntries({
                content_type: 'sprite'
            })
            .then((response: any) => response.items)
            .catch(console.error);
    }

    /**
     * Get details of a single sprite content item
     * @param entryId
     * @returns {Promise<Entry<any> | never | void>}
     */
    public static getSprite(entryId: string): Promise<Entry<any>>
    {
        return this.contentfulClient().getEntry(entryId)
            .then((entry: any) => entry)
            .catch(console.error);
    }
}