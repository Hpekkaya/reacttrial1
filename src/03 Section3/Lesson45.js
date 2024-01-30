import React from "react";
import styles from "./Lesson45.module.scss";

export function CourseGoal({ title, descrption }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{descrption}</p>
    </li>
  );
}

const Lesson45 = () => {
  return (
    <div>
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal title="Learn React" description="In-depth" />
        <CourseGoal title="with me" description="In-depth" />
      </ul>
    </div>
  );
};

export default Lesson45;
