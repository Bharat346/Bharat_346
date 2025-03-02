import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./Leetcode.css";
import { PiRanking } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { SiDocsdotrs } from "react-icons/si";

Chart.register(ArcElement, Tooltip, Legend);

const Leetcode = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/Bharat346`)
      .then((res) => res.json())
      .then((data) => setLeetcodeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!leetcodeData) return <div className="loading">Loading...</div>;

  const {
    easySolved,
    mediumSolved,
    hardSolved,
    totalSolved,
    acceptanceRate,
    ranking,
    contributionPoints,
  } = leetcodeData;

  // Data for Circular Chart
  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ["#00cc66", "#ffcc00", "#ff3300"], // Custom Colors
        borderColor: ["#00994d", "#cc9900", "#cc2900"],
        borderWidth: 1, // Border Thickness
        hoverOffset: 5,
      },
    ],
  };

  return (
    <>
    <br />
    <br />
      <h1
        style={{
          color: "var(--main-color)",
          marginLeft: "30px",
        }}
      >
        LeetCode Progress
      </h1>
      <div className="leetcode-container">
        {/* Circular Bar Chart */}
        <div className="chart-container">
          <div className="doughnut-wrapper">
            <Doughnut
              data={chartData}
              width={360}
              height={370}
              options={{ maintainAspectRatio: true }}
            />
            <br />
            <p>
              Total Solved: <strong>{totalSolved}</strong>
            </p>
            <br />
          </div>
          <div className="ques">
            <p>
              <span className="easy">Easy</span>
              <span>{easySolved}</span>
            </p>
            <p>
              <span className="medium">Medium</span>
              <span>{mediumSolved}</span>
            </p>
            <p>
              <span className="hard">Hard</span>
              <span>{hardSolved}</span>
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <p>
            <div style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "start"
            }}><h3>Rank</h3> <span>{ranking}</span></div>
            <div><PiRanking style={{
                fontSize : "40px",
                color : "var(--main-color)"
            }}/></div>
          </p>
          <p>
            <div style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "start"
            }}><h3>Acceptance Rate</h3><span>{acceptanceRate}%</span></div>
            <div><SiDocsdotrs style={{
                fontSize : "40px",
                color : "var(--main-color)"
            }}/></div>
          </p>
          <p>
            <div style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "start"
            }}><h3>Max Streak</h3> <span>50</span></div>
            <div><LuCalendarDays style={{
                fontSize : "40px",
                color : "var(--main-color)"
            }}/></div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Leetcode;
