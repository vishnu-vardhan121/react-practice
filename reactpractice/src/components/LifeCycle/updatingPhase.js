import { Component } from "react";




class UpdatePhase extends Component{
    constructor(){
        console.log("constructorr");
        super()
        this.state={
            count : 0
        }
    }

    componentDidMount(){
        console.log("did mount")
        document.title=`Current count ${this.state.count}`
    }


    componentDidMount(){
        console.log("did mount")
        document.title=`Current count ${this.state.count}`
    }
    
    
    
    shouldComponentUpdate(){
        console.log("should component update")
        //we use in optimization purpose , in pure components
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState,"previous state")
        return null
    
    }
    increase=()=>{
        console.log("increament function");
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h1>count :{this.state.count} </h1>
            <button onClick={this.increase}> increaseee</button>
            </>
        )
    }
}

export default UpdatePhase