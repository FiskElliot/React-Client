
function Header(){
    return (
        <header>
            <h1>My React App</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}


function App() {
  return (
    <div>
        <Header></Header>


        <h2>React App</h2>
        <p>This is a p tag</p>
    </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root')).render(App())