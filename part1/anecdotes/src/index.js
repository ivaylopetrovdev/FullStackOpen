import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [selectedVotes, setSelectedVote] = useState(Array(anecdotes.length).fill(0));

    const voteClick = (selectedAnecdote) => {
        setSelectedVote(selectedVotes.map((value, index) => (index === selectedAnecdote ? value += 1 : value)));
    };

    const mostVotedIndex = selectedVotes.indexOf(Math.max(...selectedVotes));

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{props.anecdotes[selected]}</div>
            <div>{`has ${selectedVotes[selected]} votes`}</div>
            <button onClick={() => voteClick(selected)}>
                vote
            </button>
            <button onClick={() => setSelected(Math.floor(Math.random()*props.anecdotes.length))}>
                next anecdote
            </button>

            <h2>Anecdote with most votes</h2>
            <div>{props.anecdotes[mostVotedIndex]}</div>
            <div>{`has ${selectedVotes[mostVotedIndex]} votes`}</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
