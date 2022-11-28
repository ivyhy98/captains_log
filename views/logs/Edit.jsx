const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class Edit extends React.Component{
    render(){
        const {log} = this.props
        return (
          <DefaultLayout title="Edit Log">
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
          </DefaultLayout>
        );
    }
}

module.exports = Edit;