import React from 'react';
import './house.css';
import Image from "../Image";

export default function House(props) {




    return (
        <div id="house-main">
            <Image src={props.img} width={100} height={100} mode='fill' />
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            <button onClick={() => props.deleteItem(props.id)}>delete</button>
        </div>

    )
}
