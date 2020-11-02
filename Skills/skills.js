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
            //Bind functions
        }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
