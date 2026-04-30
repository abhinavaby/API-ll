const URL="https://meowfacts.herokuapp.com";


const getfacts= async ()=>{
    let response=await fetch(URL);
    
    let data=await response.json();
    
    document.getElementById("facts").innerText=data.data[0];
    document.getElementById("a").style.display="none";
       
}
