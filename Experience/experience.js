import React, { Component } from 'react'
import ExperienceDisplay from './experienceDisplay'
import EditAndSaveButton from '../editAndSaveButton'

export default class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           experienceData: [{
                companyName: null,
                jobLocation: null,
                jobTitle: null,
                responsibilities: null,
                startDate: null,
                endDate: null
            }],
            formView: false,
       };
       this.addExperience = this.addExperience.bind(this);
       this.deleteExperience = this.deleteExperience.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.wrapperFunction = this.wrapperFunction.bind(this);
       this.toggleView = this.toggleView.bind(this);
    }

    addExperience() {
        this.setState({
            experienceData: [
                ...this.state.experienceData,
                {
                    companyName: '',
                    jobLocation: '',
                    jobTitle: '',
                    responsibilities: '',
                    startDate: '',
                    endDate: ''
                },
            ]
        })
    }

    deleteExperience(index) {
        const copyData = Object.assign([], this.state.experienceData);
        copyData.splice(index, 1);
        this.setState({
            experienceData: copyData
        })
    }

    handleChange(e) {
        const index = Number(e.target.id.substring(e.target.id.length - 1));
        const copyFormArray = JSON.parse(JSON.stringify(this.state.experienceData));
        copyFormArray[index][e.target.name] = e.target.value;
        this.setState({
            experienceData: copyFormArray
        })
    }

    handleSubmit(e) {
        const {experienceData} = this.state;
        localStorage.setItem("experienceData", JSON.stringify(experienceData));
        e.preventDefault();
    }

    toggleView() {
        this.setState({formView: !this.state.formView})
    }

    wrapperFunction(e) {
        this.toggleView();
        this.handleSubmit(e);
    }
    
    componentDidMount() {
        let experienceData = JSON.parse(localStorage.getItem("experienceData"));
        if (experienceData === null) {
            experienceData = this.state.experienceData;
        }
        this.setState({experienceData})
    }
    
    render() {
        const experienceRender = this.state.experienceData.map((item, i) => (
            <ExperienceDisplay
                id={'formIndexAt' + i}
                index={i}
                key={item.toString() + i}
                view={this.state.formView}
                data={this.state.experienceData[i]}
                deleteExperience={(e) => this.deleteExperience(e)}
                handleChange={this.handleChange}

            />
        ));

        return (
            <main>
                <div className='sectionHeaders'>
                    <h1>Experience</h1>
                </div>

                <form className='experienceForm' onSubmit={this.handleSubmit}>
                    {experienceRender}
                    <EditAndSaveButton
                        section='experience'
                        view={this.state.formView}
                        toggleView={this.toggleView}
                        wrapperFunction={this.wrapperFunction}
                        addSection={this.addExperience}
                    />
                </form>
            </main>
        )
    }
}
 