import React from "react";
import CardProduct from "./CartProduct";
import { useCount } from "../hooks/index";

const ExploreProducts = () => {
    const count = useCount();

	let pictureAsset = [];
    if (count) {
        console.log(count.toNumber());
        for (let i = 1; i <= count.toNumber(); i++) {
            pictureAsset.push(<CardProduct id={i}/>)
        }
    }

    // console.log(asset);

    return <div className="card-list">{pictureAsset}</div>;

};

export default ExploreProducts;
