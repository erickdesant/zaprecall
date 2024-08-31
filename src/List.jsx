import React from 'react';
import styled from 'styled-components';

function List({cards,setCounter,counter}){

    return(
        <>
            {cards.map((card,index) =>
                <ListItem key={index} question={card.question} answer={card.answer} index={index} setCounter = {setCounter} counter = {counter}/>)}
        </>
    )
}

export default List


function ListItem ({question,answer,index,setCounter,counter}){
    const [state,setState] = React.useState("hidden");
    const [text,setText] = React.useState(`Pergunta ${index + 1}`);
    const [icon,setIcon] = React.useState("play-outline");

    function setStatus(typeAnswer){
        if (state === "hidden"){
            setState("question")
            setText(question)
            setIcon("refresh")
        }else if(state === "question"){
            setState("answer")
            setText(answer)
            setIcon("arrow-back-outline")
        }else if(state === "answer"){
            setCounter()
            if(typeAnswer === 'failed'){
                setState("answeredWrong")
                setText(`Pergunta errada ${index + 1}`)
                setIcon("close-circle")
                setCounter(counter + 1);
            }else if(typeAnswer === 'neutral'){
                setState("answeredNeutral")
                setText(`Pergunta neutra ${index + 1}`)
                setIcon("help-circle")
                setCounter(counter + 1);
            }else if(typeAnswer === 'success'){
                setState("answeredRight")
                setText(`Pergunta acertada ${index + 1}`)
                setIcon("checkmark-circle")
                setCounter(counter + 1);
            }
        }
    }

   return (
       <StyledListItem state={state}>

           <div>
                <p>{state ? text : question}</p>
           </div>

            <div>
                <ion-icon name={icon} onClick={() => setStatus()} size="large"></ion-icon>
            </div>

             <Buttons state = {state}>
               <button className = "failed" type='button' onClick={() => setStatus('failed')}> Não lembrei</button>
               <button className = "neutral" type='button' onClick={() => setStatus('neutral')}> Quase não lembrei</button>
               <button className = "success" type='button' onClick={() => setStatus('success')}> Acertei</button>
            </Buttons>
        </StyledListItem>
    )
}


const StyledListItem = styled.div`
    display: ${({state}) => (state === 'answer' ? 'block' : 'flex')};
    justify-content: space-between;
    background-color: ${({state}) => {
        if( state === 'hidden' || state === 'answeredWrong' || state === 'answeredNeutral' || state === 'answeredRight') {
            return '#FFFFFF'
        } else {
            return '#FFFFD4'
        }  
    }};                    
    box-shadow: 0px 4px 5px 0px #00000026;
    border-radius: 5px;
    width: 80%;
    padding: 20px;
    margin: 10px;
    font-weight: 700;
    ion-icon{
        display: ${({state}) => (state === 'answer' ? 'none' : 'block')};
    }
    text-decoration: ${({state}) => {
        if (state === 'answeredRight' || state === 'answeredWrong' || state === 'answeredNeutral'){
            return 'line-through';
        }
    }};;
    color: ${({state}) => {
    if (state === 'answeredRight'){
        return '#2FBE34';
    }else if(state === 'answeredWrong'){
        return '#FF3030';
    }else if(state === 'answeredNeutral'){
        return '#FF922E';
    }}};
`

const Buttons = styled.div`
    display: ${({state}) => (state === 'answer' ? 'flex' : 'none')};
    align-items: flex-end;
    justify-content: center;
    button{
        color: #FFFFFF;
        border:none;
        border-radius: 5px;
        padding:10px;
        margin: 20px 4px 0px 4px;
        font-family: "Recursive", sans-serif;
    }
    .failed{
        background-color: #FF3030;
    }
    .neutral{
        background-color: #FF922E;
    }
    .success{
        background-color: #2FBE34;
    }
`