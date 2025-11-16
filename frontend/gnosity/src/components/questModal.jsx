import "./style/card.css";
import "./style/signup.css";
import "./style/questModal.css";
import { useState } from "react";

const QuestModal = ({ onClose, onAddTask }) => {
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

    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quest-modal card" onClick={(e) => e.stopPropagation()}>
        <div className="title">QUEST CREATION</div>

        <div className="main-question subtext">
          What Should We Level Up Today?
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
        <div className="subtext">Quest Difficulty:</div>
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
        <div className="subtext">Abilities to Enhance:</div>
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
        <div className="btn-container">
          <button className="btn submit" onClick={handleSubmit}>
            ADD TASK
          </button>
          <button className="btn cancel" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestModal;
