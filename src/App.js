import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="page">
                    <Header />                
                    <Main />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
