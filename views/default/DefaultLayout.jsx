const React = require('react');

class DefaultLayout extends React.Component{
    render(){
        return (
          <html lang="en">
            <head>
              <link rel="stylesheet" href="/css/app.css"></link>
              <title>{this.props.title}</title>
            </head>
            <body>
              <div className="nav-div">
                <div className="nav-title">
                  <h1><a href="/">CAPTAINS DASH</a></h1>
                </div>
                <nav>
                  <a href="/logs">Logs</a>
                  <a href="/foodlogs">Food Logs</a>
                </nav>
              </div>
              <div className="title">
                <h2>{this.props.title}</h2>
              </div>
              <section className="children">{this.props.children}</section>
            </body>
          </html>
        );
    }
}

module.exports = DefaultLayout;