import axios from 'axios';
import React, {useEffect, useState} from 'react';

const OneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({})

    useEffect(() =>{
    axios.get(`http://localhost:8000/api/projects/${props.productId}`)
        .then(response =>{
            console.log("response after trying to get one product", response)
            setOneProduct(response.data.results)

        })
        .catch(err => console.log(err))

}, [])

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title text-danger">{oneProduct.title}</h4>
                <p className="card-text font-weight-bolder">Price: ${oneProduct.price}</p>
                <p className="card-text text-secondary">Description: {oneProduct.description}</p>
                {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};


export default OneProduct;