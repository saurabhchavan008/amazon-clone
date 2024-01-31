//!dark/Light Mode
const darkModeToggle=document.querySelector('#dark-mode-toggle');
let light=document.querySelector('.lightmode')

darkModeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode');

}) 

light.addEventListener('click',function(light){
    light.target.classList.toggle('darkModeIcon')
})

//! Popup-Window
let popupCloseButton=document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#popup').style.display='none';
})


//!Weather App
let loc=document.querySelector('#weatherLocation')
let tempIcon=document.querySelector('#weatherIcon')
let tempValue=document.querySelector('#weatherTemperature')
let weatherDescription=document.querySelector('#weatherDescription')
let NavbarLocation=document.querySelector('.two')

window.addEventListener("load",()=>{
let lat;
let long;
    
if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2987338fad4fd5f2f31bf39d94703f78`
            fetch(api).then((response)=>{
                return response.json();
            })
            .then(data=>{
                const{name}=data;
                const{feels_like}=data.main;
                const{id,description}=data.weather[0];
                const{country}=data.sys
                console.log(data)

                loc.textContent=`${name}, ${country}`;
                NavbarLocation.textContent=`${name}`;
                weatherDescription.textContent=description;
                tempValue.textContent=Math.round(feels_like-273);
                if(id<300 && id>=200){
                    tempIcon.src="https://openweathermap.org/img/wn/11d@2x.png"
                }
                else if(id<400 && id>=300){
                    tempIcon.src="https://openweathermap.org/img/wn/04d@2x.png"
                }
                else if(id<600 && id>=500){
                    tempIcon.src="https://openweathermap.org/img/wn/09d@2x.png"
                }
                else if(id<700 && id>=600){
                    tempIcon.src="https://openweathermap.org/img/wn/13d@2x.png"
                }
                else if(id===800){
                    tempIcon.src="https://openweathermap.org/img/wn/01d@2x.png"
                }
                else if(id<800 && id>=700){
                    tempIcon.src="https://openweathermap.org/img/wn/50d@2x.png"
                }
                else if(id<850 && id>=801){
                    tempIcon.src="https://openweathermap.org/img/wn/02d@2x.png"
                }

            })
        })    
            
    }
})