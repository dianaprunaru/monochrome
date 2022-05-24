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
          <section className="product-tiles row">
            <div className="col-2 col-lg-4">
              <ProductTile></ProductTile>
            </div>

            <div className="col-2 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="col-2 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="col-2 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
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
          <section className="product-tiles row col-2 col-lg-4">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
        </section>

        <section className="home-content container">
          poza si text cu float
        </section>

        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1>Mens</h1>
          </header>
          <section className="product-tiles row col-2 col-lg-4">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
        </section>

        <section className="home-catalog-preview container">
          <hr />
          <header>
            <h1>Womens</h1>
          </header>

          <section className="product-tiles row col-2 col-lg-4">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
        </section>
      </section>
    </main>
  );
}
