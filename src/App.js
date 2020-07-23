// import React from "react"

// // function App () {
//      return (
//         <h1>This is the App Component</h1>
//      )
//  }

// export default App

// import React, {Component} from "react"

// class App extends Component {
//     constructor () {
//         super()
//         this.state = {

//         }
//     }

//     render () {
//         return <h1>This is the App Component</h1>
//     }
// }

// export default App

import React from "react"
import List from "./Components/List"
import "./App.css"

const App = () => {
    return (
        <div className = "App">
            <h1 className = "movie-list-title"> The Most Amazing Movie List</h1>
            <List />
        </div>
    )
}

export default App