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
          <p>{monster.name}</p>
        ))}
      </div>
    </>
  );
}

export default AddMonster;