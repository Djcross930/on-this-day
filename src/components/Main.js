import React from 'react'

export default function Main() {
  // const [dataDisplay, setdataDisplay] = React.useState({
  //   title: "",
  //   description: ""
  // })

  const [mainData, setMainData] = React.useState("")
  React.useEffect(function () {
    fetch("https://byabbe.se/on-this-day/10/4/events.json")
      .then(res => res.json())
      .then(data => setMainData(data))
  }, [])
  return console.log(mainData.events)

  // function onThisDay() {
  //   const allData = mainData.data
  //     setdataDisplay()
  // }
}