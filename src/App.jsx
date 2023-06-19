import React from 'react'
import Galaxy from './components/Galaxy';
import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { MdOutlineZoomInMap } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillSave } from 'react-icons/ai'


const App = () => {
  const [id, setId] = useState('');
  const [id2, setId2] = useState('');
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
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



  const handleDepan = () => {
    setGalaxies([...galaxies, { id: id, name: name, diameter: diameter }])
  }

  const handleBelakang = () => {
    setGalaxies([{ id: id, name: name, diameter: diameter }, ...galaxies])
  }

  const Perbesar = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == id2) {
        return {
          ...value,
          diameter: value.diameter + 10000
        }
      } else {
        return value
      }
    }))
  }

  const Perkecil = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == id2) {
        return {
          ...value,
          diameter: value.diameter - 10000
        }
      } else {
        return value
      }
    }))
  }

  const handleSave = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == id2) {
        return {
          ...value,
          name: name2
        }
      } else {
        return value
      }
    }))
  }

  const hapusById= () => {
    setGalaxies(galaxies.filter((value) => value.id !== parseInt(id2)))
  }


  const hapusSemua = () => {
    setGalaxies(galaxies.slice(galaxies.length, 0));
  }

  const hapusDepan = () => {
    setGalaxies(galaxies.slice(1));
  }

  const hapusBelakang = () => {
    setGalaxies(galaxies.slice(0, -1));
  }

  const styleData = {
    display: "flex",
    flexDirection: "Column",
    gap: 10,
  }

  const styleContainer = {
    display: "flex",
    gap: 10
  }

  const styleTambah = {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#abdbe3",
    height: 300
  }

  const styleEdit = {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#abdbe3",
    height: 300,
    width: 300
  }

  return (
    <div style={styleContainer}>
      <div style={styleData}>
        {
          galaxies.map((value, index) => {
            return <Galaxy key={index} name={value.name} id={value.id} dmt={value.diameter} />
          })
        }
      </div>
      <div style={styleTambah}>
        <h3>Tambah</h3>
        <label htmlFor="">ID</label>
        <input type="text" value={id} onChange={(x) => setId(x.target.value)} />
        <label htmlFor="">Nama</label>
        <input type="text" value={name} onChange={(x) => setName(x.target.value)} />
        <label htmlFor="">Diameter</label>
        <input type="text" value={diameter} onChange={(x) => setDiameter(parseInt(x.target.value))} />
        <div>
          <button onClick={handleDepan}> <IoIosAdd color={"white"} size={20} /> Tambah Depan</button>
          <button onClick={handleBelakang}> <IoIosAdd color={"white"} size={20} /> Tambah Belakang</button>
        </div>
      </div>

      <div style={styleEdit}>
        <h3>Edit</h3>
        <label htmlFor="">ID</label>
        <input type="text" value={id2} onChange={(x) => setId2(x.target.value)} />
        <label htmlFor="">Nama</label>
        <input type="text" value={name2} onChange={(x) => setName2(x.target.value)} />
        <label htmlFor="">Diameter</label>
        <div>
          <button onClick={Perbesar}> <MdOutlineZoomOutMap color={"white"} size={20} />Perbesar</button>
          <button onClick={Perkecil}> <MdOutlineZoomInMap color={"white"} size={20} />Perkecil</button>
          <button onClick={hapusById}> <BsFillTrashFill color={"white"} size={20} />Hapus</button>
          <button onClick={handleSave}> <AiFillSave color={"white"} size={20} />Save</button>
        </div>
      </div>
      <div style={styleEdit}>
        <h3>Hapus</h3>
        <div>
          <button onClick={hapusDepan}> <BsFillTrashFill color={"white"} size={20} />Depan</button>
          <button onClick={hapusBelakang}> <BsFillTrashFill color={"white"} size={20} />Belakang</button>
          <button onClick={hapusSemua}> <BsFillTrashFill color={"white"} size={20} />Semua</button>
        </div>
      </div>

    </div>
  )
}

export default App