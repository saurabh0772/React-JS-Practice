var h1 = React.createElement('h1', null, "hello from react")

var parent = document.querySelector(".parent")

var root  = ReactDOM.createRoot(parent)

root.render(h1);