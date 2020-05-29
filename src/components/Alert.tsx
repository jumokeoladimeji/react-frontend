
import React from 'react';

interface AlertProps {
    errorMessage: string;
}

const Alert = ({errorMessage}: AlertProps) => {

    if(!errorMessage) return null;

    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
        { errorMessage }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    );
}

export default Alert;