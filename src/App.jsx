import React from 'react'
import Galaxy from './components/Galaxy';
import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import {MdOutlineZoomOutMap} from 'react-icons/md';
import {MdOutlineZoomInMap} from 'react-icons/md';
import {BsFillTrashFill} from 'react-icons/bs'


const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [diameter, setDiameter] = useState('');
  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000
    },
  ]);

  const style = {
    display: "flex",
    flexDirection: "Column",
    gap: 10,
  }

  const styleContainer = {
    display: "flex",
    gap: 10
  }



  const handleDepan = () => {
    setGalaxies([...galaxies, { id: id, name: name, diameter: diameter }])
  }

  const handleBelakang = () => {
    setGalaxies([{ id: id, name: name, diameter: diameter }, ...galaxies])
  }

  const perbesar =()=> {

  }

  const perkecil =()=> {
    
  }

  return (
    <div style={styleContainer}>
      <div style={style}>
        {
          galaxies.map((value, index) => {
            return <Galaxy key={index} name={value.name} id={value.id} dmt={value.diameter} />
          })
        }
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        borderRadius: 8,
        backgroundColor: "#abdbe3",
        height: 300
      }}>
        <h4>Tambah</h4>
        <label htmlFor="">ID</label>
        <input type="text" value={id} onChange={(x) => setId(x.target.value)} />
        <label htmlFor="">Nama</label>
        <input type="text" value={name} onChange={(x) => setName(x.target.value)} />
        <label htmlFor="">Diameter</label>
        <input type="text" value={diameter} onChange={(x) => setDiameter(x.target.value)} />
        <div>
          <button onClick={handleDepan}> <IoIosAdd color={"white"} size={20} /> Tambah Depan</button>
          <button onClick={handleBelakang}> <IoIosAdd color={"white"} size={20} /> Tambah Belakang</button>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        borderRadius: 8,
        backgroundColor: "#abdbe3",
        height: 300,
        width : 300
      }}>
        <h4>Edit</h4>
        <label htmlFor="">ID</label>
        <input type="text" value={id} onChange={(x) => setId(x.target.value)} />
        <label htmlFor="">Nama</label>
        <input type="text" value={name} onChange={(x) => setName(x.target.value)} />
        <label htmlFor="">Diameter</label>
        <div>
          <button onClick={handleDepan}> <MdOutlineZoomOutMap color={"white"} size={20} />Perbesar</button>
          <button onClick={handleBelakang}> <MdOutlineZoomInMap color={"white"} size={20} />Perkecil</button>
          <button onClick={handleBelakang}> <BsFillTrashFill color={"white"} size={20} />Hapus</button>
        </div>
      </div>

    </div>
  )
}

export default App