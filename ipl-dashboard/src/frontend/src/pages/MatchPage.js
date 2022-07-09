import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { BrowserRouter as Router,Route, Routes,useParams } from 'react-router-dom';

export const MatchPage=()=> {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  useEffect(
    ()=>{
        const fetchMatches= async()=>{
            const response=await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data=await response.json();
            setMatches(data);
            console.log(data);
        };
        fetchMatches();
    },[teamName,year]
    
    );
  return (
    <div className="MatchPage">
      
      <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                }
      
    </div>
  );
}


