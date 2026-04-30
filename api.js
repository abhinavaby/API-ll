const URL="https://meowfacts.herokuapp.com";


const getfacts= async ()=>{
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data.data[0]);
    document.getElementById("facts").innerText=data.data[0];
    document.getElementById("a").style.display="none";
       
}
