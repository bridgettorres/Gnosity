import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { subject: "Intelligence", value: 80, fullMark: 100 },
  { subject: "Memory", value: 65, fullMark: 100 },
  { subject: "Creativity", value: 90, fullMark: 100 },
  { subject: "Logic", value: 70, fullMark: 100 },
  { subject: "Focus", value: 75, fullMark: 100 },
];

const SkillsRadarChart = () => {
  return (
    <RadarChart
      style={{ width: "100%", height: "100%", aspectRatio: 1 }}
      outerRadius="60%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="subject"
        tick={{ fontWeight: "bold", fill: "#CCCBD8" }}
      />
      <PolarRadiusAxis />
      <Radar
        name="Stats"
        dataKey="value"
        stroke="#c6b4fc"
        fill="#c6b4fc"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default SkillsRadarChart;
