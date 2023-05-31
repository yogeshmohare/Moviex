import { useState, useEffect } from 'react'
import { fetchDataFromAPI } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getApiGenres } from './store/homeSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//page import
import Home from './pages/home/Home'
import PageNotFound from './pages/404/PageNotFound'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const {   } = useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromAPI('/configuration')
      .then((res) => {
        console.log(res);
        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
