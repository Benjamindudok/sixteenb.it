import ApiService from './apiService';

export class DataService extends ApiService
{
    public static getData(): Promise<any>
    {
        return new Promise<sixteenBit.IContent>((resolve, reject) =>
        {
            let synchronousContent: sixteenBit.IContent = require('../../static/content.json');
            resolve(synchronousContent);
        });
    }
}

export default DataService;