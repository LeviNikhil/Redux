import { useEffect } from 'react';
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetproducts } from "../store/actions/ProductActions";
import { productdelete } from '../store/reducers/ProductReducer';

const Products = () => {
    
    const {products}= useSelector((state) =>state.ProductReducer);

    const dispatch = useDispatch();
    useEffect(() => {
       // dispatch(getproducts());
       dispatch(asyncgetproducts());
    }, []);

    const DeleteHandler= (index)=>{
        console.log(index);
        //direct userdelete(id) nhi kr skte kyunki yeh ek actions
        //hai isliye isko pehle dispatch krna hoga
        dispatch(productdelete(index));
    };

    return (
        <div className="m-auto container p-10 mt-5 bg-red-100">
            <h1 className="text-2xl font-bold text-red-900">Product List</h1>
            <ul>
          {products && products.map((product,index)=>{
                return (
                    <li key={product.id}>
                        <h1>
                          {product.title}{""}
                          <span onClick={()=>DeleteHandler(index)} className="text-red-500 font-black cursor-pointer">
                              X
                          </span>
                        </h1>
                    </li>
                )
            })}
        </ul>  
        </div>
      );
}

export default Products