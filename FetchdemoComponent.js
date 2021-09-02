import {useState,useEffect} from 'react';

export default function FetchdemoComponent(){
    const [categories,setcategories]=useState([]);
    const[products,setproducts]=useState([]);
    useEffect(()=>{
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            let allcategories=data;
            allcategories.unshift('all');
            setcategories(data);
        });
        fetch('http://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>
        setproducts(data));
    })

function handlecategorychange(e){
    if(e.target.value=='all'){
        fetch(`http://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>{
            setproducts(data);
        })
    }else{
        fetch(`http://fakestoreapi.com/products/category/${e.target.value}`)
        .then(response=>response.json())
        .then(data=>{
            setproducts(data);
        })
    }
}
return(
    <div className="container-fluid">
        <header className="bg-danger text-white text-center p-2">
            <h2><span className="bi bi-cart-2"></span>shopping online</h2>
        </header>
        <div className="row">
            <div className="col-3">
                <h3>select category</h3>
                <select className="form-select" onChange={handlecategorychange}>
                    {
                        categories.map(category=>
                        <option value={category} key={category}>{category.toUpperCase()}</option>)
                    }
                </select> 
            </div>
            <div className="col-9">
                <h2>product list</h2>
                <div className="d-flex flex-wrap flex-row" style={{height:'500px',overflow:'auto'}}>
                   {
                       products.map(product=>
                        <div className="card mt-2" style={{width:'200px'}} key={product.id}>
                            <img className="card-img-top" src={product.image} alt={product.title} height="200px"/>
                            <div className="card-header" style={{height:'200px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-footer">
                                <p>${product.price}</p>
                                <button className="btn btn-danger w-100">
                                    <span className="bi bi-cart-2">add to cart</span>
                                </button>
                            </div>
                        </div>
                        )
                   }
                </div>
            </div>
        </div>
    </div>
)}