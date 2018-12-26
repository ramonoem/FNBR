import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class DailyShops {
    @observable loading = false;
    @observable refreshing = false;
    @observable listDailyShop =[];

    @action fetchDataDailyShop(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlDailyShop). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listDailyShop = responseList.data.items;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default DailyShops;