const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class Show extends React.Component{
    render(){
        const {log} = this.props;
        return (
          <DefaultLayout title={log.title.toUpperCase()}>
            <a href="/logs">Back to Logs</a>
            <div className="show-div">
              <div className="show-post">
                <p className="show-entry">{log.entry}</p>
                <p>
                    {log.shipBroken
                      ? "The ship is broken"
                      : "The ship is not broken"}
                </p>
                <a href={`/logs/${log._id}/edit`} className="button">
                  Edit this Log
                </a>
                <br />
                <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                  <input type="submit" value="Delete" />
                </form>
              </div>
              <div className="show-comments">
                <h2>Add A Comment</h2>
                <form action="">
                    <input type="text" name="comment-entry" />
                </form>

              </div>
            </div>
          </DefaultLayout>
        );
    }
}

module.exports = Show;