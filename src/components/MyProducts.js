import React from "react";
import "../assets/scss/ExploreProducts.scss";
import { Card } from "antd";

const ExploreProducts = () => {
    const { Meta } = Card;

    return (
        <div className="card-list">
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/250?sig=1"
                    />
                }
            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
};

export default ExploreProducts;
