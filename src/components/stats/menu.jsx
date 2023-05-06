import React from "react";
import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 30%;
    height: 450px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function MenuBox(){

    return(
        <MenuContainer/>
    )
}

export default MenuBox;