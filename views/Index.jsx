const React = require('react');
const DefaultLayout = require('./default/DefaultLayout');

class Index extends React.Component{
    render(){
        return(
            <DefaultLayout title="Welcome">

            </DefaultLayout>
        )
    }
}

module.exports =Index;