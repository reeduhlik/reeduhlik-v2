import React from "react";

const Academics = () => {
  const stats = [
    {
      top: "1550",
      bottom: "/1600 SAT",
    },
    {
      top: "1480",
      bottom: "/1520 PSAT",
    },
    {
      top: "34",
      bottom: "/36 ACT",
    },
    {
      top: "#1",
      bottom: "Class Rank",
    },
    {
      top: "4.8",
      bottom: "HSGPA",
    },
    {
      top: "12",
      bottom: "AP Courses",
    },
  ];
  const courses = [
    "Multivariable Calculus",
    "AP Calculus BC - 5",
    "AP Computer Science A - 5",
    "AP Computer Science P - 5",
    "AP Macroecononmics - 5",
    "AP Physics 1 - 5",
    "AP Chemistry - 5",
    "AP US History - 5",
    "AP Government - 5",
    "AP Human Geography - 5",
    "AP Seminar - 5",
    "AP Language & Composition - 4",
    "AP Literature",
  ];
  return (
    <div className="altview-section">
      <div className="container-featured">
        <div className="academics-left">
          <h2 className="academics-title">MY STATS</h2>
          <div className="academics-tiles">
            {stats.map((item) => (
              <div className="academics-tile">
                <h2 className="academics-tile-top">{item.top}</h2>
                <h4 className="academics-tile-bottom">{item.bottom}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="academics-right">
          <h2 className="academics-title">NOTABLE COURSES</h2>
          {courses.map((course) => (
            <p className="academics-course">{course}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
