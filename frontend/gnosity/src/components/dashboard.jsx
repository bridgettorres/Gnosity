import './style/card.css';
import './style/dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='column'>
                <div className='card'>
                </div>
                <div className='card'>
                    <div className="title">STATS</div>
                </div>
            </div>
            <div className='column'>
                <div className='card' id='quest'>
                    <div className="title">QUEST</div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className="title">PROGRESS</div>
                </div>
                <div className='card'>
                    <div className="title">RANKING</div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;