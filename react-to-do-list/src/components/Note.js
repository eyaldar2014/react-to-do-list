import react from "react";


class Note extends react.Component {

    constructor(props) {
        super();

        this.state = {
            name: "",
            text: "",
            date: "",
            nameStyle: '',
            dateStyle: '',
            textStyle: '',
            noteStyle: '',
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            text: this.props.text,
            date: this.props.date,
            nameStyle: this.props.nameStyle,
            dateStyle: this.props.dateStyle,
            textStyle: this.props.textStyle,
            noteStyle: this.props.noteStyle,
        })
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className={this.state.noteStyle}>
                <div className={this.state.nameStyle}>{this.state.name}</div>
                <div  className={this.state.textStyle}>{this.state.text}</div>
                <div  className={this.state.dateStyle}>{this.state.date}</div>

                <div className={'noteBtnContainer'}>
                    <input className={'noteBtn edit'} type={'button'} value={'*'}/>
                    <input className={'noteBtn expand'} type={'button'} value={'+'}/>
                    <input className={'noteBtn delete'} type={'button'} value={'X'}/>
                </div>
            </div>

        </>
    }

}


export default Note