import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super ()
        this.state = {
            title: "",
            year: "",
            posterImg: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        const {title, year, posterImg} = this.state
        return (
            <form className = "Form" >
                <input
                    name ="title" 
                    value = {title} 
                    placeholder = "Title"
                    onChange={this.handleChange}/>
                <input 
                    name ="year" 
                    value = {year} 
                    placeholder = "Year"
                    onChange={this.handleChange}/>
                <input 
                    name ="posterImg" 
                    value = {posterImg} 
                    placeholder = "Poster url"
                    onChange={this.handleChange}/>
                <button type="submit">Add Movie</button>
        </form>
    )}
}

export default Form