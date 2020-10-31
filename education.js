import React, { Component } from 'react'
import EducationDisplay from './educationDisplay'
import EditAndSaveButton from '../editAndSaveButton'

export default class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
             educationData: [{
                 schoolName: 'Bond University',
                 schoolLocation: 'Gold Coast, Australia',
                 major: 'Political Science',
                 minor: null,
                 degreeType: 'Bachelors',
                 gpa: '2.9',
                 graduationYear: '2018'
             }],
             formView: false,
        };
        //Bind functions
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
