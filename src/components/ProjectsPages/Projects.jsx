import React from 'react';
import { Link } from 'react-router-dom';
// Importing the image files
function Projects() {
    return (
        <section class="project-section">
			<div class="large-container">
				<div class="row">
					<div class="project-block col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
						<div class="inner-box">
							<div class="image-box">
								<figure class="image"><Link to={ProjectImage1} class="lightbox-image">
	                            <img src={ProjectImage1} alt="" /></Link></figure>
								<Link to="/projects-details" class="icon"><i class="fa fa-plus"></i></Link>
							</div>
							<div class="content-box">
								<span class="sub-title">Logistics</span>
								<h4 class="title"><Link to="/projects-details">Special transport</Link></h4>
							</div>
						</div>
					</div>

					<div class="project-block col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
						<div class="inner-box">
							<div class="image-box">
								<figure class="image"><Link to={ProjectImage2} class="lightbox-image">
	                            <img src={ProjectImage2} alt="" /></Link></figure>
								<Link to="/projects-details" class="icon"><i class="fa fa-plus"></i></Link>
							</div>
							<div class="content-box">
								<span class="sub-title">Cargo</span>
								<h4 class="title"><Link to="/projects-details">Special transport</Link></h4>
							</div>
						</div>
					</div>

					<div class="project-block col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
						<div class="inner-box">
							<div class="image-box">
								<figure class="image"><Link to={ProjectImage3} class="lightbox-image">
	                            <img src={ProjectImage3} alt="" /></Link></figure>
								<Link to="/projects-details" class="icon"><i class="fa fa-plus"></i></Link>
							</div>
							<div class="content-box">
								<span class="sub-title">Logistics</span>
								<h4 class="title"><Link to="/projects-details">Special transport</Link></h4>
							</div>
						</div>
					</div>

					<div class="project-block col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
						<div class="inner-box">
							<div class="image-box">
								<figure class="image"><Link to={ProjectImage4} class="lightbox-image">
	                            <img src={ProjectImage4} alt="" /></Link></figure>
								<Link to="/projects-details" class="icon"><i class="fa fa-plus"></i></Link>
							</div>
							<div class="content-box">
								<span class="sub-title">Logistics</span>
								<h4 class="title"><Link to="/projects-details">Special transport</Link></h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Projects;