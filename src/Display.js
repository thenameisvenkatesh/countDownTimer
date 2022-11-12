import React from "react";

export default function app({ days, hours, minutes, seconds }) {
  return (
    <div>
      <center>
        <h2>SALES COUNTDOWN TIMER</h2>
        <h3>Offer ends in </h3>
        <table>
          <tr>
            <th>{days}</th>&nbsp;&nbsp;
            <th>{hours}</th>&nbsp;&nbsp;
            <th>{minutes}</th>&nbsp;&nbsp;
            <th>{seconds}</th>&nbsp;&nbsp;
          </tr>
          <tr>
            <td>DAYS</td>&nbsp;&nbsp;
            <td>HOURS</td>&nbsp;&nbsp;
            <td>MINUTES</td>&nbsp;&nbsp;
            <td>SECONDS</td>&nbsp;&nbsp;
          </tr>
        </table>
      </center>
    </div>
  );
}
