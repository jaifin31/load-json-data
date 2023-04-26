import React from "react";

import { stockData } from "./csvjson";

export const Stocks = () => {
  return (
    <>
      <div className="stock-container row">
        {stockData.map((data, key) => {
          return (
            <div key={key} className='col-md-3'>
              <Stock
                key={key}
                playername={data.Name}
                GP={data["Games Played"]}
                age={data.Age}
                BD={data.Birthdate}
                BP={data.Birth_Place}
                clg={data.Collage}
                exp={data.Experience}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Stock = ({ playername, GP, age, BD, BP, clg,exp }) => {
//  if (!playername) return <div />;
  return (
    <>
    
    <div className="card m-5" style={{width:'18rem'}}>
    <div className="card-body">
      <h5 className="card">Name:{playername}</h5>
      <h6 className="card-text">Game Played: {GP}</h6>
      <h6 className="card-text">Age: {age}</h6>
      <h6 className="card-text">Date of Birth: {BD}</h6>      
      <h6 className="card-text">Birth Place: {BP}</h6>
      <h6 className="card-text">Collage: {clg}</h6>
      <h6 className="card-text">Experience: {exp}</h6>
    </div>
  </div>
  </>
  );
};