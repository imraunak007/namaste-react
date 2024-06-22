import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(`${this.props.name} Child Constructor`);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "",
                location: ""
            }
        };
    }

    async componentDidMount() {

        console.log(`${this.props.name} Child DidMount`);

        this.timer = setInterval(() => {
            console.log("OP");
        },10);

        const data = await fetch("https://api.github.com/users/imraunak007");
        const json = await data.json();
        this.setState({
            userInfo: json 
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component DidUpdate");
        if (this.state.count !== prevState.count){

        }
    }

    componentWillUnmount() {
        console.log("Component WillMount");
        clearInterval(this.timer);
    }

    render() {

        console.log(`${this.props.name} Child Render`);
        const { name, location } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {

                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    });
                }}
                >
                    Count Increase
                </button>
                <h1>Count2: {count2}</h1>
                {/* <h2>Name: {name}</h2>
                <h3>Location: {location}</h3> */}
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @imraunak07</h4>
            </div>
        );
    }
}

export default UserClass;