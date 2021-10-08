import React from 'react';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    changeHandler = (e) => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        
        return (
            <React.Fragment>
                <form>
                    
                </form>
            </React.Fragment>
        )
    }
}

export default Contact