import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import products from "../../data/products";

function ItemListContainer (){
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

useEffect(() => {
    const getProducts = new Promise((resolve) => {
        setTimeout (() => resolve(products),1000);
    })

    getProducts.then(data => {
        if (categoryId){
            const filtered = data.filter(p => p.category === categoryId)
            setItems(filtered)
        }else{
            setItems(data)
        }
        
});
 }, [categoryId])

return (
   <div>
      <h2>Catálogo {categoryId ? `de ${categoryId}` : "completo"}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              width: "200px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p><strong>${item.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
)}


export default ItemListContainer