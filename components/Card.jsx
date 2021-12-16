import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import Image from "next/image";


const Card = ({ title, desc, url, image }) => {
  return (
    <div className="card mb-4">
    <Image src={image} width={400} height={250} />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={url} className="btn btn-primary">Comprar</a>
    </div>
</div>
  );
};

export default Card;