import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemList from './ItemList';
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
      <h2>Catálogo {categoryId ? `${categoryId}` : ""}</h2>
    <ItemList items={items}/>
    </div>
)}


export default ItemListContainer