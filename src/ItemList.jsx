import { Component } from "react";
import Item from './Item';

class ItemList extends Component {

    state = {}
    constructor(props) {
        super(props);
        this.state = {
            itemsList: [{"name": "Potato", "qty": 5}, {"name": "Banana", "qty": 5}],
            userList: []
        }
    }
    
    fetchAllUsers = () => {
        fetch("http://localhost:8080/listUserInfo").then(res => res.json())
        .then(
            result => {
                console.log("Response of Get all users", result);
                this.setState({
                    userList: result
                })
            }
        )
    }
    componentDidMount() {
        this.fetchAllUsers();
    }
    
    deleteHandler = (email) => {
        console.log("Delete Handler called")
        fetch(`http://localhost:8080/userInfo/${email}`, { method: 'DELETE' }).then(res => res.json()).then((res) => {
            console.log("Response is ", res);
            this.fetchAllUsers();
        })
    }
    
    render() {
        return (
            <div>
                <h1>Inside Item Component</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {this.state.userList.map((element, index) => (
                                    <Item key={index} 
                                            email={element.email} 
                                            password={element.password}
                                            deleteHandler={this.deleteHandler}/>)
                        )}


                    </tbody>
                </table>
              
            </div>
        )
    }

    
}

export default ItemList;