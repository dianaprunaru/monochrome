export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <section className="footer-contact">
          <ul>
            <li>call us</li>

            <li>
              <a href="tel:+44 (0)10 2345 6789" title="number">
                CALL US +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:office@monochrome.com" title="email">
                email customer care
              </a>
            </li>

            <li>
              <a href="" title="mobile version">
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <div className="nav-title d-inline-block d-lg-none">
            <h1>How can we help?</h1>
          </div>
          <ul className="footer-nav-blog">
            <li>
              <a href="" title="style and fit advice">
                style and fit
              </a>
            </li>

            <li>
              <a href="" title="faqs">
                faqs
              </a>
            </li>

            <li>
              <a href="" title="delivery">
                delivery
              </a>
            </li>

            <li>
              <a href="" title="exchanges and returns">
                returns
              </a>
            </li>
          </ul>

          <div className="vertical d-block d-lg-none"></div>

          <ul className="footer-nav-info">
            <li>
              <a href="" title="about us">
                about us
              </a>
            </li>

            <li>
              <a href="" title="careers">
                careers
              </a>
            </li>

            <li>
              <a href="" title="affiliates">
                affiliates
              </a>
            </li>

            <li>
              <a href="" title="advertising">
                advertising
              </a>
            </li>
          </ul>

          <div className="terms-privacy container d-flex d-lg-none">
            <a href="/" title="terms">
              terms and conditions
            </a>

            <a href="/" title="privacy">
              privacy and cookies
            </a>
          </div>
        </nav>

        <section className="footer-connect">
          <h1 className="d-block d-lg-none">Lets connect</h1>
          <p className="footer-connect-cta d-block d-lg-none">
            Be the first to receive exclusive offers
          </p>
          <form action="" className="footer-newsletter">
            <label htmlFor="email d-none d-lg-block">
              sign up for our newsletter
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            ></input>
            <input type="submit"></input>
          </form>

          <div className="privacy-policy container d-block d-lg-none">
            <p>
              I agree with{' '}
              <span>
                {' '}
                <a href="/" title="privacy-policy">
                  {' '}
                  Privacy Policy{' '}
                </a>
              </span>{' '}
              and i want to receive emails from Monochrome
            </p>
          </div>

          <div className="footer-social">
            <h1 className="d-block d-lg-none">We are highly likeable</h1>
            <ul>
              <li>
                <a href="" title="youtube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="" title="twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="" title="facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="" title="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
