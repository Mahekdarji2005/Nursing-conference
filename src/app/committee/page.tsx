import Image from 'next/image';

export default function CommitteePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
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
          <a href="/#about">About</a>
          <a href="/committee" style={{ color: 'var(--primary-light)', fontWeight: '700' }}>Conference Committee</a>
          <a href="/#themes">Themes</a>
          <a href="/#speakers">Speakers</a>
          <a href="/#call-for-papers">Call for Papers</a>
          <a href="/#registration">Registration</a>
          <a href="/#venue">Venue</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Register Now &rarr;</button>
        </div>
      </header>

      {/* Conference Committee Section */}
      <section className="section container" style={{ background: '#f8fcfc', borderRadius: '32px', padding: '4rem 2rem', margin: '3rem auto', border: '1px solid rgba(16,102,102,0.1)' }}>
        <div className="section-header">
          <h2>Conference Committee</h2>
          <p style={{ color: 'var(--text-muted)' }}>Meet the distinguished leadership and committee driving excellence and innovation.</p>
        </div>

        {/* Chief Patron */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Chief Patron
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card" style={{ textAlign: 'center', maxWidth: '340px', width: '100%', padding: '2.5rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/devanshusir.png" alt="Dr. Devanshu Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                CHIEF PATRON
              </span>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-dark)', marginBottom: '0.3rem', fontFamily: 'Playfair Display, serif' }}>Dr. Devanshu Patel</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '0.6rem', fontWeight: '500' }}>President</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>
          </div>
        </div>

        {/* Patrons */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Patrons
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Patron 1 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/parulmam.jpg" alt="Dr. Parul Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Dr. Parul Patel</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.8rem', lineHeight: '1.4', minHeight: '48px' }}>
                Vice President (Student Affairs & General Administration) and Chair Admissions Committee
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>

            {/* Patron 2 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/geetikamam.jpg" alt="Dr. Geetika Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Dr. Geetika Patel</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.8rem', lineHeight: '1.4', minHeight: '48px' }}>
                Vice President (Quality, Research & Health Sciences) and Medical Director
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>

            {/* Patron 3 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/komalmam.jpg" alt="Dr. Komal Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Dr. Komal Patel</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.8rem', lineHeight: '1.4', minHeight: '48px' }}>
                Vice President (Medical & Paramedical Health Sciences) & Medical Director
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>
          </div>
        </div>

        {/* Co-Patrons */}
        <div>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Co-Patrons
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Co-Patron 1 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/Prof.-Dr.-K.N.-Madhusoodanan.png" alt="Dr. K. N. Madhusoodanan" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)', transformOrigin: 'center' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                CO-PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Dr. K. N. Madhusoodanan</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Provost</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>

            {/* Co-Patron 2 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/Dr.-Kunjal-Sinha.jpg" alt="Dr. Kunjal Sinha" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)', transformOrigin: 'center' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                CO-PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Dr. Kunjal Sinha</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Pro Vice-Chancellor</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>

            {/* Co-Patron 3 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 12px 32px rgba(15, 61, 62, 0.08)', border: '1px solid rgba(16, 102, 102, 0.1)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.2rem', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: '0 8px 20px rgba(16, 102, 102, 0.2)' }}>
                <img src="https://pisw-conference.vercel.app/assets/Prof.%20Manish%20Pandya.jpg" alt="Prof. Manish Pandya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: 'var(--primary-dark)', color: 'white', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.8rem' }}>
                CO-PATRON
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>Prof. Manish Pandya</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Registrar</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', margin: '0' }}>
                🏛️ Parul University
              </p>
            </div>
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
                <li><a href="/#about">About</a></li>
                <li><a href="/committee">Conference Committee</a></li>
                <li><a href="/#themes">Themes</a></li>
                <li><a href="/#speakers">Speakers</a></li>
                <li><a href="/#registration">Registration</a></li>
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
