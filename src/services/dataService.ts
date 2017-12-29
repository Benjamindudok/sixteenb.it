import ApiService from './apiService';
import { AxiosError, AxiosResponse } from 'axios';

export class DataService extends ApiService
{
    public static getData(): Promise<any>
    {
        return new Promise<any>((resolve, reject) =>
        {
            this.httpClient().get('/content.json')
                .then((response: AxiosResponse) => { resolve(response.data); })
                .catch((error: AxiosError) => { reject(error); });
        });
    }
}

export default DataService;