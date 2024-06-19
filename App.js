import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id : "heading" }, "Namaste React 🚀");
console.log(heading);  // React element is an Object at the end of day.

//JSX => ReactElement => ReactElement JS Object => render html elemene
// babel transpiles JSX => ReactElement 
const Title = () => (<h1 id="heading" className="head" tabIndex="5">Namaste React using JSX!! 🚀</h1>);
const jsxHeading = (
    <h1 id="heading" className="head" tabIndex="5">Namaste React using JSX 🚀
       <Title /> 
    </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

root.render(jsxHeading);

//React Functional Component
const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <Title></Title>
            {Title()}
            {jsxHeading}
            <h1 id="heading" className="head" tabIndex="5">Namanbnhste React Functional Component</h1>;
        </div>
    );
};
root.render(<HeadingComponent />);
root.render(HeadingComponent());
//nested element
// const parent = React.createElement(
//     "div",
//     { id : "parent" },
//     React.createElement(
//         "div",
//         { id : "child" },
//         React.createElement("h1", {}, "I'm an h1 tag")
//     )
// );
// console.log(parent);

//sibling element
// const parentSibling = React.createElement(
//     "div",
//     { id : "parent" },
//     React.createElement(
//         "div",
//         { id : "child" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ]
//     )
// );
// console.log(parentSibling);

//nested sibling element
// const nestedParentSibling = React.createElement("div", { id : "parent" },[
//     React.createElement("div", { id : "child" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ]),
//     React.createElement("div", { id : "child2" },[
//             React.createElement("h1", {}, "I'm an h1 tag"),
//             React.createElement("h2", {}, "I'm an h2 tag")
//         ])
//     ]
// );
// console.log(nestedParentSibling);
// root.render(nestedParentSibling);