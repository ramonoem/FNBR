import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class UpComings {
    @observable loading = false;
    @observable refreshing = false;
    @observable listUpComings =[];

    @action fetchDataUpComing(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlUpComing). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listUpComings = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default UpComings;