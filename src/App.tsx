import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { IAccomodations } from './types'

/* Fetching the data from the json file. */
async function getAccomodations() {
  const res = await fetch("/logements.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();;
  return data
}

/**
 * The function is a React component that uses the useState hook to set the state of the component to
 * an array of objects. The useEffect hook is used to fetch data from an API and set the state of the
 * component to the data returned from the API. The component is then rendered to the DOM.
 */
const App = () => {
  const [accomodations, setAccomodations] = useState<IAccomodations>([])
  useEffect(() => {
    getAccomodations().then(accomodationData => {
      setAccomodations(accomodationData)
    })
  }, [])

return (

  <Router>
    <Routes>
     <Route path="/" element={<Home {...accomodations} />} />
    </Routes>
  </Router>
  )
}

export default App