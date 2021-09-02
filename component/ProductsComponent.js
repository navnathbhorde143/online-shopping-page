import {useState} from "react";

export default function ProductComponent(){
    const[data,setdata]=useState([{category:'electronics',products:['tv','mobile']},{category:'footwear',products:['nike Casuals','lee boot']}]);
    const[products,seproducts]=useState('');
    function handleproductchange(e)
    {
        seproducts(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>select a product</h2>
            <ol>
                {
                    data.map(item=>
                    <li key={item.category}>{item.category}
                    <ul>
                        {
                            item.products.map(product=>
                            <li key={product}>
                                <input type="checkbox"/>{product}
                            </li>)
                        }
                    </ul>
                    </li>)
                }
            </ol>
            <h2>select product</h2>
            <select className="form-select w-25" onChange={handleproductchange}>
                {
                    data.map(item=>
                    <optgroup key={item} label={item.category}>
                        {
                            item.products.map(product=>
                            <option key={product}>
                                {product}
                            </option>)
                        }
                    </optgroup>)
                }
            </select>
            <div className="mt-3">
                selected products:{products}
            </div>
        </div>
    )
    }
