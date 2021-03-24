import react from "react";


class Title extends react.Component {

    constructor(props) {
        super();

        this.state = {
            title : ''
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title
        })
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className={'title'}>{this.state.title}</div>
        </>
    }

}


export default Title