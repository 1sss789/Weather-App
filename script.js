const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=45.4112&longitude=-75.6981&current=temperature_2m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=America%2FNew_York';

fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const dates = data.daily.time;
        const maxTemps = data.daily.temperature_2m_max;
        const minTemps = data.daily.temperature_2m_min;
        const weatherCodes = data.daily.weather_code; // Will use function that will convert the codes into descriptions
        

        dates.forEach((date, index) => {
            
            const dat = new Date(date)
            dat.setDate(dat.getDate() + 1)
            //WeatherCard information
            document.getElementById(`carddate${index}`).textContent = dat.toDateString().slice(4,10)
            document.getElementById(`cardweather${index}`).textContent = `${minTemps[index]}°C / ${maxTemps[index]}°C`;
        

            //Table information
            document.getElementById(`date${index}`).textContent = date; //getElementById searches for the element which has the id of that and that textcontent is changed to the information date.
            document.getElementById(`temp${index}`).textContent = `${minTemps[index]}°C / ${maxTemps[index]}°C`;
            document.getElementById(`weather${index}`).textContent = convertWeatherCodeToText(weatherCodes[index]); // Implement this function based on your needs

            
        });
        
        
        // '2024-03-21'
    })
    .catch(error => console.log('Error fetching data:', error));


function convertWeatherCodeToText(code) {
    // Converting weather code to human-readable text
    const weatherConditions = {
        '0': 'Clear skies',
        '1': 'Dissolving clouds',
        '2': 'Unchanged skies',
        '3': 'Developing clouds',
        '4': 'Smoke reduced visibility',
        '5': 'Haze',
        '6': 'Airborne dust',
        '7': 'Ground dust',
        '8': 'Dust whirls',
        '9': 'Duststorm',
        '10': 'Mist',
        '11': 'Fog patches',
        '12': 'Continuous shallow fog',
        '13': 'Lightning without thunder',
        '14': 'Unreaching precipitation',
        '15': 'Distant precipitation',
        '16': 'Nearby precipitation',
        '17': 'Dry thunderstorm',
        '18': 'Squalls',
        '19': 'Funnel cloud',
        '20': 'Light drizzle',
        '21': 'Rain',
        '22': 'Snow',
        '23': 'Mixed precipitation',
        '24': 'Freezing drizzle',
        '25': 'Rain showers',
        '26': 'Snow showers',
        '27': 'Hail showers',
        '28': 'Fog',
        '29': 'Thunderstorm',
        '30': 'Moderate duststorm',
        '31': 'Steady duststorm',
        '32': 'Worsening duststorm',
        '33': 'Severe duststorm',
        '34': 'Steady severe duststorm',
        '35': 'Worsening severe duststorm',
        '36': 'Light blowing snow',
        '37': 'Heavy drifting snow',
        '38': 'Moderate blowing snow',
        '39': 'Heavy blowing snow',
        '40': 'Distant fog',
        '41': 'Patchy fog',
        '42': 'Thinning fog',
        '43': 'Thick fog',
        '44': 'Steady fog',
        '45': 'Developing fog',
        '46': 'Worsening fog',
        '47': 'Thickening fog',
        '48': 'Rime fog',
        '49': 'Heavy rime fog',
        '50': 'Intermittent light drizzle',
        '51': 'Continuous light drizzle',
        '52': 'Intermittent moderate drizzle',
        '53': 'Continuous moderate drizzle',
        '54': 'Intermittent heavy drizzle',
        '55': 'Continuous heavy drizzle',
        '56': 'Light freezing drizzle',
        '57': 'Heavy freezing drizzle',
        '58': 'Light drizzle and rain',
        '59': 'Heavy drizzle and rain',
        '60': 'Intermittent light rain',
        '61': 'Continuous light rain',
        '62': 'Intermittent moderate rain',
        '63': 'Continuous moderate rain',
        '64': 'Intermittent heavy rain',
        '65': 'Continuous heavy rain',
        '66': 'Light freezing rain',
        '67': 'Heavy freezing rain',
        '68': 'Light mixed rain and snow',
        '69': 'Heavy mixed rain and snow',
        '70': 'Intermittent light snow',
        '71': 'Continuous light snow',
        '72': 'Intermittent moderate snow',
        '73': 'Continuous moderate snow',
        '74': 'Intermittent heavy snow',
        '75': 'Continuous heavy snow',
        '76': 'Diamond dust',
        '77': 'Snow grains',
        '78': 'Star-like snow crystals',
        '79': 'Ice pellets',
        '80': 'Light rain showers',
        '81': 'Moderate rain showers',
        '82': 'Heavy rain showers',
        '83': 'Light mixed showers',
        '84': 'Heavy mixed showers',
        '85': 'Light snow showers',
        '86': 'Heavy snow showers',
        '87': 'Light snow pellets',
        '88': 'Heavy snow pellets',
        '89': 'Light hail',
        '90': 'Heavy hail',
        '91': 'Light rain thunderstorm',
        '92': 'Heavy rain thunderstorm',
        '93': 'Light snow thunderstorm',
        '94': 'Heavy snow thunderstorm',
        '95': 'Moderate thunderstorm',
        '96': 'Moderate hail thunderstorm',
        '97': 'Heavy thunderstorm',
        '98': 'Dust thunderstorm',
    };
    return weatherConditions[code] || 'Weather data unavailable';
}
