import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App(){
    return(
        <div>
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)