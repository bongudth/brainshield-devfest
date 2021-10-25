import React from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import metamask from "../assets/images/metamask.png"
import { Button, Badge, Card } from 'antd'
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"

const Header = () => {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

  function handleConnectWallet() {
    activateBrowserWallet();
  }

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
          <Badge.Ribbon text={etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3) + "ETH"} color="#395266">
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
          <Button className="button metamask" onClick={handleConnectWallet}>
            <img src={metamask} alt="metamask" />
          </Button>
        )
        }
      </div>
    </div>
  )
}

export default Header
