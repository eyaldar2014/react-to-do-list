import react from "react";


class Burger extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    //
    // componentDidMount() {
    // }

    hamburgerFunction=()=>{
        console.log('hamburger function')
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className={'burgerContainer'} onClick={this.hamburgerFunction}>
                <div className={'burger'}></div>
                <div className={'burger'}></div>
                <div className={'burger'}></div>
            </div>
        </>
    }

}


export default Burger