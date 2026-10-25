export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const course = {
    number: "CS4550",
    title: "Web Development",
    instructor: { name: "Zhuoxuan Li", role: "STUDENT" },
    topics: ["JavaScript", "React", "Next.js"],
  };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <pre>{JSON.stringify(course, null, 2)}</pre>
      <hr />
    </div>
  );
}
