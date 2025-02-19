import React, { useState, useEffect } from 'react';
import './Home.css';
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
            description: "Outside of my professional life, you'll find me dabbling in a variety of creative hobbies, such as singing, playing the piano/guitar, drawing, and knitting. I also try to balance my life with other activities such as going to the gym and cooking."
        }
    ]

    const renderInfoCard = (image, imageAlt, text, description) => (
        <div className='Home-card'>
            <img src={image} alt={imageAlt}/><br />
            <b>{text}</b>
            <p>{description}</p>
        </div>
    )

    return (
        <div id='Home'>
            <div className='Home-banner'>
                <div className='Home-banner-text'>
                    <h1>Hello! I am Danlin Luo</h1>
                    {displayedText}
                </div>
            </div>
            <div className='Home-about'>
                <div className='Home-about-text'>
                    <h1>About Me</h1>
                    <p>Hi, I’m Danlin Luo, a computer science major at McGill University with a passion for technology, problem-solving, and creative projects. My academic journey has been enriched by hands-on experience, such as implementing environmental initiatives, researching influencer marketing under Professor Hyunji So, or contributing to the learning of other students through being a TEAM mentor.
                    <br /><br />
                    I'm always looking for opportunities to grow in various ways, whether it is exploring new skills, tinkering with projects, or taking a deeper dive into existing knowledge while maintaining balance in my life. It is fulfilling to make small steps daily, knowing that once I look back, I will have made much more progress than I could have thought would be possible.
                    <br /><br />
                    Scroll further to see more about me, and feel free to connect with me through LinkedIn!
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