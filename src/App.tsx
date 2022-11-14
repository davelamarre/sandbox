import React from 'react';
import './App.css';
import {Counter} from "./features/counter/Counter";
import {Table} from "./features/table/Table";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <Table/>
            </header>
        </div>
    );
}

export default App;
