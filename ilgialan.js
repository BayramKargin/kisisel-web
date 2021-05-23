const url = 'https://api.openweathermap.org/data/2.5/'
const key = '4d98512b2651ad07802451c01e4d8c00'

const setQuery=(e) => {
    if(e.keyCode=='13')
    getResult(havadurumu.value)
}
const getResult=(cityName)=>{
    let query='${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector('.sehir')
    sehir.innerText = '${result.name},${result.sys.country}'

    let  sıcaklık = document.querySelector('.sıcaklık')
    sıcaklık.innerText ='${Math.round(result.main.temp)}'
}

const havadurumu =document.getElementById('havadurumu')
havadurumu.addEventListener('keypress',setQuery)