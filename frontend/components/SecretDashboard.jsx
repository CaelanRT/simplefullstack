import { useState, useEffect } from "react"
import axios from 'axios';


const SecretDashboard = () => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://during-cosmetics-mandolin.ngrok-free.dev/api/v1/protected');

      setData(response.data);
      

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])


  return (
    <>
      <div>SecretDashboard</div>
      {data.map((sale)=> {
        return (
          <>
            <h3>{sale.country}</h3>
            <h5>{sale.total_sales}</h5>
          </>
        )
      })}
    </>
    
  )
}
export default SecretDashboard