import React, { Component } from 'react'
import './Todo.css'


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)
    }
   
    render() {
        let result
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
                        <input
                            name='task'
                            type='text'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>SAVE</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm} className='fas fa-pen'></button>
                        <button onClick={this.handleRemove} className='fas fa-trash'></button>
                    </div>
                </div>
            )
        }
        return (
            result
        )
    }

}

export default Todo