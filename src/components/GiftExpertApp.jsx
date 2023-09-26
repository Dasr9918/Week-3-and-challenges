/*
Communication Child - Parent

import { useSate } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['First category'])
    const [category, setCategory] = useState([''])

    const onAddCategory = () => {
        setCategories ( list => [...list, category])
        setCategory('')
    }

    const onSetCategory = ( evt ) => {
        setCategory( evt.target.value )
    }

    return (
        <>
            <h1>GifExpert</h1>
            <input type="text" value={category}
                onChange={(event) => onSetCategory(event) } />   
            <button onClick={() => onAddCategory()}> AddCategory </button>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                        {
                            return <li key={ key }> { category }</li>
                        }
                    )
                }
            </ol>
        </>
    )
}

//Segunda forma

import { useSate } from "react";
import { onAddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = ( category ) => {
        setCategories ( list => [...list, category])
        setCategory('')
    }

    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            {
                categories.map(
                    (category, key) =>
                    {
                        return <GifGrid category={ category } key={key}/>
                    }
                )
            }
        </>
    )
}
*/

//Barrel Files

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac'])
    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category, key) =>
                    {
                        return <Gifgrid category={ category } key={key} />
                    }
                )
            }
        </>
    )
}