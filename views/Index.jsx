const React = require('react');
const { listIndexes } = require('../models/logs');

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        return (
          <div>
            <h1>Captains Logs</h1>
            <a href="/logs/new">Create a new log</a>
            <ul>
              {logs.map((log)=>{
                return(
                  <li key={log.id}><a href={`logs/${log._id}`}>{log.title}</a></li>
                )
              })}
            </ul>
          </div>
        );
    }
}

module.exports = Index;