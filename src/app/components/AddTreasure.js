import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Treasures } from '../models';

function AddTreasure() {
  const [treasures, setTreasure] = useState([])
  useEffect(() => {
    const pullData = async () => {
      const models = await DataStore.query(Treasures);
      setTreasure(models)
    }
    pullData()
  }, [])

  const addTreasure = async () => {
    await DataStore.save(
      new Treasures({
        "name": window.prompt(),
        "value": window.prompt()
      })
    );
  }

  return (
    <>
      <div className="btn">
        <button onClick={addTreasure}>add treasure</button>
      </div>
      <div className="treasures">
        {treasures.map(treasure => (
          <div className="treasures__info">
            <h2>{treasure.name}</h2>
            <p>{treasure.value} gp</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddTreasure;