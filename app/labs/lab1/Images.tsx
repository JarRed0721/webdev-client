export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/starship-lift-off.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-your-image"
        src="/images/profile.jpg"
        alt="The profile picture that I've used for 7 years"
        width="200px"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg"
        alt="NASA sample space image"
        width="200px"
      />
    </div>
  );
}