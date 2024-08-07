

const parent=React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1",
            {id:"heading", className:"h1 h1top"},
            "Hello React!!!!"),
            React.createElement("h2",
                {id:"heading2", className:"h2 h2top"},
                "h2 React!!!!")]
        )
    )
const root= ReactDOM.createRoot(document.getElementById("root"));
const root2= ReactDOM.createRoot(document.getElementById("root2"));
root.render(parent);
root2.render(parent);