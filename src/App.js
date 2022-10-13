import './App.css';
import React from 'react'
import Nav from './components/Nav.js'
function App() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [flipper, setFlipper] = React.useState(true)
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

  function flip() {
    setMainData(mainData.reverse())
    setFlipper(prevFlipper => !prevFlipper)
    console.log(mainData)
    console.log(flipper)
  }


  return <div>
    <Nav />
    <div className="mainBody">
      <button onClick={flip}> click me </button>
      <h2 className="theDate"> {month} {dd} </h2>
      {mainData.map(item => <div className="main" key={item.description}><div className="card">
        <div className="card-header">
          <p>
            <b>Year:</b> {item.year}
          </p>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> <b>Event:</b> {item.description}  </p>
          </blockquote>
        </div>
      </div>
      </div>)}
    </div>
  </div>
}

export default App;
