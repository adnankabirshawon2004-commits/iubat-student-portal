import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <div className="brand-logo">I</div>

            <div>
              <div className="brand-title">IUBAT Student Portal</div>
              <div className="brand-subtitle">
                Student Services & Resources
              </div>
            </div>
          </Link>

          <Link href="/notices" className="header-button">
            Notice Board
          </Link>
        </div>
      </header>

      {/* Notice ticker */}
      <div className="notice-ticker">
        <div className="ticker-label">📢 NOTICE</div>

        <div className="ticker-area">
          <div className="ticker-text">
            Welcome to IUBAT Student Portal • Important university notices
            will appear here • Stay updated with the latest announcements
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero container">
        <div className="hero-badge">
          IUBAT • STUDENT PLATFORM
        </div>

        <h1>
          Everything students need,
          <span> in one place.</span>
        </h1>

        <p>
          Access university notices and create professional assignment
          and lab report cover pages quickly and easily.
        </p>
      </section>

      {/* Services */}
      <section className="services container">
        <Link href="/notices" className="service-card">
          <div className="service-icon blue">📢</div>

          <div>
            <h2>Notice Board</h2>

            <p>
              View the latest university announcements, notices,
              schedules and important updates.
            </p>

            <div className="service-link">
              View Notices →
            </div>
          </div>
        </Link>

        <Link href="/cover-maker" className="service-card">
          <div className="service-icon purple">📄</div>

          <div>
            <h2>Cover Page Maker</h2>

            <p>
              Create assignment and lab report cover pages with
              normal or engineering CO/PO formats.
            </p>

            <div className="service-link purple-text">
              Create Cover Page →
            </div>
          </div>
        </Link>
      </section>

      {/* Quick info */}
      <section className="container info-section">
        <div className="info-box">
          <div className="info-icon">🎓</div>

          <div>
            <h3>Built for IUBAT Students</h3>
            <p>
              A simple platform for accessing important information
              and creating academic documents.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>IUBAT Student Portal</p>
          <span>Student Services & Academic Tools</span>
        </div>
      </footer>
    </main>
  );
}
