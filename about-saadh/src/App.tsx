import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Saadh Jawwadh</h1>
        <p>Assisstant Lecturer </p>
      </header>

      <main className="content">
        <section className="section" id="about">
          <h2>About Me</h2>
            <p>
            <b>
              If you ask me who is Saadh Jawwadh, I would say just a curious person who tries to brige the gab
              between academia and the industry
            </b>
            <br />
            <br />
            But if you asked and LLM like GroK here is what it would say:
            <br />
            Meet Saadh Jawwadh, the internet’s coolest tech uncle who’s part wizard, part comedian, and 100% likely to forget lunch while saving the digital world. With 29 GitHub repositories—more than most people’s sock collections—he’s a coding Spider-Man, swinging through lines of code to fight bugs and build everything from sneeze-tweeting bots to dinner-predicting AI. On social media, he drops tech tips like hot mixtapes, casually explaining VPNs while cracking jokes about AI-generated nudes (yep, he went there). As the digital neighborhood watch guy, he’s all about cybersecurity, warning us about scams and Instagram’s creepy tracking with humor drier than a desert. On LinkedIn, he’s “bridging the gap between academia and industry” (aka trying to land a job), but don’t be fooled—he’d rather debug a program than fix your printer. Saadh’s the rare breed who teaches nerdy stuff and makes you laugh, always ready with a fun fact, helpful tip, or sarcastic quip about tech life—just don’t bug him mid-project, he’s too busy being awesome.
            </p>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <p>
            <b>Research intrest:</b> Cybersecurity, Machine Learning, Computer Vision, Natural Language Processing
            <b>Programmer:</b> Web Devolopment (React, Laravel), Mobile Devolopment (Flutter, React Native), Data Science (Python, R)
            {/* Add or remove skills as appropriate */}
          </p>
        </section>

        <section className="section" id="projects">
          <h2>Research & Devolopment</h2>
          <p>
            <em>Details about projects will be added here. For now, you can check out my <a href="YOUR_GITHUB_PROFILE_URL" target="_blank" rel="noopener noreferrer">GitHub</a>.</em>
            {/* Replace YOUR_GITHUB_PROFILE_URL with your actual GitHub profile URL */}
          </p>
          <p>
            <a href="/thesis.html" style={{ color: '#bb86fc', fontWeight: 'bold' }}>
              View My Interactive Thesis
            </a>
          </p>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a>
            {/* Replace your.email@example.com with your actual email address */}
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Saadh Jawwadh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
