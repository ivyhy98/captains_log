const React = require('react');
const DefaultLayout = require('./default/DefaultLayout');

class Index extends React.Component{
    render(){
        return (
          <html lang="en">
            <head>
              <link rel="stylesheet" href="/css/app.css"></link>
              <title>Welcome Page</title>
            </head>
            <body>
              <div className="nav-div">
                <div className="nav-title">
                  <h1>
                    <a href="/">CAPTAINS DASH</a>
                  </h1>
                </div>
              </div>
              <div className="home-img">
                <nav className="home-nav">
                  <a href="/logs">Logs</a>
                  <a href="/foodlogs">Food Logs</a>
                </nav>
              </div>
              <section className="children">{this.props.children}</section>
            </body>
          </html>
        );
    }
}

module.exports =Index;