import './App.css';
import React from 'react'
import Nav from './components/Nav.js'
function App() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const month = monthNames[(mm - 1)]
  const [mainData, setMainData] = React.useState([])
  React.useEffect(() => {
    async function getEvents() {
      const res = await fetch(`https://byabbe.se/on-this-day/${mm}/${dd}/events.json`)
      const data = await res.json()
      setMainData(data.events)
    }
    getEvents()
  }, [])


  return <div>
    <Nav />
    <div className="mainBody">
      <h2 className="theDate"> {month} {dd} </h2>
      {mainData.map(item => <div className="main" key={item.description}><p> <b>Year:</b> {item.year} </p> <p> <b>Event:</b> {item.description} </p> </div>)}
    </div>
  </div>
}

export default App;
