import {React} from 'react'
import { connect } from 'react-redux'

class Users extends React.Component{

    constructor(){
        super()
    }

    viewUser(event, Id){
        event.preventDefault()
    }

    render(){
        return(
            <section>
                <div class="container-fluid">
                    Users List
                    <table>
                        <tr>
                            <th>Username</th>
                            <th>Age</th>
                            <th>Role</th>
                        </tr>
                        {this.props.users.map((user,index) => {
                            <tr data-index="index">
                                <td>{ user.username }</td>
                                <td>{ user.age }</td>
                                <td>{ user.role}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </section>
        )
    }
    
}

const mapStateToProps = state => {
    return {users: state.users}
}

export default connect(mapStateToProps)(Users);