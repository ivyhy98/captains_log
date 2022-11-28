const React = require('react');
const { listIndexes } = require('../../models/logs');
const DefaultLayout = require('../default/DefaultLayout');

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        return (
          <DefaultLayout title="Captains Logs">
            <a href="/logs/new">Create a new log</a>
            <ul>
              {logs.map((log)=>{
                return(
                  <li key={log.id}><a href={`/logs/${log._id}`}>{log.title}</a></li>
                )
              })}
            </ul>
          </DefaultLayout>
        );
    }
}

module.exports = Index;