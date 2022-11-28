const React = require('react');
const DefaultLayout = require('../default/DefaultLayout');

class Show extends React.Component{
    render(){
        const {log} = this.props;
        return(
            <DefaultLayout title={log.title.toUpperCase()}>
                <p>{log.entry}</p>
                <p><strong>{log.shipBroken? 'The ship is broken' : 'The ship is not broken'}</strong></p>
                <a href={`/logs/${log._id}/edit`}>Edit this Log</a>
                <br />
                <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form> <br />
                <a href='/logs'>Back to Logs</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;