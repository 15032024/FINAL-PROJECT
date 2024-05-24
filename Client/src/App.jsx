import { useContext, useState } from 'react'

import './App.css'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import DetailsPage from './Pages/DeatilsPage'
import FavoritePage from './Pages/FavoritePage'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import { Route, Routes } from 'react-router-dom'
import FavContext from './Context/favorites.js'

function App() {
  const [favs, setFavs] = useContext(FavContext)

  return (
    <>
     
<FavContext.Provider value={{favs,setFavs}}>
<Header/>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/add-page" element={<AddPage/>}/>
<Route path="/details" element={<DetailsPage/>}/>
<Route path="/favorite-page" element={<FavoritePage/>}/>

</Routes>
<Footer/>
</FavContext.Provider>

    </>
  )
}

export default App
