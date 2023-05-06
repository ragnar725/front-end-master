import React from "react";
import styled from 'styled-components';

const TimerGraphContainer = styled.div`
    width: 30%;
    height: 200px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function TimerCheckGraph(){

    return(
        <TimerGraphContainer>
            <p>TimerGraph</p>
        </TimerGraphContainer>
    )
}

export default TimerCheckGraph;