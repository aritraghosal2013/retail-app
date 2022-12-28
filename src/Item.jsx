import { Component } from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
                <tr>
                    <td>{this.props.email}</td>
                    <td> {this.props.password}</td>
                    <td><button onClick={this.editHandler}>Edit</button></td>
                    <td><button onClick={this.deleteHandlerMethod}>Delete</button></td>
                </tr>
        )
    }

    deleteHandlerMethod = () => {
        this.props.deleteHandler(this.props.email);
    }

    editHandler = () => {
        console.log("Click Handler called")
    }

}

export default Item;