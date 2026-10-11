export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>
      <h3>Inline</h3>
      <div>
        <span className="wd-display-inline wd-bg-color-red">Inline 1</span>
        <span className="wd-display-inline wd-bg-color-yellow">Inline 2</span>
        <span className="wd-display-inline wd-bg-color-blue wd-fg-color-white">
          Inline 3
        </span>
      </div>
      <h3>Inline-block</h3>
      <div>
        <span className="wd-display-inline-block wd-bg-color-red">
          Inline-block 1
        </span>
        <span className="wd-display-inline-block wd-bg-color-yellow">
          Inline-block 2
        </span>
        <span className="wd-display-inline-block wd-bg-color-blue wd-fg-color-white">
          Inline-block 3
        </span>
      </div>
      <h3>Block</h3>
      <div>
        <span className="wd-display-block wd-bg-color-red">Block 1</span>
        <span className="wd-display-block wd-bg-color-yellow">Block 2</span>
        <span className="wd-display-block wd-bg-color-blue wd-fg-color-white">
          Block 3
        </span>
        {/* With AI (2.1.12) */}
        <div id="wd-ai-display" className="wd-display-inline wd-bg-color-gray">
          Sample div forced to inline: its width is ignored
        </div>
      </div>
      <h3>Inline div (Zhuoxuan Li)</h3>
      {/* On your own (2.1.12) */}
      <div className="wd-display-inline wd-bg-color-green wd-fg-color-white">
        My div forced to display: inline, so width 150px stops applying
      </div>
    </div>
  );
}
