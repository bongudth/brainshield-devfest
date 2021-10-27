import React, {useState} from "react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { useAssetsCall, useContractMethod } from "../../hooks/index";
import "../../assets/scss/ExploreProducts.scss";
import { Card, Avatar, Modal, Button } from "antd";
import { HeartTwoTone, CoffeeOutlined } from "@ant-design/icons";
import { utils } from "ethers";

const CartProduct = (props) => {
    const { Meta } = Card;
    const { account } = useEthers();
	const [isModalVisible, setIsModalVisible] = useState(false);

	
    const [id, accountAddress, ipfsHash, name, description, vote] =
	useAssetsCall(props.id);
	
    const { state: votePictureState, send: votePicture } =
	useContractMethod("votePicture");
	
    const clickVoteHandler = () => {
		if (accountAddress === account) {
			return;
        }
        votePicture(props.id);
    };
	
	const {sendTransaction, state} = useSendTransaction({transactionName: "Send Ethereum"});
	const clickDonateHandler = () => {
		if (accountAddress === account) {
			return;
		}
		
		sendTransaction({to: accountAddress, value: utils.parseEther("0.00015")});
	};
	
	const showModal = () => {
	  setIsModalVisible(true);
	};
  
	const handleOk = () => {
	  setIsModalVisible(false);
	};
  
	const handleCancel = () => {
	  setIsModalVisible(false);
	};
	
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
                <span onClick={clickVoteHandler}>
                    <HeartTwoTone twoToneColor="#eb2f96" key="heart" />{" "}
                    <span>{vote ? vote.toNumber() : 0}</span>
                </span>,
                <span onClick={clickDonateHandler}>
                    <CoffeeOutlined key="coffee" />
                </span>,
                // <CrownOutlined key="crown" />,
            ]}
        >
            <Meta
                avatar={
                    <Avatar src={`https://ipfs.infura.io/ipfs/${ipfsHash}`} />
                }
                title={name}
                description={description}
            />
        </Card>
    );
};

export default CartProduct;
