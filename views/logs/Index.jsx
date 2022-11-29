const React = require('react');
const { listIndexes } = require('../../models/logs');
const DefaultLayout = require('../default/DefaultLayout');

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        return (
          <DefaultLayout title="Captains Logs">
            <div className="index-new">
              <h3>Create New Log</h3> {' '}
              <a href="/logs/new"> + </a>
            </div>
            <section className="index-ul">
              {logs.map((log) => {
                return (
                    <div className="index-li" key={log._id}>
                      <h2 className="index-a">
                          {log.title}
                      </h2>
                      <p>{log.entry}</p>
                      <a href={`/logs/${log._id}`}> Read more </a>
                    </div>
                );
              })}
            </section>
          </DefaultLayout>
        );
    }
}

module.exports = Index;