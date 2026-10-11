import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {/* On your own (2.4.2): personalized card */}
        <CourseCard
          id="1234"
          title="CS1234 React JS - Zhuoxuan Li"
          subtitle="Zhuoxuan Li's Full Stack software developer course"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />
        {/* With AI (2.4.2) */}
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample -- not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
