const React = require("react");
const DefaultLayout = require("../default/DefaultLayout");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    const comments = log.comments;
    return (
      <DefaultLayout title="Index">
        <a href="/logs">Back to Logs</a>
        <div className="show-div">
          <div className="show-post">
            <h1>{log.title}</h1>
            <p className="show-entry">
              Thoughts about what you ate: {log.thoughts}
            </p>
            <p className="show-entry">What you ate: {log.food}</p>
            
            <a href={`/logs/${log._id}/edit`} className="button">
              Edit this Log
            </a>
            <br />
            <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" />
            </form>
          </div>
          <div className="show-comments-div">
            <section className="show-comment">
              {comments.length ? (
                comments.map((comment) => {
                  return (
                    <p key={comment.comment}>
                      {comment.user.toUpperCase()} | {comment.comment}
                    </p>
                  );
                })
              ) : (
                <p>No comments yet</p>
              )}
            </section>
            <h2>Leave A Comment</h2>
            <form action={`/foodlogs/${log.id}`} method="POST">
              <label htmlFor="user">User: </label>
              <input type="text" name="user" className="show-input" />

              <label htmlFor="entry">Comment: </label>
              <input type="text" name="comment" className="show-input" />
              <input type="submit" value="Submit Comment" />
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
