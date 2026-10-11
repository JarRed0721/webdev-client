export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      {/* With AI (2.1.7) */}
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This sample paragraph is blue but{" "}
        <span className="wd-fg-color-black">this text is black</span>
      </p>
      {/* On your own (2.1.7) */}
      <p className="wd-fg-color-green">
        this part is green and{" "}
        <span className="wd-fg-color-red">this part is red</span>
      </p>
    </div>
  );
}
