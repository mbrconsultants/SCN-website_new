import Link from 'next/link';

const TeamGrid = () => {
  return (
    <>
      <section className="team-section bg-transparent">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt=""/></Link></figure> 
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                    <span className="designation">Seller</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-2.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Theresa Webb</Link></h4>
                    <span className="designation">Buyer</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-3.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Darell Steward</Link></h4>
                    <span className="designation">General Manager</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-1.jpg" alt=""/></Link></figure> 
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                    <span className="designation">Seller</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-2.jpg" alt=""/></Link></figure> 
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                    <span className="designation">Seller</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-3.jpg" alt=""/></Link></figure> 
                  </div>
                  <div className="info-box">
                    <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                    <span className="designation">Seller</span>
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamGrid
