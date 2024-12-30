import React from 'react';
import '../styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>欢迎来到我的 React 应用!</h1>
            <div className="card-container">
                <div className="card">
                    <div className="card-background"></div>
                    <div className="card-title">卡片标题</div>
                </div>
            </div>
        </div>
    );
}

export default App;