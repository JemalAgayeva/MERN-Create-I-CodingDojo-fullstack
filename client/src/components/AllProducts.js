import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/all")
            .then(response => {
                console.log("****** axios.get prints all students")
                console.log(response)
                setAllProducts(response.data.results)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <h3 className="text-info">All Products</h3>
            <h1 className="text-secondary">***</h1>
                {allProducts.map((product, i) => {
                    return <div className="card col-7 mx-auto border border-light">
                        <div className="card-body">
                            <h4 className="card-title text-danger">{product.title}</h4>
                            <p className="font-weight-bolder">Price: ${product.price}</p>
                            <p className="text-secondary"> Description: {product.description}</p>
                            <hr className="col-2"/>
                        </div>
                    </div>
                })}
        </div>
    );
};

export default AllProducts;