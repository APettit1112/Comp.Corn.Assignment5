import './Hero.css';

// showcases your store's main banner using props for title, subtitle, call-to-action text, and image.
const Hero = ({
    title = 'ComponentCorner',
    subtitle = 'Find the latest tech and everyday gadgets.',
    ctaText = 'Shop Now',
    image = 'https://placehold.co/1200x400/0f766e/ffffff?text=Smart+Tech+Deals'
}) => {
    return (
        <section className="hero">
            <img className="hero-image" src={image} alt={title} />
            <div className="hero-content">
                <span className="hero-kicker">ComponentCorner</span>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button>{ctaText}</button>
            </div>
        </section>
    );
};

export default Hero;