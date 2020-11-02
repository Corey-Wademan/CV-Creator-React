import React, { Component } from 'react'
import EducationDisplay from './educationDisplay'
import EditAndSaveButton from '../editAndSaveButton'

export default class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
             educationData: [
                 {
                 schoolName: 'Bond University',
                 schoolLocation: 'Gold Coast, Australia',
                 major: 'Political Science',
                 minor: 'Spanish',
                 degreeType: 'Bachelors',
                 gpa: '2.9',
                 graduationYear: '2018'
             },
            ],
             formView: false,
        };
        this.addEducation = this.addEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleView = this.toggleView.bind(this)
        this.wrapperFunction = this.wrapperFunction.bind(this)
    }

    addEducation() {
        this.setState({
            educationData: [
                ...this.state.educationData,
                {
                 schoolName: '',
                 schoolLocation: '',
                 major: '',
                 minor: '',
                 degreeType: '',
                 gpa: '',
                 graduationYear: ''
                }
            ]
        });
    };

    deleteEducation(index) {
        const copyData = Object.assign([], this.state.educationData)
        copyData.splice(index, 1)
        this.setState({
            educationData: copyData
        }) 
    };

    handleChange(e) {
        const index = Number(e.target.id.substring(e.target.id.length - 1));
		const copyFormArray = JSON.parse(JSON.stringify(this.state.educationData));
        copyFormArray[index][e.target.name] = e.target.value;
		this.setState({
			educationData: copyFormArray,
		});
    };

    handleSubmit(e) {
        const { educationData } = this.state;
        localStorage.setItem("educationData", JSON.stringify(educationData));
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
        let educationData = JSON.parse(localStorage.getItem("educationData" ));
        if (educationData === null) {
			educationData = this.state.educationData;
		}
        this.setState({educationData})
    };
    
    render() {
        const educationRender = this.state.educationData.map((item, i) => (
            <EducationDisplay
                id={'formIndexAt ' + i}
                index={i}
                key={item.toString() + i}
                view={this.state.formView}
                data={this.state.educationData[i]}
                deleteEducation={(e) => this.deleteEducation(e)}
                handleChange={this.handleChange}
            />
        ));

        return (
            <main>
                <div className='sectionHeaders'>
                    <h1>Education</h1>
                </div>

                <form className='educationForm' onSubmit={this.handleSubmit}>
                    {educationRender}
                    <EditAndSaveButton 
                        section='education'
                        view={this.state.formView}
                        toggleView={this.toggleView}
                        addSection={this.addEducation}
                        wrapperFunction={this.wrapperFunction}
                    />
                </form>
            </main>
        )
    }
} 
