import React, { useEffect, useState } from 'react';
import Artisan from './Artisan';
import Food from './Food';

const LocalProducts = () => {
    const [response,setResponse] = useState("")
    useEffect(()=>{
        fetch("http://localhost:8080/api")
        .then(
            (r)=>{
               r.json().then(
                   data=>console.log(data)
               )
            }
        )

    },[])
    
    return (
        
        <div>
            
            <p>{response}</p>
            <Artisan/>
            <Food/>
        </div>
    )
}

export default LocalProducts;
