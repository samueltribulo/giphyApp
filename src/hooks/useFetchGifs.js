import { getGifs } from "../actions";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {

    const [currentGifs, setCurrentGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then( response => {
                 setCurrentGifs(response);
                 setLoading(false)
            });
    }, [])

    return {
        currentGifs,
        loading,
    }

}
