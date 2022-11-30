const React = require("react");
const DefaultLayout = require("../default/DefaultLayout");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Create A New Food Log">
        <form action="/foodlogs" method="POST" className="new-form">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" className="new-text" />

          <label htmlFor="food">What Did You Eat?: </label>
          <textarea type="text" name="food" className="new-text entry" />

          <label htmlFor="thoughts">Thoughts About What You Ate?</label>
          <input type="text" name="thoughts" className="new-text" />

          <input type="submit" value="Submit Log" className="new-submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
