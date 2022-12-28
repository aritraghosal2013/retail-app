import { Component } from "react";
import { Link } from "react-router-dom";

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": "",
            "password": ""
        }
    }

    handleEmailChange = (event) => {
        console.log("Email changes", event.target.value);
        this.setState({
            email: event.target.value
        })
    }

    handlePaswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    addUser = () => {
        fetch(`http://localhost:8080/addUser`, {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            }),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => res.json()).then((res) => {
            console.log("Response is ", res);
        })
    }

    render() {
        
        return (
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <br />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePaswordChange}
                />
                <button onClick={this.addUser}>Create</button>
                <Link to="/items">Submit</Link>
            </div>
        );
    }
}

export default AddItem