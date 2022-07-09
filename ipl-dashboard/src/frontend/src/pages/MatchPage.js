import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { BrowserRouter as Router,Route, Routes,useParams } from 'react-router-dom';

export const TeamPage=()=> {


  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} key={match.id}  match={match} />)}
      
      
    </div>
  );
}


