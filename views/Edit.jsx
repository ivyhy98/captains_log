const React = require('react');

class Edit extends React.Component{
    render(){
        const {log} = this.props
        return (
          <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${log.id}?_method=PUT`} method="POST">
              Title: <input type="text" name="title" defaultValue={log.title} />{" "}
              <br />
              Log: <input
                type="text"
                name="entry"
                defaultValue={log.entry}
              />{" "}
              <br />
              Is the ship Broken? Yes:
              {log.shipIsBroken ? (
                <input type="checkbox" name="shipIsBroken" defaultChecked />
              ) : (
                <input type="checkbox" name="shipIsBroken" />
              )}{" "}
              <br />
              <input type="submit" value="Submit Log" />
            </form>
          </div>
        );
    }
}

module.exports = Edit;