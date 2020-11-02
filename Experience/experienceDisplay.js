import React, { Component } from 'react'

export default class ExperienceDisplay extends Component {
    render() {
        if (this.props.view === false) {
            return (
                <section id={this.props.index} className='experienceFormContent'>
                    <div className='experienceInfo'>
                        <p>{this.props.data.companyName}</p>
                        <p>{this.props.data.jobLocation}</p>
                        <p>{this.props.data.jobTitle}</p>
                        <p>{this.props.data.responsibilities}</p>
                        <p>{this.props.data.startDate}</p>
                        <p>{this.props.data.endDate}</p>
                    </div>
                </section>
            )
        } else {
            return (
                <section id={this.props.id} className='experienceFormContent'>
                    <label className='formLabels'>
                        Employment Company
                        <input
                            className='formInputs'
                            name='companyName'
                            type='text'
                            id={'companyName' + this.props.index}
                            value={this.props.data.companyName}
                            onChange={this.props.handleChange}
                            placeholder='VIPKID'
                        ></input>
                    </label>
                    <br></br>
                    
                    <label className='formLabels'>
                        Employment Location
                        <input
                            className='formInputs'
                            name='jobLocation'
                            type='text'
                            id={'jobLocation' + this.props.index}
                            value={this.props.data.jobLocation}
                            onChange={this.props.handleChange}
                            placeholder='California'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Employment Title
                        <input
                            className='formInputs'
                            name='jobTitle'
                            type='text'
                            id={'jobTitle' + this.props.index}
                            value={this.props.data.jobTitle}
                            onChange={this.props.handleChange}
                            placeholder='English Teacher'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Responsibilities
                        <input
                            className='formInputs'
                            name='responsibilities'
                            type='text'
                            id={'responsibilities' + this.props.index}
                            value={this.props.data.responsibilities}
                            onChange={this.props.handleChange}
                            placeholder='Teaching restless Chinese Kids'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Start Date
                        <input
                            className='formInputs'
                            name='startDate'
                            type='Date'
                            id={'startDate' + this.props.index}
                            value={this.props.data.startDate}
                            onChange={this.props.handleChange}
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        End Date
                        <input
                            className='formInputs'
                            name='endDate'
                            type='Date'
                            id={'endDate' + this.props.index}
                            value={this.props.data.endDate}
                            onChange={this.props.handleChange}
                        ></input>
                    </label>
                    <br></br>
                    <div id='deleteButtonContainer'>
                        <button 
                            className='deleteButtons'
                            id={`deleteEducationAtThisIndex${this.props.index}`}
                            onClick={(e) => this.props.deleteExperience(e)}
                            >X</button>
                    </div>
                </section>
            )
        }
    }
}
 