import {useState, useEffect} from "react";
import axios from "axios";


function useFilm () {
    const [page, setpage] = useState (1)
    const [movie, setmovie] = useState ([]);
    const [input, setinput] = useState ("games");
    const [disabled, setdisabled]= useState (true);


    useEffect (() => {
        GetMethod ();
    }, [page]);


    async function GetMethod () {
        let {data} = await axios.get (`http://www.omdbapi.com/?s=${input}&page=${page}&apikey=d8dce04f`)
        setmovie (data.Search);
    }


    function OnChangeInput (e) {
        let result = e.target.value;
        setinput (result);
        console.log(result);
        if (input != "") {
            setdisabled (false)
        } else {
            setdisabled (true)
        }
    }


    function SearchMovie () {
        GetMethod ();
        console.log (movie);
        //setinput ("");
        if (input == "") {
            setdisabled (true)
        } else {
            setdisabled (false)
        }
    }


    function PaginationMethod (bool) {
        if (bool==true) {
            setpage (page + 1)
        } else {
            setpage (page - 1)
        }
    }


    return {
        page,
        movie,
        disabled,
        SearchMovie,
        OnChangeInput,
        PaginationMethod,
        setpage
    }
}
export default useFilm;