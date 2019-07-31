import React from 'react'

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

export default Course
