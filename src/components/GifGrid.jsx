/*
//GifGrid

export const GifGrid = ({category}) => {
    console.log(category)

    return(
        <>
            <h3> { category } </h3>
            <p> Hello World </p>
        </>
    )
}
*/

/*
//Hooks

import { useEffect } from "react";

export const GifGrid = ({ category }) => {
    useEffect(() => {
        console.log( category );
    }, [])

    return (
        <>
            <h3> { category } </h3>
            <p> Hello World </p>
        </>
    )
}
*/

/*
//Fetch API

import { useEffect } from "react";

const getGifts = async ( category ) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=ItIEXXMqOhgSD3EXsJdKDrVUFTDSLOCk&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    return gifs

}

export const GifGrid = ({category}) => {

    getGifts( category )

    return (
        <>
            <h3>{ category } </h3>
            <p> Hello World </p>
        </>
    )
}
*/

//Custom Hooks

import { useState } from "../hooks/useFetchGifs";
import { GiftItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs ( category )
    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( (image, key) => {
                        return <GiftItem key={key} {...image}></GiftItem>
                    })
                }
            </div>
        </>
    )
}
