/*
Print Variables into HTML

const title = 'First App';

const FirstApp = () => {
    return (
        <>
            <h1> { title } </h1>
            <span> 10 </span>
        </>
    )
}

export default FirstApp;
*/

/*
Props

const FirstApp = ({ title }) => {
    return (
        <>
            <h1> { title } </h1>
            <span> 10 </span>
        </>  
    )
}

export default FirstApp;

const FirstApp = ({ props}) => {
    return (
        <>
            <h1> { props.title } </h1>
            <span> 10 </span>
        </>  
    )
}

export default FirstApp;
*/

/*
Props Validations

import PropTypes from 'prop-types';

const FirstApp = ({ title, sum }) => {
    return (
        <>
            <h1> { title } </h1>
            <span> { sum } </span>
        </>  
    )
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.default = {
    title: 'No hay titulo',
    sum: 300
}

export default FirstApp;
*/

/*
Functions

const FirstApp = ({ value }) => {

    const handleAdd = () => {
        console.log( 'calling handleAdd' )
    }

    return (
        <>
            <h1> Counter </h1>
            <span> { value } </span>
            <button onClick={ () => handleAdd() }> +1 </button>
        </>  
    )
}

export default FirstApp;
*/

import { useState } from "react";

const FirstApp = ( { value } ) => {
    const [counter, setCounter] = useState ( value )
    
    const handleAdd = () => {
        setCounter( counter + 1)
    }

    return (
       <>
            <h1> Counter </h1>
            <span> { counter } </span>
            <button onClick={ () => handleAdd() }> +1 </button>
       </>
    )
}

export default FirstApp;