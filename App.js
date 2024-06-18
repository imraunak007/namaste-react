import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id : "heading", xyz : "abc" }, "Hello World from React!");
console.log(heading);  // React element is an Object at the end of day.

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);

//nested element
const parent = React.createElement(
    "div",
    { id : "parent" },
    React.createElement(
        "div",
        { id : "child" },
        React.createElement("h1", {}, "I'm an h1 tag")
    )
);
console.log(parent);

//sibling element
const parentSibling = React.createElement(
    "div",
    { id : "parent" },
    React.createElement(
        "div",
        { id : "child" },[
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
);
console.log(parentSibling);

//nested sibling element
const nestedParentSibling = React.createElement("div", { id : "parent" },[
    React.createElement("div", { id : "child" },[
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]),
    React.createElement("div", { id : "child2" },[
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ])
    ]
);
console.log(nestedParentSibling);
root.render(nestedParentSibling);