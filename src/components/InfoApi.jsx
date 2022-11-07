import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const InfoApi = () => {
  const colors = [
    '#2c73d2',
    '#0081cf',
    '#0089ba',
    '#008e9b',
    '#008f7a',
    '#b0a8b9'
  ];
  const colorIndex = Math.floor(Math.random()*colors.length);
    document.body.style = `background: ${colors[colorIndex]}`;

  const [information, setInformation] = useState({});
  const [typeId, setTypeId] = useState('');

  useEffect(() => {
    const indexRandom = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${indexRandom}`).then(res => setInformation(res.data));
  }, []);
  const serachTypeId = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`).then(res => setInformation(res.data));
  }
  console.log(information)
  return (
    <div style={{color: colors[colorIndex]}}>
      <div className="inputSearch">
        <input
          placeholder='type a location id'
          type="text"
          value={typeId}
          onChange={e => setTypeId(e.target.value)}
        />
        <button onClick={serachTypeId}>Search</button>
      </div>
      <h1>{information.name}</h1>
      <div className="infoLocation">
        <h2>type: {information.type}</h2>
        <h2>dimension: {information.dimension}</h2>
        <h2>population: {information.residents?.length}</h2>
      </div>
      <div className="residentsInformation">
        <ul>
          {information.residents?.map((url) => (
            <ResidentInfo url={url} key={url} />
          ))}
        </ul>
      </div>


    </div>
  );
};

export default InfoApi;