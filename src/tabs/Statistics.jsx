//통계 탭
import React from "react";
import styled from 'styled-components';
import Chalendar from "../components/stats/calendar";
import TimerCheck from "../components/stats/timercheck"
import ResultGraph from "../components/stats/resultgraph";
import MenuContainer from "../components/stats/menu";

const StatsContainer = styled.div`
    width: 100%;
    height: 500px;
    border: 3px solid blue;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

function Statistics(){
  
  return(
    <StatsContainer>
        <Chalendar/>
        <TimerCheck/>
        <ResultGraph/>
    </StatsContainer>
  )
  
}

export default Statistics;
