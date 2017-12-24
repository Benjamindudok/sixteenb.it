import Vue from 'vue';
import Component from 'vue-class-component';
import {} from 'vue-property-decorator';
import * as types from 'src/store/types';

@Component
export default class App extends Vue
{
    name: string = 'HelloWorld';
    msg: string = 'Welcome to Your Vue.js App from vue-cli';

    mounted(): void {
        this.$store.dispatch(types.GET_DATA);
    }

    get response(): string {
        return this.$store.getters.data;
    }
}