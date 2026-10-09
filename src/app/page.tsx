import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <a href="/" className="logo-area" style={{ textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>PU</div>
          <div className="logo-text">
            <span>PU - स्वास्थ्य</span><br />
            <span>NOVA 2027</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="/committee">Conference Committee</a>
          <a href="#themes">Themes</a>
          <a href="#speakers">Speakers</a>
          <a href="#call-for-papers">Call for Papers</a>
          <a href="#registration">Registration</a>
          <a href="#venue">Venue</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Register Now &rarr;</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes"></div>
        <div className="hero-content container">
          <div className="hero-text">
            <span className="hero-subtitle">International Conference on</span>
            <h1>Smart Nursing and Healthcare Innovation</h1>

            <div className="hero-details">
              <div className="detail-item">
                <div className="detail-icon">📅</div>
                <div>
                  <strong>18th - 19th February 2026</strong><br />
                  <small>Conference & Workshop</small>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div>
                  <strong>Medical Auditorium</strong><br />
                  <small>Parul University, Vadodara</small>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">Register Now &rarr;</button>
              <button className="btn-outline">Call for Papers &rarr;</button>
            </div>

            {/* UN Sustainable Development Goals (SDGs) Official Tiles */}
            <div className="sdg-container" style={{ marginTop: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))', gap: '0.85rem', maxWidth: '600px' }}>

                {/* SDG 3 */}
                <div className="sdg-tile" style={{ background: '#4C9F38', borderRadius: '16px', padding: '10px 10px 12px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px', boxShadow: '0 8px 18px rgba(76, 159, 56, 0.25)' }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '0.85', fontFamily: 'Inter, sans-serif' }}>3</span>
                    <span style={{ fontSize: '0.58rem', fontWeight: '800', lineHeight: '1.15', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.2px' }}>
                      GOOD HEALTH<br />AND WELL-BEING
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: '4px' }}>
                    <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 24H12L19 8L29 36L37 17L43 26H58" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M46 7C43.5 7 41.5 8.5 40.5 10.5C39.5 8.5 37.5 7 35 7C31.5 7 29 9.5 29 13C29 19 40.5 26 40.5 26C40.5 26 52 19 52 13C52 9.5 49.5 7 46 7Z" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* SDG 4 */}
                <div className="sdg-tile" style={{ background: '#C5192D', borderRadius: '16px', padding: '10px 10px 12px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px', boxShadow: '0 8px 18px rgba(197, 25, 45, 0.25)' }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '0.85', fontFamily: 'Inter, sans-serif' }}>4</span>
                    <span style={{ fontSize: '0.58rem', fontWeight: '800', lineHeight: '1.15', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.2px' }}>
                      QUALITY<br />EDUCATION
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: '4px' }}>
                    <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 34V16C6 16 16 12 28 16C40 12 50 16 50 16V34C50 34 40 30 28 34C16 30 6 34 6 34Z" fill="none" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
                      <path d="M28 16V34" stroke="white" strokeWidth="3.5" />
                      <path d="M42 8L46 12L24 34H20V30L42 8Z" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* SDG 9 */}
                <div className="sdg-tile" style={{ background: '#FD6925', borderRadius: '16px', padding: '10px 10px 12px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px', boxShadow: '0 8px 18px rgba(253, 105, 37, 0.25)' }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '0.85', fontFamily: 'Inter, sans-serif' }}>9</span>
                    <span style={{ fontSize: '0.52rem', fontWeight: '800', lineHeight: '1.1', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.2px' }}>
                      INDUSTRY, INNOVATION AND INFRASTRUCTURE
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: '4px' }}>
                    <svg width="52" height="42" viewBox="0 0 52 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 36V22L20 28V36H12Z" fill="white" />
                      <path d="M24 36V14L32 20V36H24Z" fill="white" />
                      <path d="M36 36V6L44 12V36H36Z" fill="white" />
                      <path d="M6 26L22 14L36 6L48 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* SDG 17 */}
                <div className="sdg-tile" style={{ background: '#19486A', borderRadius: '16px', padding: '10px 10px 12px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px', boxShadow: '0 8px 18px rgba(25, 72, 106, 0.25)' }}>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: '900', lineHeight: '0.85', fontFamily: 'Inter, sans-serif' }}>17</span>
                    <span style={{ fontSize: '0.52rem', fontWeight: '800', lineHeight: '1.1', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.2px' }}>
                      PARTNERSHIPS<br />FOR THE GOALS
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: '4px' }}>
                    <svg width="56" height="42" viewBox="0 0 56 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="12" r="7" stroke="white" strokeWidth="3.5" />
                      <circle cx="15" cy="30" r="7" stroke="white" strokeWidth="3.5" />
                      <circle cx="41" cy="30" r="7" stroke="white" strokeWidth="3.5" />
                      <path d="M22 17L18 24M34 17L38 24M22 30H34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="hero-image">
            <Image src="/hero.jpg" alt="Smart Nursing AI" width={600} height={400} priority style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section id="about" className="section container">
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome Message</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              It gives me immense pleasure to welcome all distinguished delegates, eminent speakers, researchers, healthcare professionals, academicians, innovators, and students to the International Conference on Smart Nursing and Healthcare Innovation, centered on the theme: <em>"Smart nursing and healthcare innovation advancing predictive, critical and personalised care through AI, digital technologies and nursing-led multidisciplinary innovation"</em>.
            </p>
            <button className="btn-primary" style={{ marginTop: '2rem' }}>Read More &rarr;</button>
          </div>

          <div style={{ flex: '0 0 300px', textAlign: 'center', background: 'var(--secondary)', padding: '2rem', borderRadius: '20px' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#ccc', margin: '0 auto 1rem' }}></div>
            <h4 style={{ margin: '0' }}>Dr. Geetika Madan Patel</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Vice President, Quality, Research and Health Sciences, Parul University</p>
          </div>
        </div>
      </section>

      {/* About Info Cards */}
      <section className="section container" style={{ paddingTop: '0' }}>
        <div className="info-cards">
          <div className="card">
            <div className="card-icon">🏥</div>
            <h3>About the Conference</h3>
            <p>The International Conference on Smart Nursing and Healthcare Innovation brings together nursing professionals, clinicians, researchers to advance predictive, critical, and personalised healthcare through AI.</p>
            <a href="#about" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'inline-block', marginTop: '1rem' }}>Learn More &rarr;</a>
          </div>

          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>About Parul University</h3>
            <p>A leading multidisciplinary university with NAAC A++ grade, UGC Category-1 status and global recognition, committed to excellence in education, research, innovation and healthcare.</p>
            <a href="#about" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'inline-block', marginTop: '1rem' }}>Learn More &rarr;</a>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section id="themes" className="highlights-banner">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h2>Conference Highlights</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>A unique platform to connect, learn and innovate.</p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="icon">🎤</div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.3rem' }}>Expert Sessions</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Global leaders & renowned speakers</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="icon">🔬</div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.3rem' }}>Research & Innovation</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Cutting-edge research and emerging technologies</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="icon">🤝</div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.3rem' }}>Networking</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Build valuable connections across disciplines</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="icon">🛠️</div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.3rem' }}>Workshops</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Hands-on learning & digital health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="section container" style={{ background: '#f5f8f8', borderRadius: '30px', margin: '4rem auto', padding: '4rem 2rem' }}>
        <div className="section-header">
          <h2>Registration</h2>
          <p>Choose Your Plan</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h4>Student</h4>
            <div className="pricing-price">₹ 4,000</div>
            <ul className="pricing-features">
              <li>Conference Access</li>
              <li>Conference Kit</li>
              <li>E-Certificate</li>
              <li>Workshop Access</li>
            </ul>
            <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Register Now &rarr;</button>
          </div>

          <div className="pricing-card featured">
            <h4>Nursing Professional</h4>
            <div className="pricing-price">₹ 7,000</div>
            <ul className="pricing-features">
              <li>Conference Access</li>
              <li>Conference Kit</li>
              <li>E-Certificate</li>
              <li>Workshop Access</li>
              <li>Networking Dinner</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Register Now &rarr;</button>
          </div>

          <div className="pricing-card">
            <h4>Delegate</h4>
            <div className="pricing-price">₹ 10,000</div>
            <ul className="pricing-features">
              <li>Conference Access</li>
              <li>Conference Kit</li>
              <li>E-Certificate</li>
              <li>Workshop Access</li>
              <li>Networking Dinner</li>
            </ul>
            <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Register Now &rarr;</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: 'white', fontFamily: 'Inter', marginBottom: '1rem' }}>PU - स्वास्थ्य NOVA 2027</h3>
              <p>International Conference on Smart Nursing and Healthcare Innovation.</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>in</span>
                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>ig</span>
                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>yt</span>
                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>x</span>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'white' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                <li><a href="#">About</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Registration</a></li>
              </ul>
            </div>

            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'white' }}>Contact Us</h4>
              <p>Medical Auditorium,<br />Parul University, Vadodara, Gujarat</p>
              <p style={{ marginTop: '1rem' }}>Email: contact@punova2027.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2027 Parul University. All Rights Reserved. Together for Better Healthcare.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
