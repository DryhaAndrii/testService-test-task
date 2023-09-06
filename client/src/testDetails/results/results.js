import React from 'react';
import Result from './result';

function Results({ results }) {
    return (
        <div className="results">
            {results.length > 0 ? (results ? results.map((result, index) => (
                <Result key={index} result={result} />
            )) : <></>) : <h1>There are no results yet</h1>}


        </div>
    );
}

export default Results;