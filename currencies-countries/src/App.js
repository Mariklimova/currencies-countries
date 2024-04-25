import { useState, useEffect } from 'react';
import axios from 'axios'
import style from './App.module.css';

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([])
  const [activeCurrencies, setActiveCurrencies] = useState('Select Occupation')
  const [flag, setFlag] = useState(true)


  async function getData() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
    setArrCurrencies(response.data)
  }

  function getAcyiveCurrency(e) {
    setActiveCurrencies(e.target.textContent);
    setFlag(!flag)
  }
  
  useEffect(() => {
    getData();
  }, []);

  return <>

    <div onClick = {()=>setFlag(!flag)} className={style.wrapper}>
      <p>{activeCurrencies}</p>
      {!flag?<div className={style.img}></div>:<div className={style.img_2}></div>}
    </div>

    {flag?(<div className={style.list}>{arrCurrencies.map((el)=><p onClick={getAcyiveCurrency}>{el.Cur_Name}</p>)}</div>):null}
  </>
}

export default App;
