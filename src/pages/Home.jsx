import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">
            Understand the world
          </h1>
          <p className="hero-subtitle">
            Grok is an AI modeled after the Hitchhiker's Guide to the Galaxy, so intended to answer almost anything and, far harder, even suggest what questions to ask!
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Try Grok</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <h3>Real-time Knowledge</h3>
            <p>Access to real-time information from the X platform</p>
          </div>
          <div className="feature-card">
            <h3>Conversational AI</h3>
            <p>Engage in natural, intelligent conversations</p>
          </div>
          <div className="feature-card">
            <h3>Witty & Rebellious</h3>
            <p>Get answers with personality and humor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
