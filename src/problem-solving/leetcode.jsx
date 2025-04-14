import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./Leetcode.css";
import { PiRanking } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { SiDocsdotrs } from "react-icons/si";

Chart.register(ArcElement, Tooltip, Legend);

// Fallback data in case API fails
const FALLBACK_DATA = {
  easySolved: null,
  mediumSolved: null,
  hardSolved: null,
  totalSolved: null,
  acceptanceRate: null,
  ranking: null,
  contributionPoints: null,
};

const Leetcode = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using Promise.race with a timeout to avoid hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 5000)
        );

        const fetchPromise = fetch(
          `https://leetcode-stats-api.herokuapp.com/Bharat346?t=${Date.now()}`, 
          { cache: 'no-store' }
        );

        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (!data.easySolved || !data.mediumSolved || !data.hardSolved) {
          throw new Error('Invalid data structure from API');
        }
        
        setLeetcodeData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        // Use fallback data if API fails
        setLeetcodeData(FALLBACK_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="leetcode-container skeleton-container">
      {/* Chart Skeleton */}
      <div className="chart-container skeleton">
        <div className="doughnut-wrapper skeleton-chart"></div>
        <div className="question-stats skeleton-stats">
          {[1, 2, 3].map((item) => (
            <div key={item} className="stat-item skeleton-stat">
              <span className="skeleton-dot"></span>
              <span className="skeleton-label"></span>
              <span className="skeleton-value"></span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Skeleton */}
      <div className="stats-container skeleton-stats-container">
        {[1, 2, 3].map((item) => (
          <div key={item} className="stat-card skeleton-stat-card">
            <div className="stat-content">
              <h3 className="skeleton-stat-title"></h3>
              <span className="skeleton-stat-value"></span>
            </div>
            <div className="skeleton-icon"></div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) return (
    <div className="leetcode-wrapper">
      <h1 className="leetcode-title" style={{
        color: "var(--main-color)",
        textAlign: "center",
        margin: "30px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px"
      }}>
        LeetCode Progress
        <div style={{
          width: "100px",
          height: "2px",
          background: "var(--main-color)",
        }}></div>
      </h1>
      <SkeletonLoader />
    </div>
  );

  // Data for Circular Chart
  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [
          leetcodeData?.easySolved || 0,
          leetcodeData?.mediumSolved || 0,
          leetcodeData?.hardSolved || 0
        ],
        backgroundColor: ["#00cc66", "#ffcc00", "#ff3300"],
        borderColor: ["#00994d", "#cc9900", "#cc2900"],
        borderWidth: 1,
        hoverOffset: 5,
      },
    ],
  };

  return (
    <div className="leetcode-wrapper">
      <h1 className="leetcode-title" style={{
        color: "var(--main-color)",
        textAlign: "center",
        margin: "30px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px"
      }}>
        LeetCode Progress
        <div style={{
          width: "100px",
          height: "2px",
          background: "var(--main-color)",
        }}></div>
      </h1>
      
      {error && (
        <div className="error-banner">
          <span>Using cached data. API error: {error}</span>
          <button onClick={handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}

      <div className="leetcode-container">
        {/* Circular Bar Chart */}
        <div className="chart-container">
          <div className="doughnut-wrapper">
            <Doughnut
              data={chartData}
              width={250}
              height={250}
              options={{ 
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      padding: 20,
                      usePointStyle: true,
                      pointStyle: 'circle'
                    }
                  }
                }
              }}
            />
            <div className="total-solved">
              Total Solved: <strong>{leetcodeData?.totalSolved || 0}</strong>
            </div>
          </div>
          <div className="question-stats">
            <div className="stat-item">
              <span className="easy-dot"></span>
              <span className="stat-label">Easy</span>
              <span className="stat-value">{leetcodeData?.easySolved || 0}</span>
            </div>
            <div className="stat-item">
              <span className="medium-dot"></span>
              <span className="stat-label">Medium</span>
              <span className="stat-value">{leetcodeData?.mediumSolved || 0}</span>
            </div>
            <div className="stat-item">
              <span className="hard-dot"></span>
              <span className="stat-label">Hard</span>
              <span className="stat-value">{leetcodeData?.hardSolved || 0}</span>
            </div>
          </div>
        </div>
   
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-content">
              <h3>Rank</h3>
              <span>{leetcodeData?.ranking || 0}</span>
            </div>
            <PiRanking className="stat-icon" />
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <h3>Acceptance Rate</h3>
              <span>{leetcodeData?.acceptanceRate || 0}%</span>
            </div>
            <SiDocsdotrs className="stat-icon" />
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <h3>Max Streak</h3>
              <span>50</span>
            </div>
            <LuCalendarDays className="stat-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;