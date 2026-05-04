async function weather(){
    let city=document.querySelector("input").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b304593d7c0b8943f2ea0c0dc7d1355`);
    const data = await response.json();
    console.log(data);
    let temp=data.main.temp-273.15;
    document.getElementById("result").innerHTML=`<h2>${data.name}</h2>
    <h3>${temp.toFixed(2)}°C</h3>
    <p>${data.weather[0].main}</p>`;
}