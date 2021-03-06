import React from 'react';
// import LoginForm from './LoginForm';
import Lanes from './Lanes';
import Layout from './Layout';
import uuid from 'uuid';

import './App.css';

const lanes = [
    {
        id: uuid.v4(),
        name: 'Todo',
        editing: false,
        notes: [],
    },
    {
        id: uuid.v4(),
        name: 'In Progress',
        editing: false,
        notes: [],
    },
    {
        id: uuid.v4(),
        name: 'Review',
        editing: false,
        notes: [],
    },
];

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Lanes lanes={lanes} />;
            </Layout>
        );
    }
}
export default App;
