export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/JarRed0721" id="wd-github">
        GitHub
      </a>
      <br />
      <a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=3650845436"
        id="wd-your-link"
      >
        My DD1 Skin Fixer Workshop Page
      </a>
      <br />
      <a
        href="https://github.com/JarRed0721"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
      >
        My GitHub (new tab)
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}