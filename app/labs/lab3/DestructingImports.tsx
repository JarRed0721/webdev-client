import Math, { add, subtract, multiply, divide } from "./Math";
import * as Matematica from "./Math";

const cell = { border: "1px solid black", padding: "4px 8px" };

export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      <h2>Destructing Imports</h2>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={cell}>Math</th>
            <th style={cell}>Matematica</th>
            <th style={cell}>Functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cell}>{`Math.add(2, 3) = ${Math.add(2, 3)}`}</td>
            <td style={cell}>{`Matematica.add(2, 3) = ${Matematica.add(2, 3)}`}</td>
            <td style={cell}>{`add(2, 3) = ${add(2, 3)}`}</td>
          </tr>
          <tr>
            <td style={cell}>{`Math.subtract(5, 1) = ${Math.subtract(5, 1)}`}</td>
            <td style={cell}>{`Matematica.subtract(5, 1) = ${Matematica.subtract(5, 1)}`}</td>
            <td style={cell}>{`subtract(5, 1) = ${subtract(5, 1)}`}</td>
          </tr>
          <tr>
            <td style={cell}>{`Math.multiply(3, 4) = ${Math.multiply(3, 4)}`}</td>
            <td style={cell}>{`Matematica.multiply(3, 4) = ${Matematica.multiply(3, 4)}`}</td>
            <td style={cell}>{`multiply(3, 4) = ${multiply(3, 4)}`}</td>
          </tr>
          <tr>
            <td style={cell}>{`Math.divide(8, 2) = ${Math.divide(8, 2)}`}</td>
            <td style={cell}>{`Matematica.divide(8, 2) = ${Matematica.divide(8, 2)}`}</td>
            <td style={cell}>{`divide(8, 2) = ${divide(8, 2)}`}</td>
          </tr>
          <tr>
            <td style={cell}>{`Math.add(10, 20) = ${Math.add(10, 20)}`}</td>
            <td style={cell}>{`Matematica.add(10, 20) = ${Matematica.add(10, 20)}`}</td>
            <td style={cell}>{`add(10, 20) = ${add(10, 20)}`}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}
