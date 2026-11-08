"use client";

const hello = () => {
  alert("Hello World!");
};

const greet = () => {
  alert("Hello, I am Zhuoxuan Li!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={greet}
        id="wd-onclick-greet"
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Greet Zhuoxuan
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
