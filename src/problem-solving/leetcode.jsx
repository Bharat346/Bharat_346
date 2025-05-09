import React, { useEffect, useState, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./leetcode.css";
import { PiRanking } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { SiDocsdotrs } from "react-icons/si";

Chart.register(ArcElement, Tooltip, Legend);

// Constants
const API_URL = "https://leetcode-stats-api.herokuapp.com/Bharat346";
const TIMEOUT_DURATION = 5000;
const MAX_RETRIES = 3;

const FALLBACK_DATA = {
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  totalSolved: 0,
  acceptanceRate: 0,
  ranking: 0,
  contributionPoints: 0,
};

const LeetCodeTitle = () => (
  <h1 className="leetcode-title">
    LeetCode Progress
    <div className="title-underline"></div>
  </h1>
);

const SkeletonLoader = () => (
  <div className="leetcode-container skeleton-container">
    <div className="chart-container skeleton">
      <div className="doughnut-wrapper skeleton-chart"></div>
      <div className="question-stats skeleton-stats">
        {["Easy", "Medium", "Hard"].map((label) => (
          <div key={label} className="stat-item skeleton-stat">
            <span className={`skeleton-dot ${label.toLowerCase()}-dot`}></span>
            <span className="skeleton-label">{label}</span>
            <span className="skeleton-value"></span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="stats-container skeleton-stats-container">
      {["Rank", "Acceptance Rate", "Max Streak"].map((title) => (
        <div key={title} className="stat-card skeleton-stat-card">
          <div className="stat-content">
            <h3 className="skeleton-stat-title">{title}</h3>
            <span className="skeleton-stat-value"></span>
          </div>
          <div className="skeleton-icon"></div>
        </div>
      ))}
    </div>
  </div>
);

const ErrorBanner = ({ error, onRetry, retryCount }) => (
  <div className="error-banner">
    <span>Error: {error}. {retryCount < MAX_RETRIES ? "Retrying..." : "Using fallback data"}</span>
    {retryCount < MAX_RETRIES && (
      <button onClick={onRetry} className="retry-button" disabled={retryCount >= MAX_RETRIES}>
        Retry ({retryCount}/{MAX_RETRIES})
      </button>
    )}
  </div>
);

const LeetCodeStats = ({ data }) => {
  const chartData = useMemo(() => ({
    labels: ["Easy", "Medium", "Hard"],
    datasets: [{
      data: [data.easySolved, data.mediumSolved, data.hardSolved],
      backgroundColor: ["#00cc66", "#ffcc00", "#ff3300"],
      borderColor: ["#00994d", "#cc9900", "#cc2900"],
      borderWidth: 1,
      hoverOffset: 5,
    }],
  }), [data.easySolved, data.mediumSolved, data.hardSolved]);

  return (
    <div className="leetcode-container">
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
            Total Solved: <strong>{data.totalSolved}</strong>
          </div>
        </div>
        <div className="question-stats">
          {[
            { label: "Easy", value: data.easySolved, className: "easy-dot" },
            { label: "Medium", value: data.mediumSolved, className: "medium-dot" },
            { label: "Hard", value: data.hardSolved, className: "hard-dot" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className={stat.className}></span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
   
      <div className="stats-container">
        {[
          { title: "Rank", value: data.ranking, Icon: PiRanking },
          { title: "Acceptance Rate", value: `${data.acceptanceRate}%`, Icon: SiDocsdotrs },
          { title: "Max Streak", value: "50", Icon: LuCalendarDays },
        ].map((stat) => (
          <div key={stat.title} className="stat-card">
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <span>{stat.value}</span>
            </div>
            <stat.Icon className="stat-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Leetcode = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

      const response = await fetch(`${API_URL}?t=${Date.now()}`, {
        signal: controller.signal,
        cache: 'no-store'
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const result = await response.json();
      
      if (!result.easySolved || !result.mediumSolved || !result.hardSolved) {
        throw new Error('Invalid data structure from API');
      }
      
      setData(result);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setData(FALLBACK_DATA);
      
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => setRetryCount(prev => prev + 1), 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [retryCount]);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
    }
  };

  // Show skeleton loader only on initial load or when retrying
  const showLoader = loading && (retryCount === 0 || retryCount < MAX_RETRIES);

  return (
    <div className="leetcode-wrapper">
      <LeetCodeTitle />
      
      {error && (
        <ErrorBanner 
          error={error} 
          onRetry={handleRetry} 
          retryCount={retryCount} 
        />
      )}

      {showLoader ? (
        <SkeletonLoader />
      ) : data ? (
        <LeetCodeStats data={data} />
      ) : null}
    </div>
  );
};

export default React.memo(Leetcode);