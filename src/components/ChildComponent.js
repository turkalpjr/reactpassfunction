import React from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react';


export const ChildComponent = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        childFunction1() {
            alert('child function 1 called');
        }
        // childFunction2() {
        //     alert('child function 2 called');
        // },
    }));

    return (
        <div>
            <h2>child content</h2>

            <button onClick={props.SayHello1}> SAY HELLO!</button>
            <button onClick={props.SayHello2}> SAY HELLO2!</button>
        </div>
    );
});