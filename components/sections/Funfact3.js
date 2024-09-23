import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact3 = () => {
    return (
      <>
        <section className="fun-fact-section-three">
          <div
            className="bg bg-image"
            style={{
              backgroundImage: "url(images/banner/scnbanner-6.JPG)",
            }}></div>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
                <div className="counter-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner">
                    <div className="content">
                      <div className="count-box">
                        <CounterUp
                          count={20}
                          time={3}
                        />
                        +
                      </div>
                      <h6 className="counter-title">Daily Visitors</h6>
                    </div>
                    <div className="icon-box">
                      <i className="icon flaticon-man"></i>
                    </div>
                  </div>
                </div>

                <div
                  className="counter-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="300ms">
                  <div className="inner">
                    <div className="content">
                      <div className="count-box">
                        <CounterUp
                          count={200}
                          time={3}
                        />
                        +
                      </div>
                      <h6 className="counter-title">Weekly Visitors</h6>
                    </div>
                    <div className="icon-box">
                      <i className="icon flaticon-man"></i>
                    </div>
                  </div>
                </div>

                <div
                  className="counter-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="600ms">
                  <div className="inner">
                    <div className="content">
                      <div className="count-box">
                        <CounterUp
                          count={280}
                          time={3}
                        />
                        +
                      </div>
                      <h6 className="counter-title">Monthly Visitors</h6>
                    </div>
                    <div className="icon-box">
                      <i className="icon flaticon-man"></i>
                    </div>
                  </div>
                </div>

                <div
                  className="counter-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="900ms">
                  <div className="inner">
                    <div className="content">
                      <div className="count-box">
                        <CounterUp
                          count={550}
                          time={3}
                        />
                        +
                      </div>
                      <h6 className="counter-title">Yearly Visitors</h6>
                    </div>
                    <div className="icon-box">
                      <i className="icon flaticon-man"></i>
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
export default Funfact3
