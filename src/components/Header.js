<<<<<<< HEAD
import React from "react";
import "../assets/scss/Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import metamask from "../assets/images/metamask.png";
import { Button, Badge, Card } from "antd";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const Header = () => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    function handleConnectWallet() {
        activateBrowserWallet();
    }
=======
/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import metamask from "../assets/images/metamask.png"
import Identicon from "./Identicon"
import { Button, Badge, Card, Modal } from 'antd'
import { CopyOutlined, FolderViewOutlined } from '@ant-design/icons'
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"

const Header = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  function handleConnectWallet() {
    activateBrowserWallet()
  }

  function handleDeactivateAccount() {
    deactivate()
    setIsModalVisible(false)
  }
>>>>>>> 4a482243afc6313366604e1e8b2f504a5db874db

    return (
        <div className="header-container">
            <Link to="/">
                <div className="header-left">
                    <img src={logo} className="logo" alt="logo"></img>
                    <div className="brainshield">Brainshield</div>
                </div>
            </Link>
            <div className="header-right">
                <Link to="/explore">
                    <Button className="button">Explore products</Button>
                </Link>
                <Link to="/new">
                    <Button className="button">New product</Button>
                </Link>
                {account ? (
                    <Badge.Ribbon
                        text={
                            etherBalance &&
                            parseFloat(formatEther(etherBalance)).toFixed(3) +
                                "ETH"
                        }
                        color="#395266"
                    >
                        <Card size="small" className="account-container">
                            <div className="account">
                                {account &&
                                    `${account.slice(0, 6)}...${account.slice(
                                        account.length - 4,
                                        account.length
                                    )}`}
                            </div>
                        </Card>
                    </Badge.Ribbon>
                ) : (
                    <Button
                        className="button metamask"
                        onClick={handleConnectWallet}
                    >
                        <img src={metamask} alt="metamask" />
                    </Button>
                )}
            </div>
        </div>
<<<<<<< HEAD
    );
};
=======
      </Link>
      <div className="header-right">
        <Modal
          title="Account"
          width={300}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          className="modal-container"
        >
          <div className="modal-top">
            <div>Connected with MetaMask</div>
            <Button
              className="button"
              onClick={handleDeactivateAccount}
            >
              Change
            </Button>
          </div>
          <div className="modal-content">
            <Identicon />
            <div className="account">
              {account &&
                `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`}
            </div>
          </div>
          <div className="modal-button">
            <Button icon={<CopyOutlined />} className="button">Copy address</Button>
            <a href='https://ropsten.etherscan.io/address/${account}'>
              <Button icon={<FolderViewOutlined />} className="button">View on Explorer</Button>
            </a>
          </div>
          <div className="modal-bottom">
            <div>Your transactions willl appear here...</div>
          </div>
        </Modal>
        <Link to="/explore">
          <Button className="button">Explore products</Button>
        </Link>
        <Link to="/new">
          <Button className="button">New product</Button>
        </Link>
        {account ? (
          <div onClick={showModal} className="account-button">
            <Badge.Ribbon
              text={etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3) + "ETH"}
              color="#395266"
            >
              <Card size="small" className="account-container">
                <Identicon />
                <div className="account">
                  {account &&
                    `${account.slice(0, 6)}...${account.slice(
                      account.length - 4,
                      account.length
                    )}`}
                </div>
              </Card>
            </Badge.Ribbon>
          </div>
        ) : (
          <Button className="button metamask" onClick={handleConnectWallet}>
            <img src={metamask} alt="metamask" />
          </Button>
        )
        }
      </div>
    </div>
  )
}
>>>>>>> 4a482243afc6313366604e1e8b2f504a5db874db

export default Header;
