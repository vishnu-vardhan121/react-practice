import { MyImage } from "./image"

export const Card =(prop)=>{
const {title,image,category,price,rating}=prop.data
  return(
    rating["rate"]>3?<div className="card" style={{ width:"150px" }}>
    <MyImage imageURL={image}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {category}
      </p>
      <h2>
        Price :{price}
      </h2>
      
    </div>
  </div> :<div>hiii</div>

  )
}