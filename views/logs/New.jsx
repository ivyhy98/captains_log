const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class New extends React.Component{
    render(){

        return (
          <DefaultLayout title="Create A New Log">
            <form action="/logs" method="post">
                Title: <input type="text" name="title" /> <br />
                Log: <input type="text" name="entry" /> <br />
                Is the ship Broken? Yes:<input type="checkbox" name="shipIsBroken" /> No: Ignore <br />
                <input type="submit" value="Submit Log" />
            </form>
          </DefaultLayout>
        );
    }
}
module.exports = New;