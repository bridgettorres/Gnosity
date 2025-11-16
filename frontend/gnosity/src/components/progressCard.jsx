import SkillsRadarChart from "./skillsRadarChart";

const ProgressCard = () => {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        maxWidth: "340px",
        margin: "0 auto",
      }}
    >
      <div style={{ width: "100%", height: "300px" }}>
        <SkillsRadarChart />
      </div>
    </div>
  );
};

export default ProgressCard;
