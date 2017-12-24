import moment from 'moment';

export const fromNow: any = ( value: string | Date ): string =>
{
    if ( value == null )
    {
        return '';
    }

    return moment(value).fromNow();
};

export default fromNow;