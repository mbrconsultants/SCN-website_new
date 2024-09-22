import Link from 'next/link';
import { useState } from "react";
import ReactSlider from 'react-slider';

const ShopSidebar = () => {

  return (
    <>

    {/* Featured Products  */}
    <section className="featured-products pt-0 pb-0">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="shop-sidebar">
              <div className="sidebar-search">
                <form action="shop-products" method="post" className="search-form">
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search..." required=""/>
                    <button><i className="lnr lnr-icon-search"></i></button>
                  </div>
                </form>
              </div>
              <div className="sidebar-widget category-widget">
                <div className="widget-title">
                  <h5 className="widget-title">Categories</h5>
                </div>
                <div className="widget-content">
                  <ul className="category-list clearfix">
                    <li><Link href="shop-product-details">CBD Oil</Link></li>
                    <li><Link href="shop-product-details">Plant</Link></li>
                    <li><Link href="shop-product-details">Medicine</Link></li>
                    <li><Link href="shop-product-details">Marijuana</Link></li>
                    <li><Link href="shop-product-details">Cannabis</Link></li>
                    <li><Link href="shop-product-details">Organic</Link></li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget price-filters">
                <div className="widget-title">
                  <h5 className="widget-title">Filter by Price</h5>
                </div>
                <div className="range-slider clearfix">
                  <div className="mt-40 clearfix">
                    <ReactSlider
                      className="horizontal-slider mb50 mt20"
                      thumbClassName="example-thumb"
                      trackClassName="example-track"
                      defaultValue={[0, 45, 100]}
                      ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                      ariaValuetext={state => `Thumb value ${state.valueNow}`}
                      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                      pearling
                      minDistance={1}
                    />
                    <input className="mt-40" type="submit" defaultValue="Filter"/>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget post-widget">
                <div className="widget-title">
                  <h5 className="widget-title">Popular Products</h5>
                </div>
                <div className="post-inner">
                  <div className="post">
                    <figure className="post-thumb"><Link href="shop-details"><img src="/images/resource/products/thumb-1.jpg" alt=""/></Link></figure>
                    <Link href="shop-product-details">CBD Oil Bottle</Link>
                    <span className="price">$45.00</span>
                  </div>
                  <div className="post">
                    <figure className="post-thumb"><Link href="shop-details"><img src="/images/resource/products/thumb-2.jpg" alt=""/></Link></figure>
                    <Link href="shop-product-details">Tablets Pack</Link>
                    <span className="price">$34.00</span>
                  </div>
                  <div className="post">
                    <figure className="post-thumb"><Link href="shop-details"><img src="/images/resource/products/thumb-3.jpg" alt=""/></Link></figure>
                    <Link href="shop-product-details">CBD Products</Link>
                    <span className="price">$29.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 content-side mt-md-60">
            {/* MixitUp Galery */}
            <div className="mixitup-gallery">

              <div className="filter-list row">
                {/* Product Block */}
                <div className="product-block mb-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/1.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Tablets Pack</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/2.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">CBD Oil Bottle</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/3.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Fredddy Fuego</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/4.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Healthy Tab</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/1.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Tablets Pack</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-sm-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/3.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Fredddy Fuego</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block mb-sm-50 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/2.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">CBD Oil Bottle</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>

                {/* Product Block */}
                <div className="product-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image"><Link href="shop-product-details"><img src="images/resource/products/4.jpg" alt="" /></Link></div>
                      <div className="icon-box">
                        <Link href="shop-product-details" className="ui-btn"><i className="fa fa-eye"></i></Link>
                        <Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                      <h4><Link href="shop-product-details">Healthy Tab</Link></h4>
                      <span className="price">$23.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Featured Products  */}

    </>
  );
};
export default ShopSidebar
