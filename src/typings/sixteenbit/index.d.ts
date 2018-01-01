declare namespace sixteenBit
{
    interface IContent {
        environment: IItem[];
        characters: IItem[];
        items: IItem[];
        ui: IItem[];
    }

    interface IItem {
        name: string;
        slug: string;
        tags: string[];
        uuid: string;
    }

    const enum tags {
        isometric,
        '2d'
    }
}