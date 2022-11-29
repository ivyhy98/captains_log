const React = require('react');
const { listIndexes } = require('../../models/logs');
const DefaultLayout = require('../default/DefaultLayout');

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        return (
          <DefaultLayout title="Captains Logs">
            <h2 className="index-new">
              <a href="/logs/new">Create a new log</a>
            </h2>
            <section className="index-ul">
              {logs.map((log) => {
                return (
                  <div key={log.id} className="index-li">
                    <h2>
                      <a href={`/logs/${log._id}`} className="index-a">{log.title}</a>
                    </h2>
                    <p>{log.entry}</p>
                  </div>
                );
              })}
            </section>
          </DefaultLayout>
        );
    }
}

module.exports = Index;