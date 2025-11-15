import './style/card.css';

function Card({ title, children }) {
    return (
        <div className="card">
            <div className='title'>
                {title}
            </div>
            <div className="content">
                {children}
            </div>
        </div>



    )
};

export default Card; 