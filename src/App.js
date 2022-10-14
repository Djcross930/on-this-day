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
  const [formData, setFormData] = React.useState(
    {
      dd: dd,
      mm: mm
    }
  )
  const month = monthNames[(formData.mm - 1)]
  const [mainData, setMainData] = React.useState([])
  React.useEffect(() => {
    async function getEvents() {
      const res = await fetch(`https://byabbe.se/on-this-day/${formData.mm}/${formData.dd}/events.json`)
      const data = await res.json()
      setMainData(data.events)
    }
    getEvents()
  }, [formData.mm, formData.dd])

  function flip() {
    setMainData(mainData.reverse())
    setFlipper(prevFlipper => !prevFlipper)
    console.log(mainData)
    console.log(flipper)
  }


  function handleChange(event) {
    const { value } = event.target
    setMm(value)
  }

  function handleChangeOne(event) {
    const { value } = event.target
    setDd(value)
  }

  function handleChangeTwo(event) {
    event.preventDefault()
    setFormData({
      mm: mm,
      dd: dd
    })
  }

  return <div>
    <Nav />
    <div className="mainBody">
      <h2 className="theDate"><b> {month} {formData.dd} </b></h2>

      <form onSubmit={handleChangeTwo} className="formOne">
        <label htmlFor="formData" className="formText"><b>Or select a date to explore!</b></label>
        <br />
        <select
          id="mm"
          value={mm}
          name="mm"
          onChange={handleChange}
        >
          <option>Month</option>
          <option value="1">January</option>
          <option value="2">Febuary</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          id="dd"
          value={dd}
          name="dd"
          onChange={handleChangeOne}
        >
          <option>Day</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
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
        <input type="submit" value="Change Date" className="btn btn-info" />
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
