import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewproduct = () => {
    const [productData, changeProductData] = useState(
        { "products": []}
    )
const fetchData=()=>{
    axios.get("https://dummyjson.com/products").then(
        (response)=>{
            changeProductData(response.data)
        }
    ).catch()
}
useEffect(
    ()=>{fetchData()},[]
)
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {productData.products.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.thumbnail} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.description}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.price}</li>
                                                <li class="list-group-item"></li>
                                                <li class="list-group-item"></li>
                                            </ul>

                                        </div>

                                    </div>
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewproduct
