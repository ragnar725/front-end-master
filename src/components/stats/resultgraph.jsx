import React from "react";
import styled from 'styled-components';

const ResultGraphContainer = styled.div`
    width: 30%;
    height: 450px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function ResultGraph(){

    return(
        <ResultGraphContainer>
            <p>ResultGraph</p>
        </ResultGraphContainer>
    )
}

export default ResultGraph;