import './App.css';
import React from 'react'
import Nav from './components/Nav.js'
function App() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [flipper, setFlipper] = React.useState(true)
  const today = new Date();
  const [dd, setDd] = React.useState(String(today.getDate()).padStart(2, '0'))
  const [mm, setMm] = React.useState(String(today.getMonth() + 1).padStart(2, '0'))
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
      <h2 className="theDate"> {month} {dd} </h2>

      <form>
        <label htmlFor="favColor">Select a date to explore!</label>
        <br />
        <select>
          <option>Month</option>
          <option value="01">January</option>
          <option value="02">Febuary</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select>
          <option>Day</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Send it in" />
      </form>
      <div className="buttonChron">
        <button className="btn btn-info" onClick={flip}> {flipper ? "Newest to Oldest" : "Oldest to Newest"} </button>
      </div>
      <div>
      </div>
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
