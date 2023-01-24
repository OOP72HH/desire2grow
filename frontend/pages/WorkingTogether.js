import Link from 'next/link'
import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown';



const WorkingTogether = (props) => {
 
  return (
   <>
     <section className="p-0 page d-none" id="workingtogether">
    
<div className="container-fluid">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-xl-9 orderF-1 order-lg-0 pt-10 pt-lg-8 pt-xl-7 pt-xxl-8 pb-0 px-lg-0">
      <div className="row flex-center" id="bigpicture">
        <div className="col-11 col-xl-7">
        <div className="position-relative"> <img className="img-fluid rounded-3" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.blogs.data[4].attributes.image.data[0].attributes.url}`} alt="What is coaching" /></div><br /><br />
         
         <p className="text-1000 mb-5 para coaching">
         
         {props.Lang ? <ReactMarkdown>{props.blogs.data[4].attributes.localizations.data[0].attributes.description}</ReactMarkdown>:<ReactMarkdown>{props.blogs.data[4].attributes.description}</ReactMarkdown>}
         
         </p>
 
        </div>
      </div>
      <div className="row min-vh-25 flex-center">
        <div className="col-lg-10">
          <div className="row py-7 justify-content-center">
            <h5 className="mb-4 text-center"><span className="fw-bolder">You can book each coaching session individually or instead directly as a package.</span></h5>
            <div className="col-sm-6 col-xl-4 pt-4 px-md-2">
              <div className="card card-span h-100 bg-white"  style={{borderRadius:'1rem'}}>
             
                <div className="card-body d-flex flex-column justify-content-around px-xl-4 px-xxl-5">
                  <div className="text-center">
                    <h4 className="fs-lg-1 fx-xxl-4 text-800 my-3">Insight</h4><span className="text-gradient-gray fs-1"> Investment:
                      <h2 className="mb-3 fs-lg-2 fs-xxl-4 text-gradient-blue">315 €*</h2></span>
                  </div>
                  <ul className="list-unstyled my-4 ps-5 ps-lg-0 ps-xl-2 ps-xxl-5">
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">free Strategy Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">75 min Discovery Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">2 x 60 min Coaching Sessions</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Email support along the entire coaching period</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Duration: 1-2 months by agreement</span></li>
                  </ul>
                  <div className="text-center">
                    <div className="d-grid button btn btn-klean-outline border-0 t-white"> <a className="" href="https://calendly.com/desire2grow/45-minutes-strategy-session-insight-package" target={"_blank"} ><span className="text-gradient-blue">Interest</span></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4 pt-4 px-md-2">
              <div className="card card-span h-100 bg-pricing-gradient" style={{borderRadius:'1rem'}} >
              
                <div className="card-body d-flex flex-column justify-content-around px-xl-4 px-xxl-5">
                  <div className="text-center">
                    <h4 className="fs-lg-1 fx-xxl-4 text-800 my-3">Growth</h4><span className="text-gradient-gray fs-1"> Investment:
                      <h2 className="mb-3 fs-lg-2 fs-xxl-4 text-gradient-pink-2">600 €*</h2></span>
                  </div>
                  <ul className="list-unstyled my-4 ps-5 ps-lg-0 ps-xl-2 ps-xxl-5">
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">free Strategy Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">75 min Discovery Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">5 x 60 min Coaching Sessions</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Email support along the entire coaching period</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Duration: 3-5 months by agreement</span></li>
                  </ul>
                  <div className="text-center">
                    <div className="d-grid"> <a className="button btn btn-pricing-danger border-0" href="https://calendly.com/desire2grow/45-minutes-strategy-session-growth-package" target={"_blank"}>Interest</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4 pt-4 px-md-2">
              <div className="card card-span h-100 bg-white" style={{borderRadius:'1rem'}}>
                <div className="card-body d-flex flex-column justify-content-around px-xl-4 px-xxl-5">
                  <div className="text-center">
                    <h4 className="fs-lg-1 fx-xxl-4 text-800 my-3">Transformation</h4><span className="text-gradient-gray fs-1"> Investment:
                      <h2 className="mb-3 fs-lg-2 fs-xxl-4 text-gradient-blue">950 €*</h2></span>
                  </div>
                  <ul className="list-unstyled my-4 ps-5 ps-lg-0 ps-xl-2 ps-xxl-5">
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">free Strategy Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">75 min Discovery Session</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">9 x 60 min Coaching Sessions</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Email support along the entire coaching period</span></li>
                    <li className="mb-3"><span className="me-2"><i className="fas fa-check-circle"></i></span><span className="fs-0">Duration: 5-8 months by agreement</span></li>
                  </ul>
                  <div className="text-center">
                    <div className="d-grid"> <a className="button btn btn-klean-outline border-0" href="https://calendly.com/desire2grow/45-minutes-strategy-session-transformation-package" target={"_blank"} ><span className="text-gradient-blue">Interest</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-1000 mb-5"><span className="fs--1">* The prices are for individuals. Different fees apply to companies, which are welcome to be asked. It is possible to pay in rates. Please get in touch with me about this.</span></p>
        </div>
        <div className="col-12">
          <div className="row justify-content-center my-3">
            <div className="col-12 col-lg-10">
              <div className="card bg-soft-danger">
                <div className="card-body py-3">
                  <div className="row">
                    <div className="col-lg-6 text-center text-lg-start">
                      <p className="fs--1 my-2 fw-bold text-gradient-danger-soft">All rights Reserved &copy; Desire2Grow, 2022</p>
                    </div>
                    <div className="col-lg-6 d-lg-flex align-self-center justify-content-end text-center">
                      <p className="fs--1 mb-0 text-gradient-danger-soft">Made with <span className="fas fa-heart mx-1 text-danger"></span>by<Link href="https://d2g.one/"> D2G</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-xl-3 col-12 position-absolute position-lg-relative ps-lg-0">
      <div className="sticky-top py-4 sticky-area" data-sidebar-close="sidebar-close">
        <div className="btn-close-boots-container times">
        <div className='close link'><Link className="" href="/">X</Link></div>
        </div>
        <div className="bg-holder sidebar-rounded" style={{backgroundImage:'url(assets/img/sidebars/F29833.png)'}}>
        {/* style="background-image:url(assets/img/sidebars/F29833.png);" */}
        </div>
        {/* <!--/.bg-holder--> */}

        <div className="position-relative d-lg-flex flex-column justify-content-end align-items-end h-100 px-lg-4 px-xxl-5">
          <h1 className="text-white text-vertical px-5 px-lg-0 opacity-50 fs-xl-3 fs-xxl-4">Working Together</h1>
          <hr className="my-4 w-100 d-none d-lg-block opacity-25" />
          <div className="flex-between-center d-none d-lg-flex w-100 opacity-75 sidebar-nav btn btn-link text-decoration-none px-1 t-white m-18" data-sidebar-link="page-link"><Link className="" href={"/HowICoach"}>HowICoach</Link><Link className="" href={"/ThatsMe"}>ThatsMe</Link></div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end of .container--> */}

</section>
   </>
  )
}

export async function getServerSideProps(context) {
  let headers = {Authorization: `Bearer ${process.env.ADMIN_TOKEN}`}
  let a = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/desire2grows?populate=*", {headers:headers})
  let blogs = await a.json() 
  return {
    props: {blogs: blogs},
  }
}

export default WorkingTogether