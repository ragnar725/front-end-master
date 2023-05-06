import React from "react";
import styled from "styled-components"

const ChalendarContainer = styled.div`
    width: 30%;
    height: 450px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Chalendar(){

    return(
        <ChalendarContainer>
            <p>Chalendar</p>
        </ChalendarContainer>
    )
}

export default Chalendar;