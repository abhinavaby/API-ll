URL="https://api.thecatapi.com/v1/images/search?limit=10";
const get= async ()=>{
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    document.getElementById("cat-image").src=data[0].url;
    
}