import React, { Component } from 'react';


class Resume extends Component {
    const resume_path = "/Eric_Boris_Resume_2023.pdf"; 

    render() {
        return (
            <div>
                <h1>My Resume</h1>
                <iframe 
                    src={resume_path}
                    style={{width: '100%', height: '500px'}}
                    frameBorder="0">
                </iframe>
                <a href={resume_path} download>
                    <button>Download PDF</button>
                </a>
            </div>
        );
    }
}

export default Resume;
