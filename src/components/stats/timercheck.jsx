import React from "react";
import styled from 'styled-components';
import TimerCheckGraph from './timercheckgraph'

const TimerCheckContainer = styled.div`
    width: 30%;
    height: 450px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function TimerCheck(){

    return(
        <TimerCheckContainer>
            <p>TimerCheck</p>
            {/* <TimerCheckGraph/> */}
        </TimerCheckContainer>
    )
}

export default TimerCheck;