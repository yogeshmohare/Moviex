import { useState, useEffect } from 'react'
import { fetchDataFromAPI } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getApiGenres } from './store/homeSlice'
function App() {
  const url = useSelector((state) => state.home.url)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetchApiData()
  },[])
  useEffect(()=>{
    console.log('url',url);
  },[url])
  const fetchApiData = () => {
    fetchDataFromAPI('/movie/popular')
    .then((res) =>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  return (
    <>
    <div className='App'>
      App
    </div>
    </>
  )
}

export default App
