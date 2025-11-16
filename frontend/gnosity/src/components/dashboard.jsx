import "./style/card.css";
import "./style/dashboard.css";
import QuestCard from "./QuestCard";
import ProfileCard from "./profileCard";
import LogoutButton from "./logout";
import StatsCard from "./StatsCard";

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
        </div>
        <div className="card" id="ranking">
          <div className="title">RANKING</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
