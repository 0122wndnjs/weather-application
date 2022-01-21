import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async (city) => {
    try {
      const APIKEY = 'e49811732bf3ab59f71e5817eef83791'
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'seoul'}&appid=${APIKEY}&units=metric`)
      await setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data.main.temp
      })
    } catch (e) {
      console.log('API not loaded correctly or loaded for the first time')
    }
  }

  return (
    <main>
      <div className="App">
        <form>
          <input type='text' name='city' placeholder='City Name' />
          <button for='city'>Search</button>
        </form>
        <section>
          <h1>{allData.city}</h1>
          <h2>{allData.country}</h2>
          <h3>Temperature</h3>
          <p>{allData.temperature}°C</p>
        </section>
      </div>
    </main>
  );
}

export default App;