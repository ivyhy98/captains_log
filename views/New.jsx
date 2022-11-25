const React = require('react');

class New extends React.Component{
    render(){

        return (
          <div>
            <h1>Captains log</h1>
            <form action="/logs" method="post">
                Title: <input type="text" name="title" /> <br />
                Log: <input type="text" name="entry" /> <br />
                Is the ship Broken? Yes:<input type="checkbox" name="shipIsBroken" /> No: Ignore <br />
                <input type="submit" value="Submit Log" />
            </form>
          </div>
        );
    }
}
module.exports = New;