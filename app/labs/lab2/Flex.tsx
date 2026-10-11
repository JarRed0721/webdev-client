export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* With AI (2.1.19) */}
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-width-75px">
          Pinned
        </div>
        <div className="wd-bg-color-gray">Natural</div>
        <div className="wd-bg-color-yellow wd-flex-grow-1">Stretches</div>
      </div>
      {/* On your own (2.1.19): fourth row, middle column grows, first is pinned */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-blue wd-fg-color-white wd-width-75px">
          Zhuoxuan
        </div>
        <div className="wd-bg-color-yellow wd-flex-grow-1">Grows</div>
        <div className="wd-bg-color-red wd-fg-color-white">Natural</div>
      </div>
    </div>
  );
}
