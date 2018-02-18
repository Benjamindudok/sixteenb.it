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
        columns: number;
        rows: number;
        preview: string;
        image: string;
    }

    enum Categories {
        'environment',
        'characters',
        'items',
        'ui'
    }

    enum Tags {
        'rpg',
        'npc',
        'side-scroller',
        'top-down'
    }
}