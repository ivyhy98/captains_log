const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class Index extends React.Component{
    render(){
        const logs = this.props.logs
        return (
          <DefaultLayout title="Index">
            <div className="index-new">
              <h3>Create New Food Log</h3> <a href="/foodlogs/new"> + </a>
            </div>
            <section className="index-ul">
              {logs.map((log) => {
                return (
                  <div className="index-li" key={log._id}>
                    <h2 className="index-a">{log.title}</h2>
                    <a href={`/foodlogs/${log._id}`}> Read more </a>
                  </div>
                );
              })}
            </section>
          </DefaultLayout>
        );
    }
}

module.exports = Index;
