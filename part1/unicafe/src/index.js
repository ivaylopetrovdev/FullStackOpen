import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => (
    <button onClick={() => onClick()}>
        {text}
    </button>
);

const Statistic = ({text, value}) => (
    <>
        <td>{text}:</td>
        <td>{value}</td>
    </>
);

const Statistics = ({good, neutral, bad}) => {
    if (good || neutral || bad) {
        return (
            <>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <tr>
                            <Statistic text="good" value ={good} />
                        </tr>
                        <tr>
                            <Statistic text="neutral" value ={neutral} />
                        </tr>
                        <tr>
                            <Statistic text="bad" value ={bad} />
                        </tr>
                        <tr>
                            <td>all:</td>
                            <td>{good + neutral + bad}</td>
                        </tr>
                        <tr>
                            <td>average:</td>
                            <td>{((good*1) + (neutral*0) + (bad*-1)) / (good + neutral + bad) }</td>
                        </tr>
                        <tr>
                            <td>positive:</td>
                            <td>{(good / (good + neutral + bad)) * 100 } %</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return (<p>No feedback given</p>);
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h2>give feedback</h2>
            <Button text="good" onClick={() => setGood(good + 1)} />
            <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" onClick={() => setBad(bad + 1)} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);
