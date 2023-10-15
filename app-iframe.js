const apiButton = document.getElementById('apiButton')
const apiData = document.getElementById('apiData')

const url = 'http://api.weatherunlocked.com/api/current/ar.B1870?app_id=b46e9457&app_key=c2c57f58ad22962db0b49d68e5e1f608'

const callApi = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        apiData.innerText = JSON.stringify("Temperatura: " + data.temp_c + " grados C°" + " y Humedad: " + data.humid_pct + "%")
    })
    .catch(e => console.log(new Error(e)))
}

apiButton.addEventListener('click', callApi)


