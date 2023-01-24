import Link from 'next/link'
import React,{useState} from 'react';
import ReactMarkdown from 'react-markdown';


const MyClients = (props) => {

  
  return (
    <>
      <section className="page p-0 d-none" id="myclients">
      
<div className="container-fluid">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-xl-9 order-1 order-lg-0 pt-10 pt-lg-8 pt-xl-7 pt-xxl-8 pb-0 px-lg-0">
      <div className="row flex-center" id="bigpicture">
        <div className="col-11 col-xl-7">
        <div className="position-relative"> <img className="img-fluid rounded-3" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.blogs.data[2].attributes.image.data[0].attributes.url}`} alt="What is coaching" /></div><br /><br />
         
         <p className="text-1000 mb-5 para coaching">
         
         {props.Lang ? <ReactMarkdown>{props.blogs.data[2].attributes.localizations.data[0].attributes.description}</ReactMarkdown>:<ReactMarkdown>{props.blogs.data[2].attributes.description}</ReactMarkdown>}
         
         </p>
         <p class="text-center btn hover-top btn-boots-warning t-white "><Link  class="" href="/WorkingTogether">Find out how</Link ></p>
        
          <h3 className="mb-3 fw-bolder">What my coachees are saying</h3>
          <div className="card bg-backdrop">
            <div className="card-body p-2 px-lg-2 px-xl-5">
              <div className="py-5 text-center">
                <div className="row flex-center text-center">
                  <div className="position-relative">
                    <div className="swiper-container theme-slider position-static" data-swiper='{"autoplay":{"delay":6000},"loop":true,"effect":"slide"}'>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <h3 className="font-base fw-light text-black fst-italic fs-0 fs-sm-1 mb-3"><br /><br /><br />"The coaching sessions with Claudia are highly professional and efficient. With each session I have taken a step forward in my personal development. Since then I have more clarity about my own values and can pursue my goals even better."</h3>
                          <h6 className="fs-0 mb-0 text-black fw-black">Miriam S.</h6>
                          <h6 className="fs-0 mb-0 fw-normal text-400">Managing Director, Hamburg, 39</h6>
                        </div>
                        <div className="swiper-slide">
                          <h3 className="font-base fw-light text-black fst-italic fs-0 fs-sm-1 mb-3">"My coaching with Claudia encouraged me to keep working on myself and my fears. She inspired me to see myself less harshly and acknowledge my self-worth more. We listed my values and named the beliefs that negatively affect me. Letting go of these and transforming them is a long journey, but Claudia showed me the way and helped me take further steps. She is an emphatic coach who is not deterred by human imperfection. She did not judge but encouraged and supported me. Our conversations were at eye level, characterized by openness, mutuality, knowledge, and the necessary humor. Thank you, Claudia."</h3>
                          <h6 className="fs-0 mb-0 text-black fw-black">Zsuzsa E.</h6>
                          <h6 className="fs-0 mb-0 fw-normal text-400">Nutritionis & Pensioner, Berlin</h6>
                        </div>
                        <div className="swiper-slide">
                          <h3 className="font-base fw-light text-black fst-italic fs-0 fs-sm-1 mb-3"><br /><br />"I came to Claudia looking for an answer to balancing family and career, and I came away with concrete actions and so much more. Through active listening, Claudia created a space where I was comfortable in addressing the underlying disruptions in my life. I gained a deeper awareness of my own formation as a person and how I can continue to create a life that inspires me."</h3>
                          <h6 className="fs-0 mb-0 text-black fw-black">Christin K.</h6>
                          <h6 className="fs-0 mb-0 fw-normal text-400">Strategic Advisor, Singapore</h6>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next me-md-5"></div>
                        <div className="swiper-button-prev ms-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-4 btn hover-top btn-boots-warning t-white"><Link  className="" href="https://calendly.com/desire2grow/45-minutes-strategy-session-general-interest" target={"_blank"}>Schedule your complimentary Strategy Session</Link ></p><br /><br /><br /><br />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col-12 col-lg-10">
          <div className="card bg-soft-blue">
            <div className="card-body py-3">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-start">
                  <p className="fs--1 my-2 fw-bold text-gradient-blue-soft">All rights Reserved &copy; Desire2Grow, 2022</p>
                </div>
                <div className="col-lg-6 d-lg-flex align-self-center justify-content-end text-center">
                  <p className="fs--1 mb-0 text-gradient-blue-soft">Made with <span className="fas fa-heart mx-1 text-primary"></span>by<Link  href="https://d2g.one/"> D2G</Link ></p>
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
        <div className="bg-holder sidebar-rounded" style={{backgroundImage:'url(assets/img/sidebars/253F58.png)'}}>
       
        </div>
        {/* <!--/.bg-holder--> */}

        <div className="position-relative d-lg-flex flex-column justify-content-end align-items-end h-100 px-lg-4 px-xxl-5">
          <h1 className="text-white text-vertical px-5 px-lg-0 opacity-50 fs-xl-3 fs-xxl-4">My clients</h1>
          <hr className="my-4 w-100 d-none d-lg-block opacity-25" />
          <div className="flex-between-center d-none d-lg-flex w-100 opacity-75 sidebar-nav btn btn-link text-decoration-none px-1 m-18 t-white" data-sidebar-link="page-link"><Link  className="" href={"/IsCoachingRight"}>IsCoachingRight</Link ><Link  className="" href={"/HowICoach"}>HowICoach</Link ></div>
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

export default MyClients    