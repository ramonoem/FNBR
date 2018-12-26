import { action, observable, } from 'mobx';
import axios from 'axios';
import evn from '../../service/evn';

class SoundBoards {
    @observable loading = false;
    @observable refreshing = false;
    @observable listSoundBoards =[];

    @action fetchDataSoundBoards(){
            this.loading = true 
            this.refreshing = true
            axios.get(evn.baseUrl + evn.baseUrlSoundBoard). 
                then((responseList)=>{
                this.loading = false 
                this.refreshing = false
                this.listSoundBoards = responseList.data;
            })
            .catch(function (error) {
                console.log(error);
              });
       
    }
}
export default SoundBoards;