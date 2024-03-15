import { Component } from "react";
import React from "react";
import axios from "axios" ;

class Products extends Component{

    constructor(){
        super()
        this.state={
            productsData:[]
        }
    }

    fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            console.log(response)

            this.setState({productsData : response.data})
        })
    }

    render(){
        return(
            <>
            <h1>Products</h1>
            <button onClick={this.fetchData}>see products</button>
            {
                this.state.productsData.length>0 && this.state.productsData.map(eachObject=>{
                    return(
                        
                        <React.Fragment key={eachObject.id}>
                            
                            <h1>{eachObject.title}</h1>
                            <img src={eachObject.image} alt="" />
                        </React.Fragment>
                    )
                })
            }

            </>
        )
    }

}

export default Products