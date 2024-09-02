import React from 'react';
import TeamMember from './TeamMember';
import roarImage from './roar.png';
import './Team.css'; 

const teamMembers = [
    {
        name: "Arsh Singh",
        role: "CEO/Designer/ Guy who made this website",
        description: "Arsh is a Computer Science Student. He is visionary loves to problem solve.",
        image: roarImage,
        linkedin: "https://www.linkedin.com/in/udkarsh", // Replace with your LinkedIn profile URL
        instagram: "https://www.instagram.com/udk_arsh" // Replace with your Instagram profile URL
    }
];

const Team = () => {
    return (
        <section id="team" className="team-section">
            <h2>Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        description={member.description}
                        image={member.image}
                        linkedin={member.linkedin}
                        instagram={member.instagram}
                    />
                ))}
            </div>
        </section>
    );
};

export default Team;
