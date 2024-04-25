import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
export const BASE_URL = "http://localhost:9000/";
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState();
  

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);

      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);


  return (
    <div>
        <Navbar data={data} />
        <HeroSection data={data}/>
         
    </div>
  )
}

export default App
