import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Container, IntegrationBottom, IntegrationContent, IntegrationItem, IntegrationList, IntegrationLogo, IntegrationMenu, IntegrationTitle, IntegrationTop, IntegrationWrapper, TitleIcon } from './IntegrationElements'
import logometamask from '../../images/metamask.svg';
import logotrustwallet from '../../images/trust-wallet.svg';
import logowalletconnect from '../../images/walletconnect.svg';
import logobsc from '../../images/bsc.svg';
import { useWeb3React } from "@web3-react/core"
import { injected, injectedWalletConnect } from "../../wallet/connection"


const Integration = (closeIntegration) => {
    const { activate } = useWeb3React()
    async function connect() {
        try {
          await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
    }
    async function connectWalletConnect() {
        try {
          await activate(injectedWalletConnect)
        } catch (ex) {
          console.log(ex)
        }
    }
    return (
        <>
            <Container>
                <IntegrationMenu>
                    <IntegrationContent>
                        <IntegrationWrapper>
                            <IntegrationTop>
                                <IntegrationTitle>Connect Wallet</IntegrationTitle>
                                <TitleIcon onClick={() => closeIntegration(false)} to="/">
                                    <FaTimes />
                                </TitleIcon>
                            </IntegrationTop>
                            <IntegrationBottom>
                                <IntegrationItem>
                                    <IntegrationList>
                                        <IntegrationLogo onClick={connect}><img alt="metamask" src={logometamask} height="40px" width="40px"></img></IntegrationLogo>
                                        Metamask
                                    </IntegrationList>
                                    <IntegrationList>
                                        <IntegrationLogo><img alt="trust-wallet" src={logotrustwallet} height="40px" width="40px"></img></IntegrationLogo>
                                        Trust Wallet
                                    </IntegrationList>
                                </IntegrationItem>
                                <IntegrationItem>
                                    <IntegrationList>
                                        <IntegrationLogo><img alt="bsc" src={logobsc} height="40px" width="40px"></img></IntegrationLogo>
                                        Binance Smart Chain
                                    </IntegrationList>
                                    <IntegrationList>
                                        <IntegrationLogo onclick={connectWalletConnect}><img alt="wallet-connect" src={logowalletconnect} height="40px" width="40px"></img></IntegrationLogo>
                                        Wallet Connect
                                    </IntegrationList>
                                </IntegrationItem>
                            </IntegrationBottom>
                        </IntegrationWrapper>
                    </IntegrationContent>
                </IntegrationMenu>
            </Container>
        </>
    )
}


export default Integration
