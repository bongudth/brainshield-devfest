import React from "react";
import "../assets/scss/ExploreProducts.scss";
import { Card, Avatar } from "antd";
import { LikeOutlined, CoffeeOutlined, CrownOutlined } from "@ant-design/icons";

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
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <CrownOutlined key="save" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
};

export default ExploreProducts;
