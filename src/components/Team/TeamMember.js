import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, description, image, linkedin, instagram }) => {
    return (
        <div className="team-member">
            <img src={image} alt={`${name}`} className="team-member-image" />
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <span className="description">{description}</span>
            <div className="social-links">
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                )}
                {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
