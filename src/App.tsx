import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error404 from './pages/Error404'
import { IAccomodations } from './types'



/* Fetching the data from the json file. */
async function getAccomodations() {
  const res = await fetch("./datas/logements.json", {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
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
     <Route path="/" element={<Home accomodations={accomodations} />} />
     <Route path="/about" element={<About />} />
     <Route path="/lodging/:id" element={<Lodging accomodations={accomodations} />} />
     <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
  )
}

export default App