import React, { useState } from "react";

const DetailProduct = (props) => {
    return (
        <img
            alt="sample figure"
            src={`https://ipfs.infura.io/ipfs/${props.ipfsHash}`}
            style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
            }}
        />
		
    );
};

export default DetailProduct;
