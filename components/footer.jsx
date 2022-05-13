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
          <ul>
            <li>
              <a href="" title="style and fit advice">
                style and fit advice
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
                exchanges and returns
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer-nav">
          <ul>
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
        </nav>

        <section className="footer-connect">
          <form action="" className="footer-newsletter">
            <label htmlFor="email">sign up for our newsletter</label>
            <input type="email" name="email" id="email"></input>
            <input type="submit" value="Submit"></input>
          </form>

          <div className="footer-social">
            <ul>
              <li>
                <a href="" title="youtube">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="" title="twitter">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="" title="facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="" title="instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
