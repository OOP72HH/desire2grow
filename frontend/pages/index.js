import '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import Link from 'next/link';
Link





export default function Home(props) {


  
  

    return (
    <>


     {/* <div className="preloader" id="preloader">
        <div className="loader"><span> </span><span></span><span></span><span></span><span> </span></div>
      </div> */}
      {/* <p>{props.blogs.data[0].attributes.card}</p> */}
      {/* <!-- ============================================-->
      <!-- End of Preloader ===========================--> */}
     
    
      <div className="offcanvas offcanvas-start home-content show" id="offcanvasStart" tabindex="-1" data-bs-backdrop="false" data-bs-scroll="true" data-base-content="home">
        <div className="offcanvas-body d-flex flex-column flex-center h-sm-25vh h-lg-50vh">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-9 col-lg-10 col-xxl-12 text-center"><img className="img-fluid px-6 px-xl-6 px-xxl-0 w-lg-100 w-sm-75" src="assets/img/D2G_Logo.png" alt=""/><br/>
          

      {props.Lang ? <ReactMarkdown>{props.blogs.data[0].attributes.cards[1].cards}</ReactMarkdown>:<ReactMarkdown>{props.blogs.data[0].attributes.cards[0].cards}</ReactMarkdown>}
         
              <mt-lg-4><a  className="btn hover-top btn-boots-warning" href="https://calendly.com/desire2grow/45-minutes-strategy-session-general-interest" target={"_blank"}>Meet me</a > </mt-lg-4>
              <p className="d-none d-lg-block my-6 text-200">
              <div className="text-center d-none d-lg-block mb-5 mb-lg-6">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item mx-2"><Link    href="https://www.facebook.com/ClaudiaWeissCoaching" target="_blank"><img src="assets/img/icons/facebook.png" alt="Facebook"/></Link > </li>
                  <li className="list-inline-item mx-2"><Link    href="https://www.linkedin.com/in/coachclaudia" target="_blank"><img src="assets/img/icons/linkdin.png" alt="LinkedIn"/></Link > </li>
                </ul>
        
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end home-nav px-0 show" id="offcanvasEnd" tabindex="-1" data-bs-backdrop="false" data-bs-scroll="true" data-base-content="nav">
        <div className="offcanvas-body p-0 position-lg-fixed position-relative">
        <div className="row vh-lg-100 g-0">
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-blue-soft"><img className="nav-img" src="assets/img/navigation/F2AB39.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/Coaching'}>What is coaching?</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-purple-soft"><img className="nav-img" src="assets/img/navigation/8E1E35.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  class=""  href={'/IsCoachingRight'}>Is coaching the right?</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-cyan-dark"><img className="nav-img" src="assets/img/navigation/253F58.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/MyClients'}>My clients</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-indigo-soft"><img className="nav-img" src="assets/img/navigation/5C9083.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/HowICoach'}>How I coach</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-blue-dark"><img className="nav-img" src="assets/img/navigation/F29833.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/WorkingTogether'}>Working together</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-purple-dark"><img className="nav-img" src="assets/img/navigation/75192B.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/ThatsMe'}>That's me</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-cyan-soft"><img className="nav-img" src="assets/img/navigation/1F354A.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/Connect'}>Connect</Link ></div>
            </div>
            <div className="col-6 col-sm-3 vh-25 vh-lg-50 position-relative text-white nav-hover-zoom nav-indigo-dark"><img className="nav-img" src="assets/img/navigation/4B756B.png" alt="..." />
              <div className="card-img-overlay d-flex flex-column flex-center align-items-xxl-center justify-content-xxl-center h-100 px-xxl-5 pb-4 link"><Link  className="text-light fs-0 fs-xl-1 fs-xxl-2 stretched-link items fw-bold text-decoration-none" href={'/Blog'}>Blog</Link ></div>
            </div>
          </div>
        </div>
      </div>

  
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
