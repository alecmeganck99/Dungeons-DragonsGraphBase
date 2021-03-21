import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Monsters } from '../models';

function AddMonster() {
  const [monsters, setMonster] = useState([])
  useEffect(() => {
    const pullData = async () => {
      const models = await DataStore.query(Monsters);
      setMonster(models)
    }
    pullData()
  }, [])

  const addMonster = async () => {
    await DataStore.save(
      new Monsters({
        "cr": window.prompt('CR'),
        "name": window.prompt('Name'),
        "type": window.prompt('Type'),
        "size": window.prompt('Size')
      })
    );
  }

  return (
    <>
      <div className="btn">
        <button onClick={addMonster}>add monster</button>
      </div>
      <div className="monsters">
        {monsters.map(monster => (
          <div className="monsters__info">
            <h2>{monster.name}</h2>
            <p>{monster.cr}</p>
            <p>{monster.type}</p>
            <p>{monster.size}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddMonster;