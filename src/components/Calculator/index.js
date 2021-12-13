import React, { useEffect, useState } from 'react'
import { FaCoins } from 'react-icons/fa'
import logo from '../../images/logo.svg'
import { 
    CalculatorContainer,
    CalculatorBox, 
    CalculatorTitle,
    CalculatorList,
    CalculatorItem,
    ItemContainer,
    ItemDescription,
    ItemTitle,
    TitleIcon,
    CalculatorTop,
    CalculatorButton,
    ButtonName,
    ButtonContainer,
    ItemInput,
    InputContainer,
    ItemDescriptionBalance
} from './CalculatorElements.js'
import {useWallet} from 'react-binance-wallet'
import FadeLoader from "react-spinners/FadeLoader";
import BarLoader from "react-spinners/BarLoader";
import axios from 'axios'


const Calculator = () => {
    const { account, connect, status } = useWallet()
    const [ fmprice, setFMPrice] = useState([]);
    const [ fmsupply, setFMSupply] = useState([]);
    const [ fmCsupply, setFMCSupply] = useState([]);
    const [ isLoading, setisLoading] = useState(false)
    useEffect(() => {
        connect('injected')
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            const responseFMPrice = await axios.get("https://api.pancakeswap.info/api/v2/tokens/0x653069e0f21b73db5f4512d3a523b4f510c1911c")
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
            setFMPrice(parseFloat(responseFMPrice.data.data.price).toFixed(10))
            setFMSupply(responseFMSupply.data.result)
            setFMCSupply(responseFMCSupply.data.result)
            setisLoading(false)
        }
        fetchData()
    }, []);
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
    const [values,setValues]=useState({first:"",second:"",sum:""})
    const [first ]=useState('')
    const [second ]=useState('')
    const [sum,setSum]=useState('')
    const [sumFLM,setSumFLM]=useState('')
    const onChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        const newValues = {
        ...values,
        [name]: value
    } 
    setValues(newValues)
    calcSum(newValues)
    
    
    }
    const calcSum = (newValues) => {
    const { first,second} = newValues;
    const newSum = parseInt(first,10) * (parseInt(second,10) * 0.0000000001) * 0.05
    setSum(parseFloat(newSum).toFixed(2))
    setSumFLM(parseFloat(newSum / fmprice).toFixed(5))
    } 
    return (
        <CalculatorContainer>
            {status === 'disconnected' ? (
            <>
                <FadeLoader size={300} color={"#fff"} 
                css={`
                display: block;
                margin: 0 auto;
                `}/>
            </> ) : ( 
            <CalculatorBox>
                <CalculatorTop>
                    <CalculatorTitle>Flash Token Calculator</CalculatorTitle>
                    <ButtonContainer>
                        <CalculatorButton>
                            <ButtonName onClick={() => connect('bsc')}>Connect Binance Wallet</ButtonName>
                        </CalculatorButton>
                        <CalculatorButton>
                            <ButtonName onClick={() => connect('injected')}>Connect Metamask</ButtonName>
                        </CalculatorButton>
                    </ButtonContainer>
                </CalculatorTop>
                <CalculatorList>
                    <CalculatorItem>
                        <ItemTitle>
                            <TitleIcon>
                                <FaCoins />
                            </TitleIcon>
                            Calculator
                        </ItemTitle>
                        <ItemDescription>Account = {account}</ItemDescription>
                        <ItemContainer>
                            <ItemDescription>24H Volume in USD</ItemDescription>
                        </ItemContainer>
                        <InputContainer>
                            <ItemInput onChange={onChange} defaultValue={first} name="first" id="first" type="number"></ItemInput>
                        </InputContainer>
                        <ItemContainer>
                            <ItemDescription>Amount of tokens you own (Flash Token)</ItemDescription>
                        </ItemContainer>
                        <InputContainer>
                            <ItemInput onChange={onChange} defaultValue={second} name="second" id="second" type="number"></ItemInput>
                        </InputContainer>
                    </CalculatorItem>
                    <CalculatorItem>
                        <ItemTitle>
                            <TitleIcon>
                                <img src={logo} alt="Logo" height="30px"/>
                            </TitleIcon>
                            Flash Matic
                        </ItemTitle>
                        <ItemContainer>
                            <ItemDescription>1 FM = $</ItemDescription>
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
                    </CalculatorItem>
                </CalculatorList>
                <CalculatorList>
                    <CalculatorItem>
                        <ItemTitle>Estimated Daily Earnings</ItemTitle>
                        <ItemContainer>
                            <ItemDescriptionBalance>$ {sum}</ItemDescriptionBalance>
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescriptionBalance>{sumFLM}&nbsp;FLM</ItemDescriptionBalance>
                        </ItemContainer>
                    </CalculatorItem>
                    <CalculatorItem>
                        <ItemTitle>Estimated Monthly Earnings</ItemTitle>
                        <ItemContainer>
                            <ItemDescriptionBalance>$ {sum * 30}</ItemDescriptionBalance>
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescriptionBalance>{sumFLM * 30}&nbsp;FLM</ItemDescriptionBalance>
                        </ItemContainer>
                    </CalculatorItem>
                    <CalculatorItem>
                        <ItemTitle>Estimated Yearly Earnings</ItemTitle>
                        <ItemContainer>
                            <ItemDescriptionBalance>$ {sum * 365}</ItemDescriptionBalance>
                        </ItemContainer>
                        <ItemContainer>
                            <ItemDescriptionBalance>{sumFLM * 365}&nbsp;FLM</ItemDescriptionBalance>
                        </ItemContainer>
                    </CalculatorItem>
                </CalculatorList>
            </CalculatorBox>
            )}
        </CalculatorContainer>
    )
}

export default Calculator
