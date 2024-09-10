import './Home.css'
import melon from '../../assets/melon.png';

function Home() {

    const cards = [
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        },
        {
            image: melon,
            imageAlt: "melon",
            text: "University",
            description: "I am currently a senior at McGill University majoring in CS and minoring in management!"
        }
    ]

    const renderInfoCard = (image, imageAlt, text, description) => (
        <div className='Home-card'>
            <img src={image} alt={imageAlt}/>
            <p>{text}</p>
            <p>{description}</p>
        </div>
    )

    return (
        <div>
            <div className='Home-banner'>
                <div className='Home-banner-text'>
                    <h1>Hello! I am Danlin Luo</h1>
                    <h2>{'<h2>Computer science enthusiast and art hobbyist</h2>'}</h2>
                </div>
            </div>
            <div className='Home-about'>
                <p>About Me</p>
                <div className='Home-info-cards'>
                {cards.map((card) => renderInfoCard(card.image, card.imageAlt, card.text, card.description))}
                </div>
            </div>
        </div>
    );
}

export default Home;