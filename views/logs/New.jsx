const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class New extends React.Component{
    render(){

        return (
          <DefaultLayout title="Create A New Log">
            <form action="/logs" method="post" className="new-form">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" className="new-text" />

              <label htmlFor="entry">Log Entry:</label>
              <textarea type="text" name="entry" className="new-text entry" />

              <label htmlFor="shipIsBroken">Is the ship broken?</label>
              <input type="checkbox" name="shipIsBroken" className="new-text" />

              <input type="submit" value="Submit Log" className="new-submit" />
            </form>
          </DefaultLayout>
        );
    }
}
module.exports = New;