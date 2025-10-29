// import React from 'react';
// import ReactDOM from 'react-dom/client';
const  parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const h2 = React.createElement("h2", { style:{color:"green", background:"red"} }, "Hello World from React");
const li1 = React.createElement("li","Java");
const li2 = React.createElement("li","Python");
const li3 = React.createElement("li","React");
const ul = React.createElement("ul", { style: { background: "green" } }, li1, li2, li3);
const pic = React.createElement("img", { src: "https://picsum.photos/200/300" , style:{width:'200px', height:'200px', borderRadius:'50%'}});
const h3 = React.createElement("h3", { style: { color: "red" } }, "Name");

const wrapper = React.createElement('div', {}, h2, ul);
root.render(wrapper);