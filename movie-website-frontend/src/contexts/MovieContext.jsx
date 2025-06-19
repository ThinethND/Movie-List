import { createContext, useState, useContext, useEffect } from "react";
import Favorites from "../pages/Favorites";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MOvieProvider = ({chlidern}) => {

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs)) 
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }  

    const removeFromFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movieId.Id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider>
        {chlidern}
    </MovieContext.Provider>
}

