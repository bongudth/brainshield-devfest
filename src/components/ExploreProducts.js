import React from "react";
import "../assets/scss/ExploreProducts.scss";
import { Card, Avatar, Tag } from "antd";
import { LikeOutlined, CoffeeOutlined, DotChartOutlined, CrownOutlined, WalletOutlined } from "@ant-design/icons";

const ExploreProducts = () => {
    const { Meta } = Card;

    return (
        <div className="card-list">
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=1"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<DotChartOutlined />} color="orange">Art</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=2"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<CrownOutlined />} color="green">Music</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=3"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<DotChartOutlined />} color="orange">Art</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=4"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<WalletOutlined />} color="blue">Blog</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=5"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<DotChartOutlined />} color="orange">Art</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=6"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<WalletOutlined />} color="blue">Blog</Tag>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://picsum.photos/300/200?sig=7"
                    />
                }
                actions={[
                    <LikeOutlined key="like" />,
                    <CoffeeOutlined key="coffee" />,
                    <Tag icon={<WalletOutlined />} color="blue">Blog</Tag>
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
