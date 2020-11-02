import React, { Component } from 'react'

export default class EducationDisplay extends Component {
    render() {
        if (this.props.view === false) {
            return (
                <section id={this.props.index} class='educationFormContent'>
                    <div className='institutionalInfo'>
                        <p>{this.props.data.schoolName}</p>
                        <p>{this.props.data.graduationYear}</p>
                        <p>{this.props.data.schoolLocation}</p>
                    </div>

                    <div>
                        <p>Major: {this.props.data.major}</p>
                        <p>Minor: {this.props.data.minor}</p>
                        <p>{this.props.data.degreeType}</p>
                        <p>G.P.A. : {this.props.data.gpa}</p>
                    </div>
                </section>
            )
        } else {
            return (
                <section id={this.props.id} class='educationFormContent' >
                    <label className='formLabels'>
                        School Name
                        <input 
                        className='formInputs'
                        name='schoolName'
                        type='text'
                        id={'schoolName' + this.props.index}
                        value={this.props.data.schoolName}
                        onChange={this.props.handleChange}
                        placeholder='Flagler College'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        School Location
                        <input 
                        className='formInputs'
                        name='schoolLocation'
                        type='text'
                        id={'schoolLocation' + this.props.index}
                        value={this.props.data.schoolLocation}
                        onChange={this.props.handleChange}
                        placeholder='St. Augustine'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Graduation Year
                        <input 
                        className='formInputs'
                        name='graduationYear'
                        type='text'
                        id={'graduationYear' + this.props.index}
                        value={this.props.data.graduationYear}
                        onChange={this.props.handleChange}
                        placeholder='2019'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Major
                        <input 
                        className='formInputs'
                        name='major'
                        type='text'
                        id={'major' + this.props.index}
                        value={this.props.data.major}
                        onChange={this.props.handleChange}
                        placeholder='Political Science'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Minor
                        <input 
                        className='formInputs'
                        name='minor'
                        type='text'
                        id={'minor' + this.props.index}
                        value={this.props.data.minor}
                        onChange={this.props.handleChange}
                        placeholder='Spanish'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Degree Type
                        <input 
                        className='formInputs'
                        name='degreeType'
                        type='text'
                        id={'degreeType' + this.props.index}
                        value={this.props.data.degreeType}
                        onChange={this.props.handleChange}
                        placeholder='Masters, Bachelors, Associates, Certificate Name'
                        ></input>
                    </label>
                    <br></br>

                    <label className='formLabels'>
                        Grade Point Average
                        <input 
                        className='formInputs'
                        name='gpa'
                        type='text'
                        id={'gpa=' + this.props.index}
                        value={this.props.data.gpa}
                        onChange={this.props.handleChange}
                        placeholder='3.5'
                        ></input>
                    </label>
                </section>
            )
        }
    }
}


 