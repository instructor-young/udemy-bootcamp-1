const appEl = document.getElementById("app");
const root = ReactDOM.createRoot(appEl);

const Greeting = () => <h1>Helle World</h1>;

root.render(<Greeting />);
