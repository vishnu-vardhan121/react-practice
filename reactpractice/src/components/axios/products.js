import { Component } from "react";
import React from "react";
import axios from "axios" ;
import DnaSpinner from "../spinners/dna";
import { UserCard } from 'react-ui-cards';

class Products extends Component{

    constructor(){
        super()
        this.state={
            productsData:[]
        }
    }

    fetchData=()=>{
        axios.get("https://api.escuelajs.co/api/v1/products")
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
                this.state.productsData.length>0 ?
                 this.state.productsData.map(eachObject=>{
                    return(
                        
                        <React.Fragment key={eachObject.id}>
                            <UserCard 
                              header={eachObject.images[0]}
                              name={eachObject.title}
                            />
                        </React.Fragment>
                    )
                }): <DnaSpinner/>
            }

            </>
        )
    }

}

export default Products