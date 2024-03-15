import { Component } from "react";




class Counter extends Component{
  
     constructor(){
        super()
        //constructor is a method in class , to create and initialize the state 
        this.state={
            counter: 0,
            isSubscribe : false,
            products:[
                {
                  id: 1,
                  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                  price: 109.95,
                  description:
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                  category: "men's clothing",
                  rating: { rate: 3.9, count: 120 },
                },
                {
                  id: 2,
                  title: "Mens Casual Premium Slim Fit T-Shirts ",
                  price: 22.3,
                  description:
                    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                  category: "men's clothing",
                  rating: { rate: 4.1, count: 259 },
                },
                {
                  id: 3,
                  title: "Mens Cotton Jacket",
                  price: 55.99,
                  description:
                    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                  category: "men's clothing",
                  rating: { rate: 4.7, count: 500 },
                },
                {
                  id: 4,
                  title: "Mens Casual Slim Fit",
                  price: 15.99,
                  description:
                    "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                  category: "men's clothing",
              
                  rating: { rate: 2.1, count: 430 },
                },
                {
                  id: 5,
                  title:
                    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                  price: 695,
                  description:
                    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                  category: "jewelery",
                  rating: { rate: 4.6, count: 400 },
                },
                ]

        }
     }

     increment =(value)=>{
        console.log("increment")
        this.setState({
            counter:this.state.counter+value

        },()=>{
            console.log(this.state.counter)
        })
     }

     decrement =(value)=>{
        this.setState({
            counter:this.state.counter-value
        },()=>{})
     }
     reset=()=>{
        this.setState(
            {
                counter:0
            }
        )
     }
     handleSubscribe=()=>{
        this.setState(
            {
                isSubscribe : !this.state.isSubscribe
            }
        )
     }

     sortList=()=>{
        const result=this.state.products.sort((a,b)=> a.price-b.price )
        this.setState({
            products:result
        })
     }
     


    render(){
        console.log("component rendering",this.state.products)
        return(
            <>
            <h5>{this.props.message}</h5>
           <button  onClick={this.handleSubscribe} >
            {
                this.state.isSubscribe ? "UnSuscribe": "Subscribe"
            }
           </button>

           {
            this.state.isSubscribe 
            ?
            <>
            <h3>hello counter</h3>   
            <h4>{this.state.counter}</h4>  
            <button onClick={()=>this.increment(5)} >Increment by 5</button>    
            <button onClick={()=>this.decrement(5)} >Decrement by 5</button>   
            <button  onClick={this.reset}  >Reset</button>   
            <button onClick={this.sortList} >Sort</button>
            {
                this.state.products.map(eachObject=><div>
                    <h4>{eachObject.title}</h4>
                    <h4>{eachObject.price}</h4>
                </div>)
            }
            </>
            :
            <h4>please Subscribe to show counter</h4>

           }



           
        
            </>
        )
    }

}
export default Counter


// creation of state

// we have 2 ways to create a state 

// 1. Object way 
// 2. constructor way 


// State and prop 
// State --> private to component 
// --> this.state.counter 
// --> mutable 
// Props ---> We can use in components by passing as a extra information 
// --> props are immutable 
// ---> this.props.data



// Tasks :
// 1. Repeat the class 
// 2. list of employess --> react dev ,angular dev ,js dev ,all --> tables 




