import './App.css';
import React from 'react'
function App() {
  const [mainData, setMainData] = React.useState([])
  React.useEffect(() => {
    async function getStuff() {
      const res = await fetch("https://byabbe.se/on-this-day/10/4/events.json")
      const data = await res.json()
      setMainData(data.events)
    }
    getStuff()
  }, [])
  React.useEffect(() => {
    console.log(mainData)
  }, [])
  console.log(mainData)

  return <div>
    {mainData.map(item => <div key={item.description}><p> <b>Year:</b> {item.year} </p> <p> <b>Event:</b> {item.description} </p> </div>)}
  </div>
}

export default App;
