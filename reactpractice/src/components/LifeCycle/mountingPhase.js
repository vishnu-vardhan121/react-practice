import axios from "axios";
import React, { Component } from "react";


import { ProductCard } from 'react-ui-cards';



class MountingPhase extends Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then(response=>{
            console.log(response)
            this.setState({products : response.data})
        })
        
    }
    render(){
        return(
            <React.Fragment>
                {this.state.products.map(eachObject=>{
                    return(<>
                    <h1>{eachObject.title}</h1>
                   </>)
                })}
            </React.Fragment>
        )
    }

}

export default MountingPhase 