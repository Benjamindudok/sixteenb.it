const contentful: any = require('contentful');

export default class ContentfulService
{
    /**
     * Return a http client with base url and authorization settings
     * @returns {AxiosInstance}
     */
    private static httpClient(): any
    {
        console.log(process.env.VUE_APP_CONTENTFUL_API_KEY, process.env.VUE_APP_CONTENTFUL_SPACE);

        return contentful.createClient({
            accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY,
            space: process.env.VUE_APP_CONTENTFUL_SPACE
        });
    }

    public static getContentModel(): any
    {
        return this.httpClient().getContentTypes()
            .then((response: any) => console.log(response.items))
            .catch(console.error);
    }

    public static getContentType(contentTypeId: string): any
    {
        return this.httpClient().getContentType(contentTypeId)
            .then((contentType: any) => console.log(contentType))
            .catch(console.error);
    }

    public static getEntries(): any
    {
        return this.httpClient().getEntries()
            .then((response: any) => console.log(response.items))
            .catch(console.error);
    }

    public static getEntry(entryId: string): any
    {
        return this.httpClient().getEntry(entryId)
            .then((entry: any) => console.log(entry))
            .catch(console.error);
    }
}