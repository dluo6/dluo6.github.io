import React, { useState, useEffect } from 'react';
import './Home.css'
import melon from '../../assets/melon.png';

function Home() {
    const completeText = 'Learning and growing, one line at a time';
    const typingText = '<h2>'+completeText+'</h2>';

    const [displayedText, setDisplayedText] = useState('');
   
    useEffect(() => {
        const typingAnimation = (text, callback) => {
            var index = 0;
            var display = ''
            const intervalId = setInterval(() => {
                if (index < text.length) {
                    display += text[index];
                    setDisplayedText(<h2 className='typing'>{display}</h2>);
                    index++;
                } else {
                    clearInterval(intervalId);
                    callback();
                }
            }, Math.random()*50 + 100);
        };
    
        typingAnimation(typingText, () => {
            setTimeout(() => {
                setDisplayedText(<h2 className='typed'>{completeText}</h2>);
            }, 1000);
        });
    }, []);
    
    const cards = [
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "Despite my current minor in management, I originally majored in finance, but I pivoted after my intro computer science class opened up a new door for me."
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "Languages",
            description: "Being born and raised in Quebec for part of my childhood, I know a bit of French. Including Mandarin, Spanish, and English, I have formally learned 4 languages."
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "Hobbies",
            description: "Outside of my professional life, you'll find me sometimes indulging in art, which is why I'm aiming to create all of the images used by my portfolio! I also enjoy other hobbies such as singing, going to the gym, and cooking."
        }
    ]

    const renderInfoCard = (image, imageAlt, text, description) => (
        <div className='Home-card'>
            <img src={image} alt={imageAlt}/>
            <b>{text}</b>
            <p>{description}</p>
        </div>
    )

    return (
        <div>
            <div className='Home-banner'>
                <div className='Home-banner-text'>
                    <h1>Hello! I am Danlin Luo</h1>
                    {displayedText}
                </div>
            </div>
            <div className='Home-about'>
                <div className='Home-about-text'>
                    <h1>About Me</h1>
                    <p>Hi, I’m Danlin Luo, a computer science major at McGill University with a passion for technology, problem-solving, and creative projects. My academic journey has been enriched by hands-on experience, from implementing environmental initiatives at McGill to researching influencer marketing under Professor Hyunji So.
                    <br /><br />
                    I’ve developed a strong foundation in software development through my internships and projects. At Citibank, I worked as a Software Development Analyst, where I deployed front-end changes and developed internal tools.
                    <br /><br />
                    Outside of work, I love participating in hackathons, such as McHacks and Code.Jam(), where I’ve built solutions ranging from productivity apps to trucking notification services. Fluent in English, advanced in Mandarin, and with an intermediate grasp of Spanish, I enjoy exploring new languages and cultures in my free time.
                    <br /><br />
                    Feel free to connect with me if you’d like to collaborate or chat about tech innovations!
                    </p>
                </div>
                <img src={melon} alt='watermelon'/>
            </div>
            <div className='Home-fun-facts'>
                <h1>Fun Facts!</h1>
                <div className='Home-info-cards'>
                    {cards.map((card) => renderInfoCard(card.image, card.imageAlt, card.text, card.description))}
                </div>
            </div>
        </div>
    );
}

export default Home;