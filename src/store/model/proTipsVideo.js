import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class ProTipsVideos {
    @observable loading = false;
    @observable refreshing = false;
    @observable listProTipsVideos = [];

    @action fetchDataProTipsVideos(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlProTipSVideo). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listProTipsVideos = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default ProTipsVideos;