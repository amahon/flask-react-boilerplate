import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      content: ''
    };
  }

  componentDidMount() {
    fetch("/api/home")
        .then(res => res.json())
        .then( 
            (result) => {
                console.log(result);
                this.setState({
                    content: result.message,
                });
            },
            (error) => {

            }
        )
  }

  render() {
    var _msg = '';
    if (this.state.content.length) {
        _msg = <div className="alert alert-success" role="alert">
            { this.state.content }
        </div>
    }
    return <div>{ _msg }</div>
  }

};


export default Home;
