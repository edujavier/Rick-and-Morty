import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ url }) => {
  const [items, setItems] = useState({});
  useEffect(() => {
    axios.get(url).then(res => setItems(res.data));
  }, []);
  return (
    <div>
      <img src={items.image} alt="" />
      <p>
        {items.name} <br />

        {/*{items.status === "Alive"?  'green' : items.status==='Dead'? "red" : "gray"}*/}

        <div className={`${items.status === "Alive" ? 'green' : items.status === 'Dead' ? "red" : "gray"} circle`} ></div>

        {items.status} - {items.species} <br />
        {items.origin?.name} <br />
        {items.episode?.length}
      </p>


    </div>
  );
};

export default ResidentInfo;