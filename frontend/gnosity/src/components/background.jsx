import './style/square.css';

function Square({ children }) { //function component is how we make custome pieces of UI, when they use <square /> in the app, this will show whatever this function returns
    return (
        <div className="square"> {children} </div> //div is a squared shaped area, the class name will be used to link the html to the css
    );
}

export default Square; //the line lets other files import and use the components