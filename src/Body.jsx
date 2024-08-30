import React from 'react';
import List from "./List.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

function Body(){
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    return(
        <>
            <BodyWrapper>
                <Logo>
                    <img src="../public/assets/logo.png" alt="logo"></img>
                    <h1>Zap Recall</h1>
                </Logo>
                <List cards = {cards}/>
                <Footer/>
            </BodyWrapper>
        </>
    )
}

export default Body

const BodyWrapper = styled.div`
    background-color: #FB6B6B;
    display: flex;
    height:100%;
    font-family: "Recursive", sans-serif;
    flex-direction:column;
    align-items: center;
    margin-bottom: 10vh;
`
const Logo = styled.div`
    display:flex;
    align-items: center;
    margin: 10px;
    font-family: "Righteous", sans-serif;
    h1{
        color:white;
        display:flex;
        vertical-align:center;
        font-size:36px;
        margin:20px;
    }
    img{
        width:52px;
        height:60px;
    }
`