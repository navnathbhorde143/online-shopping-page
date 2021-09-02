import { useState,useEffect } from "react";
import axios from 'axios';

export default function axiosComponent(){
    const[categories,setcategories]=useState([])
    const[products,setproducts]=useState([])
    const[filteredproducts,setfilteredproducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(Response=>{
            setproducts(Response.data);
            setfilteredproducts(Response.data);
        });

        axios.get('http://fakestoreapi.com/products/categories')
        .then(response=>{
            let data= response.data;
            data.unshift('all');
            setcategories(data);
        });
    },[]);

    return(
        <div className="container-fluid">
            <div className="col-3">
                <h2>select categories</h2>
            </div>
        </div>
    )

}