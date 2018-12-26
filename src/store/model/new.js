import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class News {
    @observable loading = false;
    @observable refreshing = false;
    @observable listNews =[];

    @action fetchDataNews(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlNews). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listNews = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default News;