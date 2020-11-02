import React, { Component } from 'react'
import SkillsDisplay from './skillsDisplay'
import EditAndSaveButton from '../editAndSaveButton'

export default class Skills extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            skillsData: [
                {skill: 'Teaching'},
                {skill: 'Programming'},
            ],
                formView: false,
        };
        this.addSkill = this.addSkill.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleView = this.toggleView.bind(this)
        this.wrapperFunction = this.wrapperFunction.bind(this)    
    }

    addSkill() {
        this.setState({
            skillsData: [
                ...this.state.skillsData,
                {
                 skill: ''
                }
            ]
        });
    };

    deleteSkill(index) {
        const copyData = Object.assign([], this.state.skillsData)
        copyData.splice(index, 1)
        this.setState({
            skillsData: copyData
        }) 
    };

    handleChange(e) {
        const index = Number(e.target.id.substring(e.target.id.length - 1));
		const copyFormArray = JSON.parse(JSON.stringify(this.state.skillsData));
        copyFormArray[index][e.target.name] = e.target.value;
		this.setState({
			skillsData: copyFormArray,
		});
    };

    handleSubmit(e) {
        const { skillsData } = this.state;
        localStorage.setItem("skillsData", JSON.stringify(skillsData));
        e.preventDefault();
    }

    toggleView() {
        this.setState({formView: !this.state.formView})
    };

    wrapperFunction(e) {
        this.toggleView();
        this.handleSubmit(e);
    };

    componentDidMount() {
        let skillsData = JSON.parse(localStorage.getItem("skillsData" ));
        if (skillsData === null) {
			skillsData = this.state.skillsData;
		}
        this.setState({skillsData})
    };
    
    
    render() {
        const skillsRender = this.state.skillsData.map((item, i) => (
            <SkillsDisplay
                id={'formAtIndex' + i}
                key={item.toString() + i}
                index={i}
                view={this.state.formView}
                data={this.state.skillsData[i]}
                deleteSkills={(e) => this.deleteSkill(e)}
                handleChange={this.handleChange}
            />
        ));
     return (
        <main>
            <div className='sectionHeaders'>
                <h1>Skills</h1>
            </div>

            <form onSubmit={this.handleSubmit} className='skillsForm'>
                {skillsRender}
                <EditAndSaveButton
                    section='skills'
                    view={this.state.formView}
                    toggleView={this.toggleView}
                    wrapperFunction={this.wrapperFunction}
                    addSection={this.addSkill}
                />
            </form>
        </main>
        )
     }
}
 