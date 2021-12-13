import styled from 'styled-components'
import bgimage from '../../images/bgimage.jpg'

export const CalculatorContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgimage});

    @media screen and (max-width: 768px){
        height: 100%;
    }

`
export const CalculatorBox = styled.div`
    display: grid;

`
export const CalculatorTitle = styled.span`
    font-size: 20px;
    color: #fff;
    font-weight: bolder;
    height: 30px;
    padding: 40px
    
`
export const CalculatorList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const CalculatorItem = styled.li
`
    list-style: none;
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    background-color: #27262c;
    -webkit-box-shadow: 0px 0px 11px -1px #0000007c;
    box-shadow: 0px 0px 20px -1px #6d3bc1;
    @media screen and (max-width: 768px){
        display: grid;
        margin-top: 30px;
    }
`
export const ItemTitle = styled.span`
    font-size: 20px;
    color: #fff;
    display: flex;

`
export const ItemContainer = styled.div`
    display: flex;
`
export const ItemDescription = styled.div`
    margin-top: 20px;
    font-size: 17px;
    font-weight: bold;
    color: #FFF;
`

export const TitleIcon = styled.div`
    color: #fff;
    margin-right: 10px;
    height: 30px;
`

export const CalculatorTop = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        display: grid;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        display: grid;
        margin-left: 70px
    }
`

export const CalculatorButton = styled.button`
    margin-top: 30px;
    background: #6d3bc1;
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    margin-right: 20px;

    &:active {
        transform: translateY(-2px);
    }
`

export const ButtonName = styled.span`
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 15px;
    background: #855fc7;
    color: white;
    transform: translateY(-6px);
    &:active {
        transform: translateY(-2px);
    }
`

export const ItemInput = styled.input`
    height: 30px;
    color: #fff;
    border: none;
    background-color: #885cc4;
    width: 200px;
    margin-right: 20px;
    border-radius: 10px;
    padding-left: 10px;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const InputContainer = styled.div`
    padding-top: 12px;
`

export const ItemDescriptionBalance = styled.div`
    margin-top: 20px;
    font-size: 20px;
    color: #FFFFCC;
    font-weight: bolder;
`