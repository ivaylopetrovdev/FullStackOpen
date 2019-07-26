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
    const {part1, part2, part3} = props.content;
    return (
        <>
            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} />
        </>
    )
};

const Total = (props) => (
    <p>Number of exercises {props.total}</p>
);

const App = () => {
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };
    const part3 = {
        name: 'State of a component',
        exercises: 14
    };

    return (
        <div>
            <Header course={course} />
            <Content content={{part1, part2, part3}} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
