import { Component } from "react";
import axios from "axios" ;
import React from 'react';


class EmployesData extends Component{
    constructor(){
        super()
        this.state={
            employeCollection:[]
        }
    }

fetchData =()=>{
    // fetch("https://dummyjson.com/users")
    // .then(res => res.json())
    // .then(response =>{
    //     this.setState({
    //         employeCollection:response.users
    //     })
    // })
    
        axios.get("https://dummyjson.com/users")
        .then(response=>{
            console.log(response)
            this.setState({
                employeCollection :response.data.users
            })
        });
    }   

    render(){
        return(
            <>
            <h1>User collection</h1>
            <button onClick={this.fetchData}>get user info</button>
            {
                this.state.employeCollection.length>0 && this.state.employeCollection.map(eachObject=>{
                    return(
                        <React.Fragment key={eachObject.id}>
                            <h1>{`${eachObject.firstName}`+' ' + `${eachObject.lastName}`}</h1>
                            <h2>age : {eachObject.gender+eachObject.age}</h2>
                            <h2>---------------------------------------------------------</h2>
                        </React.Fragment>
                    )
                })
            }
            </>
        )
    }
}

export default EmployesData