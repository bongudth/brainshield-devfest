import React from "react";
import { useAssetsCall } from "../hooks/index";
import "../assets/scss/ExploreProducts.scss";
import { Card, Avatar } from "antd";
import { LikeOutlined, CoffeeOutlined, CrownOutlined } from "@ant-design/icons";

const CartProduct = props => {
	const { Meta } = Card;

	const [id, ipfsHash, name, description, vote] = useAssetsCall(props.id);
	console.log(id, ipfsHash, name, description, vote);

	return (
		<Card
			key={id}
			style={{ width: 300, margin: "10px" }}
			cover={
				<img
					alt="example"
					src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
					style={{ width: "100%" }}
				/>
			}
			actions={[
				<LikeOutlined key="like" />,
				<CoffeeOutlined key="coffee" />,
				<CrownOutlined key="crown" />,
			]}
		>
			<Meta
				avatar={
					<Avatar
						src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
					/>
				}
				title={name}
				description={description}
			/>
		</Card>
	);
}

export default CartProduct;