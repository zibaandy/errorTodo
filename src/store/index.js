import {observable,action} from 'mobx';

class Store{
    @observable time
    constructor(){
        this.time=new Date()
        this.interval=setInterval(()=>{
            this.time=new Date()
        },1000)
    }
    
    startClock=()=>{
setInterval(this.interval)
    }
    @action
    pauseClock=()=>{
        clearInterval(this.interval)
            }
}
const store=new Store()
export default store