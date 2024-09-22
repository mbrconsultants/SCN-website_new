import Link from "next/link";
const ProjectGrid = () => {
	return (
	<>
		<section className="project-section-three">
			<div className="auto-container">
				<div className="row">
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-1.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-2.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-3.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-4.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-1.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				<div className="col-lg-4 project-block-three">
					<div className="inner-box">
					<div className="image-box">
						<figure className="image"><img src="images/resource/project3-2.jpg" alt="Image"/></figure>
					</div>
					<div className="info-box">
						<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
						<h5 className="text">Business Growth</h5>
						<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
					</div>
					</div>
				</div>
				</div>
			</div>
		</section>
	</>
	);
};
export default ProjectGrid