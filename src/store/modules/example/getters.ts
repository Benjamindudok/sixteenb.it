import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { IExampleState } from 'src/store/modules/example';

export interface IExampleGetters
{
    data: any;
}

export const getters: GetterTree<IExampleState, IStoreState> = {

    data( state: IExampleState ): any
    {
        return state.data;
    }
};

export default getters;