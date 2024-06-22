import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent DidMount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name="Raunak" location="Kolkata" />
                <UserClass name="Elon" location="California" />
            </div>
        );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name="Raunak" location="Kolkata" />
//         </div>
//     );
// };

export default About;