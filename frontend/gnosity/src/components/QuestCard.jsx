import { useState } from "react";
import QuestModal from "./questModal";
import "./style/card.css";
import "./style/questCard.css";
import "./style/signup.css";

const QuestCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to open/close the modal
  const [tasks, setTasks] = useState([]); // State to store tasks

  // Function to add a new task at the top
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="card" id="quest">
      <div className="title">QUEST</div>

      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <strong>{task.name}</strong> - {task.difficulty}
            <div className="tags">
              {task.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <QuestModal
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      )}

      {/* Add quest btn */}
      <div className="btn-quest-card-container">
        <button
          className="quest-btn submit"
          onClick={() => setIsModalOpen(true)}
        >
          ADD QUEST
        </button>
      </div>
    </div>
  );
};

export default QuestCard;
