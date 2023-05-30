import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
    Authorization: "Bearer " + TMD_TOKEN,
}

export const fetchDataFromAPI = async(url,params) => {
    try{
        const {data} = await axios.get( BASE_URL + url , {
            headers,
            params
        })
        return data
    }
    catch(err){
        console.log(err);
        return err
    }
}