"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Zhuoxuan" />
      <br />

      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Li" />
      <br />

      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        id="wd-your-student-id"
        defaultValue="002494904"
      />
      <br />

      <label htmlFor="wd-your-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={5}
        defaultValue="I'm a CS student at Northeastern interested in web development and game design."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-junior" defaultChecked />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />

      <label>Enrollment type:</label>
      <br />
      <input type="radio" name="enrollment-type" id="wd-your-fulltime" defaultChecked />
      <label htmlFor="wd-your-fulltime">Full-time</label>
      <br />
      <input type="radio" name="enrollment-type" id="wd-your-parttime" />
      <label htmlFor="wd-your-parttime">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-interest-music" />
      <label htmlFor="wd-your-interest-music">Music</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-interest-anime" />
      <label htmlFor="wd-your-interest-anime">Anime</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-interest-games" />
      <label htmlFor="wd-your-interest-games">Video Games</label>
      <br />

      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="IS">Information Science</option>
        <option value="MATH">Mathematics</option>
      </select>
      <br />

      <label htmlFor="wd-your-topics">Topics to explore this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["WEBDEV", "AI"]}
      >
        <option value="WEBDEV">Web Development</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="SECURITY">Cybersecurity</option>
        <option value="GAMES">Game Development</option>
        <option value="DATA">Data Science</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">Email:</label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="li.zhuoxua@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2028"
        min={2024}
        max={2032}
      />
      <br />

      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2024-09-01"
      />
      <br />

      <label htmlFor="wd-your-excitement">Excitement about this course (0–10):</label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />

      <button type="submit" id="wd-your-save">Save</button>
      <button type="button" id="wd-your-cancel">Cancel</button>
    </form>
  );
}
