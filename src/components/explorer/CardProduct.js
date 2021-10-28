import React, { useState } from "react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { useAssetsCall, useContractMethod } from "../../hooks/index";
import "../../assets/scss/ExploreProducts.scss";
import { Card, Avatar, Modal, Form, Input } from "antd";
import { HeartTwoTone, CoffeeOutlined } from "@ant-design/icons";
import { utils } from "ethers";

const CartProduct = (props) => {
    const { Meta } = Card;
    const { account } = useEthers();
    const [isModalVisible, setIsModalVisible] = useState(false);
	const [donateAmountState, setdonateAmountState] = useState("");

    const [id, accountAddress, ipfsHash, name, description, vote] =
        useAssetsCall(props.id);

    const { state: votePictureState, send: votePicture } =
        useContractMethod("votePicture");

    const clickVoteHandler = () => {
        if (accountAddress.toLowerCase() === account.toLowerCase()) {
            return;
        }
        votePicture(props.id);
    };

    const { sendTransaction, state } = useSendTransaction({
        transactionName: "Send Ethereum",
    });
    const clickDonateHandler = () => {
        if (accountAddress.toLowerCase() === account.toLowerCase()) {
            return;
        }
        setIsModalVisible(true);
        
    };

    const handleOk = () => {
		try {
			setIsModalVisible(false);
			if (typeof +donateAmountState === "number") {
				sendTransaction({
					to: accountAddress,
					value: utils.parseEther(donateAmountState),
				});
			}
		} catch (error) {
			alert("Cần nhập đúng giá trị số giao dịch!");
		}
		
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

	const donateAmountChangedHandler = (event) => {
		setdonateAmountState(event.target.value);
	}

    return (
        <React.Fragment>
            <Modal
                title="Cảm ơn tấm lòng của bạn nha 💝"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form.Item
                    label="Nhập số ETH bạn muốn donate(ETH)"
                    required
                    tooltip="Ô này không được bỏ trống"
                >
                    <Input onChange={donateAmountChangedHandler} placeholder="0.000" />
                </Form.Item>
            </Modal>
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
        </React.Fragment>
    );
};

export default CartProduct;
