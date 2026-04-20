


async function getWeather(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=33.3167&longitude=130.5167&current=temperature_2m,precipitation&timezone=Asia%2FTokyo";
    const res=await fetch(url)
    console.log(res);
    const data = await res.json();
    const temp = data.current_weather.temperature;
    const rain = data.current.precipitation;

    const temDisp = document.getElementById("temperature")
    const outfitDisp =document.getElementById("outfit")

    temDisp.textContent = temp;

    console.log("今の気温は:", temp);

    console.log("雨",rain);

    if(temp>=25){
        outfitDisp.textContent="Tシャツ";
    }else if(temp>=20){
        outfitDisp.textContent="Tシャツor薄手の長袖";
    }else if(temp>=15){
        outfitDisp.textContent="スウェットor軽めのアウター";
    }else if(temp>=10){
        outfitDisp.textContent="ニットorパーカーorジャケット";
    }else if(temp>=5){
        outfitDisp.textContent="厚手コートorヒートテック";
    }else{
        outfitDisp.textContent="ダウンコート";
    }
    
}

getWeather();

