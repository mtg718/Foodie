import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer.jsx";
import { useNavigate } from "react-router-dom";


import Card from "react-bootstrap/Card";
const Cards = (props) => {
  let navigate = useNavigate();
  let options= props.options;
  const priceRef= useRef();
  let priceOptions= Object.keys(options);
  let dispatch= useDispatchCart();
  let data= useCart();
  const [quantity, setQuantity]= useState(1);
  const [size, setSize]= useState("");


let foodItems = props.item;


   const handleAddToCart=async()=>{
     let food = [];
     for (const item of data) {
       if (item.id === props.foodItems._id) {
         food = item;

         break;
       }
     }

     if (food !== []) {
       if (food.size === size) {
         await dispatch({
           type: "UPDATE",
           id: props.foodItems._id,
           price: finalPrice,
           quantity: quantity,
         });
         return;
       } else if (food.size !== size) {
         await dispatch({
           type: "ADD",
           id: props.foodItems._id,
           name: props.foodItems.name,
           price: finalPrice,
           quantity: quantity,
           size: size,
           img: props.ImgSrc,
         });
       
         return;
       }
       return;
     }
    await dispatch({type:"ADD",
    id:props.foodItems._id,
    name:props.foodItems.name,
    price:finalPrice,
    quantity:quantity,
    size:size})
    console.log(data);

  }

  let finalPrice= quantity*parseInt(options[size]);
  useEffect(()=>{
setSize(priceRef.current.value)
  },[])
  

  return (
    <div>
      <div>
        <Card
          className="mt-4"
          style={{
            width: "18rem",
            maxHeight: "30rem",
            backgroundColor: "#ffebee",
          }}
        >
          <Card.Img
            variant="top"
            src={props.foodItems.img}
            style={{ height: "150px", objectFit: "fill" }}
          />
          <Card.Body>
            <Card.Title>{props.foodItems.name}</Card.Title>
            {/* <Card.Text>{props.desc}</Card.Text> */}
            <div className="container  w-100 ">
              <select
                className=" m-1 h-100 bg-whiteSmoke"
                onChange={(e) => setQuantity(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
            </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
