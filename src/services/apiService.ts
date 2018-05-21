import Axios, { AxiosInstance } from 'axios';

export default class ApiService
{
    /**
     * Return a http client with base url and other general settings
     * @returns {AxiosInstance}
     */
    public static httpClient(): AxiosInstance
    {
        return Axios.create({
            baseURL: '',
            timeout: 15000
        });
    }
}