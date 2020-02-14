//Get
fetchApi = (type,url,callback)=>{
    //Creating request
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        const {readyState,state,responseText,onerror} = this;
        if(readyState ===4 && state ===200){
            return callback(responseText,onerror);
        }else{
            return callback(responseText,onerror);
        }
    }
    xhttp.open(type,url,true);
    xhttp.send();
}

fetchApi('GET','https://https://jsonplaceholder.typicode.com/todos/1',(result,err)=>{
    if(!err){
        console.log(result);
    }else{
        console.log(err);
    }
})