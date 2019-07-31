import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
    const {courses} = props;
    return (
        <>
            {courses.map(({name, parts, id}) => (
                <div key={id}>
                    <Header course={name} />
                    <Content parts={parts} />
                    <Total parts={parts} />
                </div>
            ))}
        </>
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
    <h3>{props.course}</h3>
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
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h2>Web Development curriculum</h2>
            <Course courses={courses} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
