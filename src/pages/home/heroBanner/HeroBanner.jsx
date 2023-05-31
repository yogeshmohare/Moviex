import React, {useState,useEffect} from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import Img from '../../../components/lazzyLoadingImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground ] = useState("");
  const [query, setQuery] = useState("");
  const {data, loading, error} = useFetch('/movie/upcoming')
  const { url} = useSelector((state)=>state.home)
  useEffect(() =>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*data.results.length)].backdrop_path;
    setBackground(bg)
  },[data])
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }
  return (
    <div className="heroBanner">
      {
        !loading &&
          <div className="backdrop-img">
          <Img src = {background}/>
          </div>
      }
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">
            Welcome.
          </span>
          <span className="title">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input 
              type="text"
              placeholder='Search for movie or tv show...'
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              onKeyUp = {searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner