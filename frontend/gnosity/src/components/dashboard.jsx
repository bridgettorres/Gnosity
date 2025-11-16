import "./style/card.css";
import "./style/dashboard.css";

import QuestCard from "./QuestCard";
import ProgressCard from "./progressCard";

import ProfileCard from "./profileCard";
import LogoutButton from "./logout";
import StatsCard from "./StatsCard";
import RankingCard from "./RankingCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <LogoutButton />
      <div className="dashboard">
        <div className="card" id="profile">
          <div className="title">PROFILE</div>
          <ProfileCard />
        </div>

        <StatsCard />

        <QuestCard />

        <div className="card" id="progress">
          <div className="title">PROGRESS</div>
          <div style={{ width: "100%", height: "260px", overflow: "hidden" }}>
            <ProgressCard />
          </div>
        </div>

        <RankingCard />
      </div>
    </div>
  );
};

export default Dashboard;
