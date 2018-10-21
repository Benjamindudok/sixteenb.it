declare namespace sixteenBit
{
    export interface IAuthorType
    {
        name: string;
        website: string;
    }

    export interface IPageType
    {
        title: string;
        introduction: string;
        content: string;
    }

    export interface IGridItemType
    {
        title: string;
        columnSpan: number;
        rowSpan: number;
    }

    export interface ISpriteType
    {
        uid: string;
        slug: string;
        title: string;
        category: string;
        tags: string[];
        backgroundColor: string;
        thumbnail: any;
        preview: any[];
        image: any;
        gridPosition: IGridItemType;
        author: IAuthorType;
    }
}

export default sixteenBit;