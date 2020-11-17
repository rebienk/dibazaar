import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">LOREM IPSUM - {id}</span>
                    <p>LOREMEMELOREMLREORMELREORENERLEJOAL:FNBAfdafasdf</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dibazaar-Admin</div>
                    <div>2nd januari2020, 33am</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
