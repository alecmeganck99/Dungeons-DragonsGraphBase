import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Rooms } from '../models';

function AddRoom() {
  const [rooms, setRoom] = useState([])
  useEffect(() => {
    const pullData = async () => {
      const models = await DataStore.query(Rooms);
      setRoom(models)
    }
    pullData()
  }, [])

  const addRoom = async () => {
    await DataStore.save(
      new Rooms({
        "name": window.prompt(),
      })
    );
  }

  return (
    <>
      <div className="btn">
        <button onClick={addRoom}>add room</button>
      </div>
      <div className="rooms">
        {rooms.map(room => (
          <p>{room.name}</p>
        ))}
      </div>
    </>
  );
}

export default AddRoom;