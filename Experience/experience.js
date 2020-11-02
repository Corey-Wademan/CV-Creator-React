import React, { Component } from 'react'
import ExperienceDisplay from './experienceDisplay'
import EditAndSaveButton from '../editAndSaveButton'

export default class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           experienceData: [{
                companyName: 'VipKID',
                jobLocation: 'Remote',
                jobTitle: 'English Teacher',
                responsibilities: 'Teach wild chinese children',
                startDate: '2018-04-00',
                endDate: null
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
