import React from 'react'
import ReactDOM from 'react-dom'

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
            {parts.map((part, index) => (
                <Part part={part} key={index} />
            ))}
        </>
    )
};

const Total = (props) => {
    let total = 0;
    const {parts} = props;

    parts.forEach((part) => (
        total += part.exercises
    ));

    return (<p>Number of exercises {total}</p>);
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
