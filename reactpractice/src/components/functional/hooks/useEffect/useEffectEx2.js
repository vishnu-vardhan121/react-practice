
import axios  from "axios"
import React, { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"




const UseEffectEx2 =()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((Response)=>{setData(Response.data)})

    },[])
    return(
        <>
        {
            data.length>0 ? data.map((eachObject)=>{
               return(
                < React.Fragment key={eachObject.id}>
                <h1>{eachObject.title}</h1>
                <img src={eachObject.url} alt="" width={600} height={600}/>
                </React.Fragment>
               )
            }):<DNA/>
        }
        
        </>
    )
}

export default UseEffectEx2