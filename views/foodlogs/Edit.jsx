const React = require("react");
const DefaultLayout = require("../default/DefaultLayout");

class Edit extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout title="Index">
        <form
          action={`/foodlogs/${log.id}?_method=PUT`}
          method="POST"
          className="new-form"
        >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            className="new-text"
            defaultValue={log.title}
          />
          <label htmlFor="entry">Thoughts on the food you ate</label>
          <textarea
            type="text"
            name="thoughts"
            defaultValue={log.thoughts}
            className="new-text entry"
          />
          <label htmlFor="food">What Did You Eat</label>
          <textarea
            type="text"
            name="food"
            defaultValue={log.food}
            className="new-text entry"
          />
          <br />
          <input type="submit" value="Save Changes" className="new-submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

