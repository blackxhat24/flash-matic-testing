import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #6d3bc1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
`

export const IntegrationWrapper = styled.div`
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

export const IntegrationContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const IntegrationMenu = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const IntegrationTitle = styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: left;
`

export const TitleIcon = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 20px;

    @media screen and (max-width:480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
` 


export const IntegrationTop = styled.div`
    display: flex;
    justify-content: space-between;
`

export const IntegrationBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const IntegrationLogo = styled.div`
    margin-top: 10px;
`

export const IntegrationItem = styled.div`
    width: 100%;
    height: 100%;
`

export const IntegrationList = styled.button`
    margin-top: 20px;
    height: 100px;
    width: 100%;
    display: grid;
    text-align: center;
    cursor: pointer;
    background-color: #27262c;
    border: none;
    color: #fff;
`