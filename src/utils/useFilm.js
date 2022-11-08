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
        if (data.Search != undefined) {
        setmovie (data.Search);
    } else {
        alert ("No se encuentra tu Titulo");
    }
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
        if (input == "") {
            alert ("El input esta vacio !!")
            setdisabled (true);
        } else {
            setdisabled (false);
            GetMethod ();
            console.log (movie);
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