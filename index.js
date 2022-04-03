const input = document.getElementById('city-input')
const submitButton = document.getElementById('submit-button')
const temp = document.getElementById('Temp')
const feelsLike = document.getElementById('feelslike')
const wind = document.getElementById('wind')
const description = document.getElementById('description')
const changebtn = document.getElementById('changebtn')

submitButton.onclick = () => {

    const name = input.value
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a41bd9b39f0d049f23ff0206c1ef01a3&units=metric`

    fetch(API_URL).then(response => response.json())
        .then(data => {
            changebtn.addEventListener('click', change)
            function change() {
                temp.innerHTML =`Temperature: ${Math.floor(data.main.temp * 1.8 + 32)}°`
                feelsLike.innerHTML = `Feels Like: ${Math.floor(data.main.feels_like *1.8 + 32)}°`
            }
            
            let title = document.getElementById('info-title')
            let image = document.getElementById('info-image')
            console.log(data)

            if (data.cod == "404") {
                title.innerHTML = "Error"
            } else {
                title.innerHTML = name
                image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                temp.innerHTML = `Temperature: ${data.main.temp}°`
                feelsLike.innerHTML = `Feels Like: ${data.main.feels_like}°`
                wind.innerHTML = `Wind: ${data.wind.deg} Degrees, ${data.wind.speed} Miles`
                description.innerHTML = data.weather[0].description

            }
            document.documentElement.style.setProperty("--display", "flex")

        }).catch(err => {
            console.log(err)
        })
}




