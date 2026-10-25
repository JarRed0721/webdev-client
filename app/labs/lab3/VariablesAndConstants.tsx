export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let studentName = "Zhuoxuan Li";
  const greeting = `Hello ${studentName}`;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped} <br />
      constant1 = {constant1} <br />
      studentName = {studentName} <br />
      greeting = {greeting}
      <hr />
    </div>
  );
}
