import Link from 'next/link';

const NewsList = () => {
  return (
    <>
    <section className="news-section-three bg-transparent pb-90">
      <div className="auto-container">
        <div className="row">
          <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news3-1.jpg" alt="Image"/></Link></figure>
                <div className="post-date">
                  <h6 className="date">30 <br/> May</h6>
                </div>
              </div>
              <div className="content-box">
                <ul className="post-meta">
                  <li><i className="icon fa fa-user"></i> By admin</li>
                  <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                </ul>
                <div className="title-box">
                  <h4 className="title"><Link href="news-details">Redefining the skyline</Link></h4>
                </div>
                <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                <div className="btn-box">
                  <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>

  {/* News Section */}
      
    </>
  );
};
export default NewsList;
