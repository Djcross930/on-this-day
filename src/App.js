import './App.css';
import React from 'react'
function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  const [mainData, setMainData] = React.useState([])
  React.useEffect(() => {
    async function getStuff() {
      const res = await fetch(`https://byabbe.se/on-this-day/${mm}/${dd}/events.json`)
      const data = await res.json()
      setMainData(data.events)
    }
    getStuff()
  }, [])


  return <div>
    {mainData.map(item => <div key={item.description}><p> <b>Year:</b> {item.year} </p> <p> <b>Event:</b> {item.description} </p> </div>)}
  </div>
}

export default App;
