import React from 'react';

export default function EditAndSaveButton (props) {

    // condition to check if the current form is viewed or not(edit button)
    if (props.view === false) {
        return (
            <input
            className='editButtons'
            id={props.section + 'EditButton'}
            type='button'
            value='Edit'
            onClick={props.wrapperFunction}
            ></input>
        )
    } else if(props.section === 'biography') {
        //condition if general info section is clicked (display save button)
        return (
            <input
            className='saveButtons'
            id={props.section + 'SaveButton'}
            type='submit'
            value='Save'
            onClick={props.wrapperFunction}
            ></input>
        )
    } else {
        return (
            <div className='editAndSaveButtons'>
                <input
                className='saveButtons'
                id={props.section + 'SaveButton'}
                type='Submit'
                value='Save'
                onClick={props.wrapperFunction}
                ></input>

                <input
                className='editButtons'
                id={props.section + 'EditButton'}
                type='button'
                value='+'
                onClick={props.wrapperFunction}
                ></input>
            </div>
        )
    }
    
    //condition for everything else (save / add buttons)
}

