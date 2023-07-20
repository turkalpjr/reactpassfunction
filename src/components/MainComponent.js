import React from 'react'
import { useRef } from 'react';
import { ChildComponent } from './ChildComponent'


export const SayHello = () => {
    alert("hello from function from main (1)");
}
export const SayHello2 = () => {
    alert("hello from function from main (2)");
}
export const MainComponent = (props) => {
    const childRef = useRef(null);
    const handleClick = () => {
        childRef.current.childFunction1();
        // childRef.current.childFunction2();
    };
    return (
        <div>
            <button onClick={handleClick}>SAY HELLO CHİLD</button>
            <ChildComponent ref={childRef} SayHello1={SayHello} SayHello2={SayHello2} />
        </div>
    )
}
