const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class Edit extends React.Component{
    render(){
        const {log} = this.props
        return (
          <DefaultLayout title="Edit Log">
            <form
              action={`/logs/${log.id}?_method=PUT`}
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
              <label htmlFor="entry">Log Entry:</label>
              <textarea
                type="text"
                name="entry"
                defaultValue={log.entry}
                className="new-text entry"
              />
              <label htmlFor="shipIsBroken">Is The Ship Broken?</label>
              {log.shipIsBroken ? (
                <input
                  type="checkbox"
                  name="shipIsBroken"
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  name="shipIsBroken"
                />
              )}
              <br />
              <input type="submit" value="Save Changes" className="new-submit" />
            </form>
          </DefaultLayout>
        );
    }
}

module.exports = Edit;