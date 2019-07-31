import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
    const {name, parts} = props.course;
    return (
        <div>
            <Header course={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
};

const Part = (props) => {
    const {name, exercises} = props.part;
    return (
        <p>
            {name} {exercises}
        </p>
    )
};

const Header = (props) => (
    <h1>{props.course}</h1>
);

const Content = (props) => {
    const {parts} = props;
    return (
        <>
            {parts.map(part => (
                <Part part={part} key={part.id} />
            ))}
        </>
    )
};

const Total = (props) => {
    const {parts} = props;
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (<strong>total of {total} exercises</strong>);
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
