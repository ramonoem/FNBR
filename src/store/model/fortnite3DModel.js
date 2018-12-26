import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class Fortnite3DModels {
    @observable loading = false;
    @observable refreshing = false;
    @observable listFortnite3DModels =[];

    @action fetchDataFortnite3DModels(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlFortnite3DModel). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listFortnite3DModels = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default Fortnite3DModels;