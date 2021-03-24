import react from "react";


class NoteGrid extends react.Component {

    constructor(props) {
        super();

        this.state = {
            name: "",
            text: "",
            date: "",
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            text: this.props.text,
            date: this.props.date,
        })
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className={'noteGrid'}>
                <div className={"gridName"}>{this.state.name}</div>
                <div  className={"gridName"}>{this.state.date}</div>
                <div  className={"gridName"}>{this.state.text}</div>

                <div className={'noteBtnContainer'}>
                    <input className={'noteBtn edit'} type={'button'} value={'*'}/>
                    <input className={'noteBtn expand'} type={'button'} value={'+'}/>
                    <input className={'noteBtn delete'} type={'button'} value={'X'}/>
                </div>
            </div>

        </>
    }

}


export default NoteGrid