import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../Images/1.svg'
import fimage2 from '../Images/support.svg'
import fimage3 from '../Images/3.svg'
import fimage5 from '../Images/5.svg'
import box1 from '../Images/box1.svg'
import box2 from '../Images/box2.svg'
import box3 from '../Images/box3.svg'


function Feature() {
    return (
        <div id='features'>
            <h2> 🌟 Why Our Community Shines Brightest! 🌟</h2>
            <h1 style={{ fontSize: '20Px', fontFamily: 'Lato', fontWeight:'300', marginBottom:'20px'}}> 
🤝 "There is immense power when a group of people with similar interests gets together to work toward the same goals."  - And that's exactly what we've built here!
<br />
<br />Our Community's Secret Sauce:
<br />
<br />Shared Passion: 🔥 We're all united by our love for gaming, creating a space where everyone feels understood and welcomed.
<br />Supportive Atmosphere: 🙌 Whether you're a newbie or a seasoned pro, you'll find friendly faces ready to cheer you on and offer a helping hand.
<br />Endless Fun: 🎉 From epic battles to creative collaborations, there's always something exciting happening in our community.
<br />Growth Mindset: 🌱 We believe in learning and improving together, fostering an environment where everyone can level up their skills and knowledge.
<br />Making a Difference: 💖 Together, we're not just building a community, we're making a positive impact on each other's lives.
<br />
<br />Join the Adventure! 🚀
<br />
<br />Are you ready to experience the magic of a truly supportive and engaging community? Come join us and discover the power of shared passion and collaboration!</h1>
            <div className='a-container'>
                <Featurebox  image={fimage1} title="Community-Driven Experience" description="The community plays an active role in shaping the server, with feedback and ideas being taken seriously by the staff. This sense of collaboration creates a more engaging and personalized experience for all players."/>
                <Featurebox  image={fimage2} title="Safe and Welcoming Environment" description="The Sanctuary of the Doomed prioritizes a safe and friendly community, with griefing being strictly prohibited. This ensures that players can focus on enjoying the game and interacting with others without fear of harassment or disruption."/>
                <Featurebox  image={fimage3} title="Active and Supportive Staff" description="The Sanctuary of the Doomed has a dedicated team of staff members who are always available to help players and ensure a positive experience. This creates a sense of security and support for players of all levels."/>
                <Featurebox  image={fimage5} title="Inclusivity and Respect" description="The focus on creating a safe and welcoming environment, where griefing is prohibited, suggests a community that values inclusivity and respect for all players."/>
                
            </div>
            <h1>What we stand for !</h1>
            <div className='a-container'>
                
                <Featurebox image={box1} title="Respect" description="Respect is the foundation of our community. We treat each other with kindness and understanding, valuing the perspectives and contributions of every member. We believe that a respectful environment fosters healthy communication and stronger bonds among our members."/>
                <Featurebox image={box2} title="Integrity" description="Integrity is at the heart of everything we do. We uphold the highest standards of honesty and fairness. Our commitment to integrity ensures that our community remains a trustworthy and reliable space where members can feel safe and valued."/>
                <Featurebox image={box3} title="Passion" description="Passion drives us to continuously improve and innovate. We are passionate about gaming and the sense of adventure it brings. This passion translates into our dedication to creating an exceptional community experience, where every member can share their love for gaming and connect with like-minded individuals."/>
            </div>
        </div>
    )
}

export default Feature;