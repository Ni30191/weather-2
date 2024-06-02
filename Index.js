var inputvalue = document.queryselector('#cityinput')
var btn = document.querySelector('#add');
var city = document.queryselector('#cityoutput')
var descrip = document.queryselector('#description')
var tem = document.queryselector('#tem')
var wind = document.queryselector('#wind')
apik="d8e8a7f9a073f3a6d824d3bbc556e120"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click'), function()
{
    fetch(' https://api.openweathermap.org/data/2.5/weather?q'+inputvalue)
    .then(res=> res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = ['weather']['0']['description']
        var tempature = ['main']['temp']
        var wndspeed = ['wind']['speed']


    city.innerHTML='weeather of <span>${nameval}<span>'
    temp.innerHTML = tempature; <span>${ convertion(tempature)} c</span>
    description.innerHTML = 'sky conditions: <span>${descrip}<span>'
    wind.innerHTML = 'wind speed: <span>${wndspeed} km/h</span>'
     
})
   .catch(err => alert('you entered wrong city name'))
}
