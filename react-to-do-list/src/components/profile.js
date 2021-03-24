import react from "react";
import { Avatar } from '@material-ui/core';

class Profile extends react.Component {

    constructor(props) {
        super();

        this.state = {
            name : '',
            img : '',
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            img: this.props.img,

        })
    }

    profileMenu=()=>{
        console.log('profileMenu')
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className={'profile'} onClick={this.profileMenu}>
                <Avatar alt="Remy Sharp" src={this.state.img}/>
                <div>{this.state.name}</div>
            </div>
        </>
    }

}


export default Profile