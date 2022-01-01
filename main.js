var search=document.querySelector('.search');
var city=document.querySelector('.city');
var country=document.querySelector('.country');
var value=document.querySelector('.value');
var shortDesc=document.querySelector('.short-desc');
var country=document.querySelector('.country');
var visibility=document.querySelector('.visibility span');
var wind=document.querySelector('.wind span');
var sun=document.querySelector('.sun span');
var time=document.querySelector('.time');
var content=document.querySelector('.content');
var body=document.querySelector('.body')

async function chageWeather(index){
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${index}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    let data= await fetch(apiURL).then(res=>res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerHTML=data.name;
        country.innerHTML=data.sys.country;
        visibility.innerHTML=data.visibility+'m';
        wind.innerHTML=data.wind.speed+'m/s';
        sun.innerHTML=data.clouds.all+'%';
        value.innerHTML=Math.round(data.main.temp)+`<sup>o</sup>C`;
        shortDesc.innerHTML=data.weather[0].main;
        time.innerHTML = new Date().toLocaleString('vi');
        if(Math.round(data.main.temp)>25)
        {
            body.setAttribute('class','hot')
        }
        else 
        {
            body.setAttribute('class','weather')
        }
    }
    else{
        content.classList.add('hide')
    }
}
chageWeather()
search.addEventListener('keypress',(e)=>{
    if(e.code == 'Enter')
    {
        let index=search.value.trim();
        chageWeather(index)
    }
})
chageWeather('Ha Noi')