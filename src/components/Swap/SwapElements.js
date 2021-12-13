import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgimage from '../../images/bgimage.jpg'
import { FaArrowDown } from "react-icons/fa";



export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-image: url(${bgimage});
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`
export const ArrowDown = styled(FaArrowDown)`
    color: #6d3bc1;
    height: 20px;
    width: 100%;
    font-size: 15px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width:480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #27262c;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1= styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: left;
    
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    position:relative;
    border-right:none;
`

export const FormButton = styled.button`
    background: #6d3bc1;
    padding: 16px 0;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: left;
    margin-bottom: 30px;
    color: #fff;
    font-size: 14px;
    font-weight: 300px;
    color: #6d3bc1;
`

export const Balance = styled.span`
    font-size: 12px;
    color: #fff;
    margin-top: 5px;
`

export const FormConnect = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FormToken = styled.form`
`

export const TokenSelect = styled.select`
    border-left: none;
    border: none;
    padding-top: 15.5px;
    padding-bottom: 15.5px;
    padding-left: 15px;
`

export const TokenSelectFlash = styled.select`
    border-left: none;
    border: none;
    padding-top: 15.4px;
    padding-bottom: 16px;
    padding-left: 30px;
`