export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a href="" title="Monochrome">
            <img
              src="/images/Recently Viewed Thumbnail 2-2.png"
              alt="Monochrome watch"
            ></img>
          </a>
        </div>

        <div className="product-tile-controls">
          <i className="fa-solid fa-heart"></i>
        </div>

        <div className="product-tile-heading">
          <h2>Monochrome</h2>
        </div>
      </header>
      <div className="product-tile-pricing">
        <p>$ 425</p>
      </div>
    </article>
  );
}
