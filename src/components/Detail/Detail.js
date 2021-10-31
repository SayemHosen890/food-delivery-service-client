import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ManageOrders from '../ManageOrders/ManageOrders';
import './Detail.css';

const Detail = () => {
    const { detailId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${detailId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="details">
            <div className="mb-3">
                <h2>Order <span className="text-color">Your Food</span></h2>
                <hr />
                <h2>{service.name}</h2>
                <img className="h-25 w-25" src={service.image} alt="" />
                <br />
                <br />
                <Link to="/manageorder"><button className="button px-2 rounded">Order Now</button></Link>
            </div>
            <div>
                <ManageOrders></ManageOrders>
            </div>
        </div>
    );
};

export default Detail;