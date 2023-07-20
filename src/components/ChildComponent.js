import React from 'react'



const SayHelloChild = () => {
    debugger;
    alert("say hello child!");
}

export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={props.SayHello1}> SAY HELLO!</button>
            <button onClick={props.SayHello2}> SAY HELLO2!</button>
        </div>
    )
}
