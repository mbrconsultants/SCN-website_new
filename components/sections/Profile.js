import React from 'react';
import Link from "next/link";
import BlogRecentSection from './RecentNews';

const Profile = () => {
    return (
      <>
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img">
                    <img
                      src="images/resource/justices/cjn.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title">
                      Hon. Mr. Justice Kudirat Motonmori Olatokunbo Kekere-Ekun
                      CFR
                    </h3>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">
                      Mauris non dignissim purus, ac commodo diam. Donec sit
                      amet lacinia nulla. Aliquam quis purus in justo pulvinar
                      tempor. Aliquam tellus nulla, sollicitudin at euismod nec,
                      feugiat at nisi. Quisque vitae odio nec lacus interdum
                      tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae
                      est aliquet pellentesque vitae et nunc. Sed vitae leo
                      vitae nisl pellentesque semper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <BlogRecentSection />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Profile;
