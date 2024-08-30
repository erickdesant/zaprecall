import React from 'react';
import styled from 'styled-components';

function List({cards}){
    const [text,setText] = React.useState('Pergunta');
    const [icon,setIcon] = React.useState("play-outline");


    function showAnswer(key){
        setText(cards[key].answer)
        setIcon("return-down-back-outline")
    }
    return(
        <>
            {cards.map((card,index) =>
                <ListItem key={index}><ListQuestion text={card.question} icon={icon} index={index} showAnswer={showAnswer}/>
                </ListItem>)}
        </>
    )
}

export default List


function ListQuestion ({text,icon,showAnswer,index}){
    return (
        <div className="front">
            <div>
                <p>{text}</p>
            </div>
            <div>
                <ion-icon name={icon} onClick={() => showAnswer(index)} size="large"></ion-icon>
            </div>
        </div>
    )
}


const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px 0px #00000026;
    border-radius: 5px;
    width:80%;
    padding:20px;
    margin:10px;
    .front{
        display:flex;
        justify-content: space-between;
        width: 100%;
    }
    .back{
        display:none;
        justify-content: space-between;
        width: 100%;
    }
`

