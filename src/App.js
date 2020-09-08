import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MainInfo from './components/MainInfo';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('https://covid19-brazil-api.now.sh/api/report/v1')
        .then((res) => setData(res.data.data));
    }, 1000);
  }, []);

  return (
    <div className="h-100 container-fluid">
      {data.length === 0 && <Loader />}
      {data.length !== 0 && <MainInfo data={data} />}
    </div>
  );
}

export default App;
