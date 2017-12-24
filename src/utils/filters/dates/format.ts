import moment from 'moment';

export const format: any = ( value: string | Date, formatting: string, emptyValue?: string ): string =>
{
    if ( value == null )
    {
        return emptyValue || '';
    }
    else
    {
        return moment(value).format(formatting);
    }
};

export default format;