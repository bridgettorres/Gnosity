import "./style/card.css";
import "./style/dashboard.css";
import QuestCard from "./QuestCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card" id="profile">
        <div className="title">PROFILE</div>
      </div>
      <div className="card" id="stats">
        <div className="title">STATS</div>
      </div>
      <QuestCard />
      <div className="card" id="progress">
        <div className="title">PROGRESS</div>
      </div>
      <div className="card" id="ranking">
        <div className="title">RANKING</div>
      </div>
    </div>
  );
};

export default Dashboard;
