import React, { Component } from 'react'


export default class SkillsDisplay extends Component {
    render() {
        if (this.props.view === false) {
            return (
                <section id={this.props.index} className='skillsFormContent'>
                    <div className='skillsInfo'>
                        <p>{this.props.data.skill}</p>
                    </div>
                </section>
            )
        } else {
            return (
                <section id={this.props.id} className='skillsFormContent'>
                    <label className='formLabels'>
                        Skill
                        <input
                            className='formInputs'
                            name='skill'
                            type='text'
                            id={'skill' + this.props.index}
                            value={this.props.data.skill}
                            onChange={this.props.handleChange}
                            placeholder='Reactjs, Nodejs, HTML'
                        ></input>
                    </label>
                    <br></br>
                    <div id='deleteButtonContainer'>
                        <button 
                            className='deleteButtons'
                            id={`deleteSkillsAtThisIndex${this.props.index}`}
                            onClick={(e) => this.props.deleteSkills(e)}
                     >X</button>
                    </div>
                </section>
            )
        }
    }
}
