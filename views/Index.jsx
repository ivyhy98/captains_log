const React = require('react');

class Index extends React.Component{
    render(){

        return (
          <div>
            <h1>Captains Logs</h1>
            <a href="/logs/new">Create a new log</a>
          </div>
        );
    }
}

module.exports = Index;