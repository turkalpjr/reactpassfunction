import React from 'react'
import { ChildComponent } from './ChildComponent'


export const SayHello = () => {
    alert("hello from function from main (1)");
}


export const SayHello2 = () => {
    alert("hello from function from main (2)");
}
export const MainComponent = (props) => {
    return (
        <div>
            <button onClick={props.SayHelloChild}>SAY HELLO CHİLD</button>
            <ChildComponent SayHello1={SayHello} SayHello2={SayHello2} />
        </div>
    )
}
