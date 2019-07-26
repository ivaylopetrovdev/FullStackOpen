import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => (
    <p>
        {props.part} {props.excercise}
    </p>
);

const Header = (props) => (
    <h1>{props.course}</h1>
);

const Content = (props) => {
    const {part1, part2, part3, exercises1, exercises2, exercises3} = props.content;
    return (
        <>
            <Part part={part1} excercise={exercises1} />
            <Part part={part2} excercise={exercises2} />
            <Part part={part3} excercise={exercises3} />
        </>
    )
};

const Total = (props) => (
    <p>Number of exercises {props.total}</p>
);

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content content={{part1, part2, part3, exercises1, exercises2, exercises3}} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
