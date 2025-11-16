import "./style/card.css";
import "./style/signup.css";
import "./style/questModal.css";
import { useState } from "react";

const QuestModal = () => {
  const [taskName, setTaskName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tags, setTags] = useState([]);

  const difficulties = ["Easy", "Medium", "Hard", "Insane"];
  const skillTags = ["Intelligence", "Memory", "Creativity", "Logic", "Focus"];

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleSubmit = () => {
    const newTask = {
      name: taskName,
      difficulty,
      tags,
    };

    console.log("TASK SAVED:", newTask);
    // localStorage
  };

  return (
    <div className="quest-modal card">
      <div className="title">QUEST CREATION</div>

      <div className="main-question subtext">
        What should we level up today?
      </div>

      {/* Task name */}
      <div className="field">
        <input
          className="input"
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      {/* Difficulty Tags*/}
      <div className="subtext">Quest difficulty:</div>
      <div className="tags-container">
        {difficulties.map((diff) => (
          <div
            key={diff}
            className={`tag ${difficulty === diff ? "selected" : ""}`}
            onClick={() => setDifficulty(diff)}
          >
            {diff}
          </div>
        ))}
      </div>

      {/* Stat Tags */}
      <div className="subtext">Tags</div>
      <div className="tags-container">
        {skillTags.map((tag) => (
          <div
            key={tag}
            className={`tag ${tags.includes(tag) ? "selected" : ""}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default QuestModal;
