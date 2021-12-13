import React, { useEffect, useState } from 'react'
import { FaCoins, FaRegAddressCard, FaCheckCircle, FaClock } from 'react-icons/fa'
import {GiPresent} from 'react-icons/gi'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import logo from '../../images/logo.svg'
import { 
    DashboardContainer,
    DashboardBox, 
    DashboardTitle,
    DashboardList,
    DashboardItem,
    ItemContainer,
    ItemDescription,
    ItemTitle,
    TitleIcon,
    DashboardTop,
    DashboardButton,
    ButtonName,
    ButtonContainer,
    ItemPadding,
    ItemInput
} from './DashboardElements.js'
import {useWallet} from 'react-binance-wallet'
import FadeLoader from "react-spinners/FadeLoader";
import BarLoader from "react-spinners/BarLoader";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import axios from 'axios'



const Dashboard = () => {
    const { account, connect, status, balance} = useWallet()
    const [ fmprice, setFMPrice] = useState([]);
    const [ maticbalance, setMaticBalance] = useState([]);
    const [ fmbalance, setFMBalance] = useState([]);
    const [ fmholder, setFMHolder] = useState([]);
    const [ fmblock, setFMBlock] = useState([]);
    const [ fmreward, setFMReward] = useState([]);
    const [ fmlasttransfer, setFMLastTransfer] = useState([]);
    const [ fmbalancemanual, setFMBalanceManual] = useState([]);
    const [ accountcheck, setaccountcheck ] = useState('')
    const [ fmsupply, setFMSupply] = useState([]);
    const [ fmCsupply, setFMCSupply] = useState([]);
    const [ isLoading, setisLoading] = useState(false)
    useEffect(() => {
        connect('injected')
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            const responseFMPrice = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "token",
                    action: "tokeninfo",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMBalance = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "account",
                    action: "tokenbalance",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    address: account,
                    tag: "latest",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMTransfer = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "account",
                    action: "tokentx",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    address: account,
                    page: 1,
                    offsett: 999999,
                    startblock: 0,
                    endblock: 999999999,
                    sort: "asc",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMHolder = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "token",
                    action: "tokenholderlist",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    page: 1,
                    offset: 9999999,
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseMaticBalance = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "account",
                    action: "tokenbalance",
                    contractaddress: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
                    address: account,
                    tag: "latest",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMSupply= await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "stats",
                    action: "tokensupply",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMCSupply= await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "stats",
                    action: "tokenCsupply",
                    contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            const responseFMCBlock = await axios.get("https://api.bscscan.com/api?",{
                params: {
                    module: "block",
                    action: "getblockreward",
                    blockno: fmblock,
                    apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
                }
            })
            console.log(responseFMCBlock)
            if(responseFMTransfer.data.status === "0")
            {
                setFMReward(responseFMCBlock.data.result)
                setFMLastTransfer(responseFMTransfer.data.result)
                setFMBlock(responseFMTransfer.data.result)
            } else if(responseFMTransfer.data.status === "1")
            {
                setFMReward(responseFMCBlock.data.result.blockReward)
                setFMLastTransfer(responseFMTransfer.data.result[0].timeStamp)
                setFMBlock(parseInt(responseFMTransfer.data.result[0].blockNumber,10))
            }
            setFMHolder(responseFMHolder.data.result.length)
            setMaticBalance(responseMaticBalance.data.result)
            setFMPrice(responseFMPrice.data.result[0].tokenPriceUSD)
            setFMSupply(responseFMSupply.data.result)
            setFMCSupply(responseFMCSupply.data.result)
            setFMBalance(responseFMBalance.data.result)
            setisLoading(false)
        }
        fetchData()
    }, []);
    const checkBalanceManual = () => {
        setisLoading(true)
        axios.get("https://api.bscscan.com/api?",{
            params: {
                module: "account",
                action: "tokenbalance",
                contractaddress: "0x653069e0f21b73db5f4512d3a523b4f510c1911c",
                address: accountcheck,
                tag: "latest",
                apikey: "ZC8PW4J34AB48KVGD533UTXJZ2K1UC4IX8"
            }
        }).then(response => {
            setisLoading(false)
            setFMBalanceManual(response.data.result)
        })
    }
    const renderFMBalanceManual = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmbalancemanual * 0.000000001}
            </ItemDescription>
        )
    }
    const renderMaticBalance = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {maticbalance * 0.000000000000000001}
            </ItemDescription>
        )
    }
    const renderFMBalance = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmbalance * 0.000000001}
            </ItemDescription>
        )
    }
    const renderFMReward= () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmreward * 0.000000001}
            </ItemDescription>
        )
    }
    const renderFMLastTransfer = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                <SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{fmlasttransfer}</SimpleDateTime>
            </ItemDescription>
        )
    }
    const renderCoins = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmprice}
            </ItemDescription>
        )
    }
    const renderFMHolder = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmholder}
            </ItemDescription>
        )
    }
    const renderSupply = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmsupply * 0.000000001}
            </ItemDescription>
        )
    }
    const renderCirculatingSupply = () => {
        if(isLoading){
            return <>                
                <BarLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin-top: 25px;
                margin-left: 5px;
                `}/>
            </>
        }
        return(
            <ItemDescription>
                {fmCsupply * 0.000000001}
            </ItemDescription>
        )
    }
    return (
        <DashboardContainer>
            {status === 'disconnected' ? (
            <>
                <FadeLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin: 0 auto;
                `}/>
            </> ) : ( 
            <DashboardBox>
                <DashboardTop>
                    <DashboardTitle>Flash Token Dashboard</DashboardTitle>
                    <ButtonContainer>
                        <DashboardButton>
                            <ButtonName onClick={() => connect('bsc')}>Connect Binance Wallet</ButtonName>
                        </DashboardButton>
                        <DashboardButton>
                            <ButtonName onClick={() => connect('injected')}>Connect Metamask</ButtonName>
                        </DashboardButton>
                    </ButtonContainer>
                </DashboardTop>
                <DashboardList>
                    <DashboardItem>
                        <ItemTitle>
                            <TitleIcon>
                                <FaCheckCircle />
                            </TitleIcon>
                            Check Manual FLM
                        </ItemTitle>
                        <ItemContainer>
                            <ItemDescription>Input Address</ItemDescription>
                        </ItemContainer>
                        <ItemPadding>
                            <ItemInput onChange={event => setaccountcheck(event.target.value)}></ItemInput>
                        </ItemPadding>
                        <ItemContainer>
                            <ItemDescription>Flash Matic = </ItemDescription>
                            &nbsp;{renderFMBalanceManual()}&nbsp;
                            <ItemDescription>FLM</ItemDescription>
                        </ItemContainer>
                        <DashboardButton>
                            <ButtonName onClick={checkBalanceManual}>CHECK FLM</ButtonName>
                        </DashboardButton>
                    </DashboardItem>
                    <DashboardItem>
                        <ItemTitle>
                            <TitleIcon>
                                <FaRegAddressCard />
                            </TitleIcon>
                            Address
                        </ItemTitle>
                        <ItemContainer>
                            <ItemDescription>{account}</ItemDescription>
                        </ItemContainer>
                        <ItemPadding>
                        <ItemTitle>
                            <TitleIcon>
                                <FaClock />
                            </TitleIcon>
                            Last FLM Transaction
                        </ItemTitle>
                        <ItemDescription>{renderFMLastTransfer()}</ItemDescription>
                        </ItemPadding>
                        <ItemPadding>
                            <ItemTitle>
                                <TitleIcon>
                                    <FaCoins />
                                </TitleIcon>
                                Holding
                            </ItemTitle>
                            <ItemContainer>
                                <ItemDescription>BNB = {balance * 0.000000000000000001}</ItemDescription>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemDescription>Flash Matic = </ItemDescription>
                                &nbsp;{renderFMBalance()}&nbsp;
                                <ItemDescription>FLM</ItemDescription>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemDescription>Matic = </ItemDescription>
                                &nbsp;{renderMaticBalance()}&nbsp;
                                <ItemDescription>MATIC</ItemDescription>
                            </ItemContainer>
                        </ItemPadding>
                        <ItemPadding>
                            <ItemTitle>
                                <TitleIcon>
                                    <GiPresent />
                                </TitleIcon>
                                Total FLM Reward
                            </ItemTitle>
                            <ItemContainer>
                                {renderFMReward()}&nbsp;
                                <ItemDescription>FLM</ItemDescription>
                            </ItemContainer>
                        </ItemPadding>
                    </DashboardItem>
                    <DashboardItem>
                        <ItemTitle>
                            <TitleIcon>
                                <img src={logo} alt="Logo" height="30px"/>
                            </TitleIcon>
                            Flash Matic
                        </ItemTitle>
                        <ItemContainer>
                            <ItemDescription>1 FLM = $</ItemDescription>
                            {renderCoins()}
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescription>Total Supply = &nbsp;</ItemDescription>
                            {renderSupply()}
                            <ItemDescription>&nbsp;FLM</ItemDescription>
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescription>Circulating Supply = &nbsp;</ItemDescription>
                            {renderCirculatingSupply()}
                            <ItemDescription>&nbsp;FLM</ItemDescription>
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescription>Holders = &nbsp;</ItemDescription>
                            {renderFMHolder()}
                        </ItemContainer>
                        <DashboardButton>
                            <ButtonName onClick={() => window.open("https://www.bscscan.com/token/0x653069e0f21b73db5f4512d3a523b4f510c1911c#writeContract", "_blank")}>CLAIM MANUALLY <BsArrowUpRightSquareFill/></ButtonName>
                        </DashboardButton>
                    </DashboardItem>
                </DashboardList>
                <DashboardList>
                </DashboardList>
            </DashboardBox>
            )}
        </DashboardContainer>
    )
}

export default Dashboard
