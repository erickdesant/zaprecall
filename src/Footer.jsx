import React from 'react';
import styled from 'styled-components';

function Footer({cards,counter}){
    return(
        <>
            <FooterComp><h1>{counter}/{cards.length} concluídos</h1></FooterComp>
        </>
    )
}
export default Footer;

const FooterComp = styled.div`
    background-color:#FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    height:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: "Recursive", sans-serif;
    text-transform: uppercase;
`