import { action, observable, } from 'mobx';
import axios from 'axios';
// import {  getData } from '../../service/dataServices';
import evn from '../../service/evn';

class Challenges {
    @observable loading = false;
    @observable refreshing = false;
    @observable listChallenges =[];

    @action fetchDataChallenges(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlChallenge). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listChallenges = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default Challenges;