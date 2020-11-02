import React, { Component } from 'react';
import EditAndSaveButton from './editAndSaveButton';

export default class Biography extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Corey',
             email: 'skaterboi69@gmail.com',
             phoneNumber: '732-789-5599',
             gitHub: 'https://github.com/Corey-Wademan',
             linkedIn: 'https://www.linkedin.com/in/corey-wademan-3b7512177/',
             formView: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.wrapperFunction = this.wrapperFunction.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit(e) {
        const {name, email, phoneNumber, gitHub, linkedIn} = this.state;
        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
        localStorage.setItem('gitHub', JSON.stringify(gitHub));
        localStorage.setItem('linkedIn', JSON.stringify(linkedIn));
        e.preventDefault();
    };

    toggleView() {
        this.setState({
            formView: !this.state.formView
        })
    };

    wrapperFunction(e) {
        this.toggleView();
        this.handleSubmit(e);
    };

    componentDidMount() {
        let name = JSON.parse(localStorage.getItem("name"));
        let email = JSON.parse(localStorage.getItem("email"));
        let phoneNumber = JSON.parse(localStorage.getItem("phoneNumber"));
        let gitHub = JSON.parse(localStorage.getItem("gitHub"));
        let linkedIn = JSON.parse(localStorage.getItem("linkedIn"));

        if (
            name == null ||
            email == null ||
            phoneNumber == null || 
            gitHub == null || 
            linkedIn == null 
        ) {
            name = this.state.name;
            email = this.state.email;
            phoneNumber = this.state.phoneNumber;
            gitHub = this.state.gitHub;
            linkedIn = this.state.linkedIn;
        }
        this.setState({ name, email, phoneNumber, gitHub, linkedIn });
    };

    
    render() {
        if (this.state.formView === false) {
            return (
                <section className='bioContainer'>
                    <div className='headerContainer'>
                        <h2>{this.state.name}</h2>
                        <h2>{this.state.phoneNumber}</h2>
                    </div>
                    <EditAndSaveButton 
                    section='biography'
                    view={this.state.formView}
                    toggleView={this.toggleView}
                    wrapperFunction={this.wrapperFunction}
                    />
                </section>
            )
        } else {
            return (
                <section className='bioContainer'>
                    <div className='headerContainer'>
                        <form onSubmit={this.onSubmit}>
                            <label>
                                <h4>Name: </h4>
                                <input
                                className='formInputs'
                                id='nameInput'
                                name='name'
                                type='text'
                                value={this.state.name}
                                placeholder='John Doe'
                                onChange={this.handleChange}
                                ></input>
                            </label>
                            <br></br>
                            <label>
                                <h4>Phone: </h4>
                                <input
                                className='formInputs'
                                id='numberInput'
                                name='phone'
                                type='text'
                                value={this.state.phoneNumber}
                                placeholder='123-456-7890'
                                onChange={this.handleChange}
                                ></input>
                            </label>
                            <br></br>
                            <label>
                                <h4>Email: </h4>
                                <input
                                className='formInputs'
                                id='emailInput'
                                name='email'
                                type='text'
                                value={this.state.email}
                                placeholder='johndoe@gmail.com'
                                onChange={this.handleChange}
                                ></input>
                            </label>
                            <br></br>
                            <label>
                                <h4>GitHub: </h4>
                                <input
                                className='formInputs'
                                id='githubInput'
                                name='github'
                                type='text'
                                value={this.state.gitHub}
                                placeholder='Enter your GitHub Url'
                                onChange={this.handleChange}
                                ></input>
                            </label>
                            <br></br>
                            <label>
                                <h4>LinkedIn: </h4>
                                <input
                                className='formInputs'
                                id='linkedInInput'
                                name='phone'
                                type='text'
                                value={this.state.linkedIn}
                                placeholder='Enter your LinkedIn Url'
                                onChange={this.handleChange}
                                ></input>
                            </label>
                            <EditAndSaveButton 
                            section='biography'
                            view={this.state.formView}
                            toggleView={this.toggleView}
                            wrapperFunction={this.wrapperFunction}
                            />
                        </form>
                    </div>
                </section>
            )
        }
    };
};
