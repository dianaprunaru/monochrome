import ProductTile from './catalog/product-tile';

export default function Main() {
  return (
    <main className="content">
      <section className="content-header">
        <div className="banner-main d-block d-lg-none">
          <div className="banner-main-inner container">
            <a href="" title="new-in" className="button ">
              new in
            </a>
          </div>
        </div>
      </section>

      <section className="content-main">
        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1 className="d-block d-lg-none">Spring collection</h1>
            <h1 className="d-none d-lg-block">New Stuff</h1>
          </header>
          <section className="product-tiles">
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
          </section>
        </section>

        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1 className="d-block d-lg-none">Best reviewed</h1>
            <h1 className="d-none d-lg-block">Most loved</h1>
          </header>
          <section className="product-tiles">
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
          </section>
        </section>

        <section className="home-content container">
          <div className="home-content-image d-block d-lg-none">
            <img src="/images/mobile_home_content_image.png" alt="" />
          </div>

          <div className="home-content-image-lg d-none d-lg-block">
            <img src="/images/oliver-pecker-HONJP8DyiSM-unsplash.png" alt="" />
          </div>
          <div className="home-content-description">
            <h1>Watches for entrepreneurs</h1>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>

            <p className="d-none d-lg-block">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because.
            </p>
          </div>
        </section>

        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1>MENS</h1>
          </header>
          <section className="product-tiles">
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
          </section>

          <button className="button btn d-none d-lg-inline-block">
            view all
          </button>
        </section>

        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1>WOMENS</h1>
          </header>

          <section className="product-tiles">
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
            <div className="col d-none d-lg-block">
              <ProductTile></ProductTile>
            </div>
          </section>

          <button className="button btn d-none d-lg-inline-block">
            view all
          </button>
        </section>
      </section>
    </main>
  );
}
