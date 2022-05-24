export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <div className="header-top-inner container mt-30 mt-lg-0">
          <div className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a href="" title="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="" title="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="" title="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="" title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789" title="Call us">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <div className="header-search d-none d-lg-block">
              <form action="">
                <button type="submit" className="searchsubmit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <label htmlFor="search-bar"></label>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                  value=""
                  name="search-bar"
                ></input>
              </form>
            </div>

            <div className="header-search-controls py-lg-0 d-flex">
              <h1 className="d-block d-lg-none">Monochrome</h1>
              <ul>
                <li>
                  <a href="" title="User">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Favorites">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Cart">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="header-primary">
        <div className="navbar container d-flex d-lg-none">
          <a href="#" className="toggler-menu">
            <i className="fa-solid fa-bars"></i>
          </a>

          <form action="" className="mobile-search-form">
            <label htmlFor="mobile-search-bar"></label>
            <input
              type="text"
              className="mobile-search-bar"
              placeholder="search"
              value=""
              name="mobile-search-bar"
            ></input>
            <button type="submit" className="mobile-search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav container d-none d-lg-block d-flex">
          <ul>
            <li>
              <a href="" title="New Arrivals">
                New Arrivals
              </a>
            </li>

            <li>
              <a href="" title="Brands">
                Brands
              </a>
            </li>

            <li>
              <a href="" title="Mens">
                Mens
              </a>
            </li>

            <li>
              <a href="" title="Womens">
                Womens
              </a>
            </li>

            <li>
              <a href="" title="Accessories">
                Accessories
              </a>
            </li>

            <li>
              <a href="" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
