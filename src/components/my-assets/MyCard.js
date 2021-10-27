import React from "react";
import { useEthers } from "@usedapp/core";

import { useAssetsCall } from "../../hooks/index";
import "../../assets/scss/ExploreProducts.scss";
import { Card } from "antd";

const MyCard = (props) => {
    const { Meta } = Card;
    const { account } = useEthers();

    const [id, accountAddress, ipfsHash, name, description, vote] =
        useAssetsCall(props.id);

    if (accountAddress !== account) {
        return null;
    }

    return (
            <Card
                key={props.id}
                className="card-item"
                cover={
                    <img
                        alt="sample asset"
                        src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
                    />
                }
            >
                <Meta title={name} description={description} />
            </Card>
    );
};

export default MyCard;
