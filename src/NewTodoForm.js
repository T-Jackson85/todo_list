import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault()
        const newTodo =  {...this.state, id:uuidv4(), completed: false}
        this.props.createTodo(newTodo)
        this.setState({task:''})
    }
    handleChange(evt) {
      this.setState({[evt.target.name]:evt.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='NewTodoForm'>
                <label htmlFor='task'></label>
                <input
                    id='task'
                    type='text'
                    name='task'
                    placeholder='New Todo'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm