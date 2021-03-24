import react from "react";

import Title from './Title'
import Time from './Clock'
import Profile from "./profile";
import Burger from "./Burger";
import Note from "./Note";
import NotesHeader from "./NotesHeader";

class ToDoList extends react.Component {

    constructor(props) {
        super();

        this.state = {
            title: 'To Do List',
            name: 'name',
            img: 'https://cdn.britannica.com/88/188088-050-B2B457A0/dolphins-blue-sea-mammal-sky.jpg',
            notes: [
                {
                    name: 'name',
                    text: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
                    date: 'date'
                },
                {
                    name: 'name',
                    text: 'text',
                    date: 'date'
                },
                {
                    name: 'name',
                    text: 'text',
                    date: 'date'
                },
                {
                    name: 'name',
                    text: 'text',
                    date: 'date'
                },
            ],
        }
    }

    createNote = () => {

    }

    render() {
        // console.log('[render]')
        // console.log(this.state)


        return <>
            <div className={'headContainer'}>
                <Profile name={this.state.name} img={this.state.img}/>
                <Time/>
                <Burger/>
            </div>
            <div>
                <Title title={this.state.title}/>
            </div>

            <div>
                <NotesHeader/>
            </div>

            {/*if row*/}
            <div className={"notesContainerRow"}>
                {this.state.notes.map(note => {
                    // console.log(note)
                    return <Note noteStyle={'noteRow'} nameStyle={''} textStyle={'rowText'} dateStyle={'rowDate'} name={note.name} text={note.text} date={note.date}/>
                })}
            </div>
            {/*if grid*/}
            <div className={"notesContainerGrid"}>
                {this.state.notes.map(note => {
                    // console.log(note)
                    return <Note noteStyle={'noteGrid'} nameStyle={'gridName'} textStyle={'gridText'} dateStyle={'gridDate'} name={note.name} text={note.text} date={note.date}/>
                })}
            </div>
        </>
    }

}


export default ToDoList