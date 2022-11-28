const React = require('react');

class Show extends React.Component{
    render(){
        const {log} = this.props;
        return(
            <div>
                <h1>{log.title}</h1>
                <p>{log.entry}</p>
                <p><strong>{log.shipBroken? 'The ship is broken' : 'The ship is not broken'}</strong></p>
                <a href={`/logs/${log._id}/edit`}>Edit this Log</a>
                <br />
                <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form> <br />
                <a href='/logs'>Back to Logs</a>
            </div>
        )
    }
}

module.exports = Show;