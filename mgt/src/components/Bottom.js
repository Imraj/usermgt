import { React } from 'react'
import { Link } from 'react-router-dom'

function Bottom(){
    return(
        <section>
			<div class="container">
				<div class="row">
					<div class="col-sm-3 col-lg-3">
						<div class="widget">
							<h4>Popular Courses</h4>
							<ul class="link-list">
								<li><Link to="/providers">Providers</Link></li>
								<li><Link to="/institutions">Institutions</Link></li>
								<li><Link to="#">Languages</Link></li>
								<li><Link to="">View more...</Link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3 col-lg-3">
						<div class="widget">
							<h4>Top Providers</h4>
							<ul class="link-list">
								<li><Link to="/provider/Udacity">Udacity</Link></li>
								<li><Link to="/provider/edX">edX</Link></li>
								<li><Link to="/provider/Cousera">Cousera</Link></li>
								<li><Link to="/provider/FutureLearn">FutureLearn</Link></li>
								<li><Link to="/providers">View more...</Link></li>
							</ul>
						</div>

					</div>
					<div class="col-sm-3 col-lg-3">
						<div class="widget">
							<h4>Top Institution</h4>
							<ul class="link-list">
								<li><Link to="/institution/Stanford">Stanford</Link></li>
								<li><Link to="/institution/Harvard">Harvard</Link></li>
								<li><Link to="/institution/mitx">MIT</Link></li>
								<li><Link to="/institution/Google">Google</Link></li>
								<li><Link to="/institutions">View more...</Link></li>
							</ul>
						</div>

					</div>
					<div class="col-sm-3 col-lg-3">
						<div class="widget">
							<h4>Newsletter</h4>
							<div>
								<form>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Email Address" />
									</div>
									<div class="form-group">
										<input type="submit" value="Subscribe" class="btn btn-primary" />
									</div>
								</form>
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>

    )
}

export default Bottom;