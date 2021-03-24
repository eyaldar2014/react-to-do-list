import react from "react";
import moment from 'moment'

class Clock extends react.Component {

    constructor(props) {
        super();
        this.state = {
            time: '',
            date: ''
        }
    }

    componentDidMount() {
        this.clock()
        const date = moment().format('LL');
        this.setState({
            date: date
        })
    }

    clock=()=>{
        setInterval(this.getTime, 1000)
    }

    getTime=()=>{
        const time = moment().format('LTS');
        this.setState({
            time: time.toString()
        })
    }


    render() {
        // console.log('[render]')
        // console.log(this.state)
        // console.log(this.state.time)

        return <>
            <div className={'date'}>{this.state.date}</div>
            <div className={'clock'}>{this.state.time}</div>
        </>
    }

}


export default Clock