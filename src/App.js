import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Button, Grid } from '@material-ui/core';
import Navbar from "./components/Navbar";
import { getMatches } from "./api/Api";
import { useEffect, useState } from "react";
import MyCard from "./card/Mycard"
function App() {

  const [matches, setMatches] = useState([]);


  useEffect(() => {
    {
      getMatches()
        .then((data) => {setMatches(data.matches);
        console.log(data.matches);
        })
        .catch((error) => console.log("errccor"));
    }
  }, [])
  return (

    <div className="App">

      <Navbar />
      <h1>Welcome to live cricket score</h1>
      <Grid container justify="center">
        
        <Grid >
          {matches.map((match) => (
           <Fragment key={match.unique_id}>
            {
              match.type=="Twenty20" ? (
              <MyCard key={match.unique_id} match={match}/>) : (" ")
            }
            
           </Fragment>

          ))}

        </Grid>
      </Grid>



    </div>

  );
}

export default App;