import ApiService from './apiService';
import { AxiosError, AxiosResponse } from 'axios';

export class DataService extends ApiService
{
    public static getData(): Promise<any>
    {
        return new Promise<sixteenBit.IContent>((resolve, reject) =>
        {
            this.httpClient().get('/content.json')
                .then((response: AxiosResponse) => { resolve(response.data as sixteenBit.IContent); })
                .catch((error: AxiosError) => { reject(error); });
        });
    }
}

export default DataService;