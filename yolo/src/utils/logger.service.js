import axios from "axios";

function logger (log){
    let data ={ "log" : log + ' at '+ new Date().toLocaleString() }
    axios.post(`http://localhost:4000/api/common/log`,data).then(res=>{
        console.log('logged')    
    }).catch(err=>{
        console.log('error while logging');  
    })
}

export default logger