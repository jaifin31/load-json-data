import React from "react";
import "./App.css";
import { stockData } from "./csvjson";

export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.Name}
                ticker={data["Games Played"]}
                stockPrice={data.MIN}
                timeElapsed={data.PTS}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
          <td>
            <h4>{stockPrice}</h4>
          </td>
          <td>
            <h4>{timeElapsed}</h4>
          </td>
          <td>
            <h4>{timeElapsed}</h4>
          </td>
          <td>
            <h4>{timeElapsed}</h4>
          </td>
          <td>
            <h4>{timeElapsed}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};