import react from "react";


class NotesHeader extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
        this.setState({})
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>
            <div className="notesHeader">
                <select>
                    <option>sort by</option>
                    <option>name</option>
                    <option>date</option>
                </select>
                <input type={'input'} placeholder={'search...'} className={'search'}/>
                <input type={'button'} value={'addNote'} className={'addNote'}/>
                <div className={'btnHeadContainer'}>
                    <input className={'headBtn row'} type={'button'} value={'display - -'}/>
                    <input className={'headBtn box'} type={'button'} value={'display o o '}/>
                </div>
            </div>
        </>


    }

}

//    sort by(select)
//    search
//    display row/box
//    add note
//

export default NotesHeader