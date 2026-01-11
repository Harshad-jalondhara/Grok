import "../styles/about.css";

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-hero">
                    <h1 className="about-title">About Grok</h1>
                    <p className="about-intro">
                        Grok is designed to answer questions with a bit of wit and has a rebellious streak, so please don't use it if you hate humor!
                    </p>
                </div>

                <div className="about-content">
                    <section className="about-section">
                        <h2>What is Grok?</h2>
                        <p>
                            Grok is an AI assistant developed by x.ai, inspired by "The Hitchhiker's Guide to the Galaxy" by Douglas Adams. 
                            Unlike traditional AI assistants, Grok is designed to answer almost anything and, more importantly, 
                            suggest what questions to ask.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Key Features</h2>
                        <div className="features-list">
                            <div className="feature-item">
                                <h3>Real-time Information</h3>
                                <p>Access to real-time data and information from the X platform, keeping you informed with the latest updates.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Conversational Intelligence</h3>
                                <p>Engage in natural, flowing conversations with an AI that understands context and nuance.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Witty Personality</h3>
                                <p>Get answers with personality, humor, and a touch of rebelliousness that makes interactions more engaging.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Question Suggestions</h3>
                                <p>Not only answers your questions but also suggests relevant questions you might want to ask.</p>
                            </div>
                        </div>
                    </section>

                    <section className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            At x.ai, our mission is to build AI tools that empower humanity in its pursuit of understanding and knowledge. 
                            Grok represents our commitment to creating AI that is not just functional, but also engaging, helpful, and aligned with human values.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Get Started</h2>
                        <p>
                            Ready to explore what Grok can do? Join us and start asking questions, get real-time answers, 
                            and discover a new way to interact with AI.
                        </p>
                        <div className="about-actions">
                            <button className="primary-btn">Try Grok Now</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
