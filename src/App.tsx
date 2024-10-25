import { useState } from 'react'
import './App.css'

type personType = {
  name: string;
  gift: string;
}

const diwaliGifts = [
  "Sweets and Savories",
  "Dry Fruits and Nuts",
  "Diya Sets",
  "Rangoli Kits",
  "Personalized Diaries",
  "Jewelry",
  "Home Decor",
  "Fashion Accessories",
  "Skincare Sets",
  "Books",
  "Watches",
  "Kitchen Gadgets",
  "Fitness Gear",
  "Tech Gadgets",
  "Board Games",
  "Art Supplies",
  "Planters",
  "Spa Vouchers",
  "Clothing",
  "Hampers"
];

const randomGift = () => diwaliGifts[Math.round(Math.random() * diwaliGifts.length - 1)]

function App() {
  const [personList, setPersonList] = useState<personType[]>([])
  const [personInp, setPersonInp] = useState<string>("")

  const addPerson = () => {
    if (personInp) setPersonList((prev) => ([...prev, { name: personInp, gift: "No gift assigned" }]))
    else alert('put some value in input first')

    setPersonInp("")
  }

  const assignGift = () => {
    setPersonList(prev => prev.map((p, index) => ({ name: p.name, gift: diwaliGifts[index] })))
  }

  const SuffleGift = () => {
    setPersonList(prev => prev.map(p => ({ name: p.name, gift: randomGift() })))
  }

  const resetGift = () => {
    setPersonList(prev => prev.map(p => ({ name: p.name, gift: "No gift assigned" })))
  }

  return (
    <div className='container'>
      <form className='upperPart' action='' onSubmit={e => e.preventDefault()}>
        <input type="text" name="name" id="name" placeholder='Enter person name' value={personInp} onChange={e => setPersonInp(e.target.value)} />
        <button type="submit" onClick={addPerson}>Add person</button>
      </form>
      <div>
        {personList.map(person => <p>{person.name} - {person.gift}</p>)}
      </div>
      <div>
        <button type="submit" onClick={assignGift}>Assign</button>
        <button type="submit" onClick={SuffleGift}>Suffle</button>
        <button type="submit" onClick={resetGift}>Reset</button>
      </div>
    </div>
  )
}

export default App
