import Link from 'next/link'
import React,{useState,useContext} from 'react'
import ReactMarkdown from 'react-markdown';




const ThatsMe = (props) => {


  return (
   <>
      <section className="p-0 page d-none" id="thatsme">
      
<div className="container-fluid">

  <div className="row justify-content-center">
    <div className="col-lg-8 col-xl-9 order-1 order-lg-0 pt-10 pt-lg-8 pt-xl-7 pt-xxl-8 pb-0 px-lg-0">
      <div className="row flex-center" id="bigpicture">
        <div className="col-11 col-xl-7">
        <div className="position-relative"> <img className="img-fluid rounded-3" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.blogs.data[5].attributes.image.data[0].attributes.url}`} alt="What is coaching" /></div><br /><br />
         
         <p className="text-1000 mb-5 para coaching">
         
         {props.Lang ? <ReactMarkdown>{props.blogs.data[5].attributes.localizations.data[0].attributes.description}</ReactMarkdown>:<ReactMarkdown>{props.blogs.data[5].attributes.description}</ReactMarkdown>}
         
         </p>
 
          <p className="text-center btn hover-top btn-boots-warning t-white"><Link className="" href="/Connect">Connect</Link></p>
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
                  <p className="fs--1 mb-0 text-gradient-blue-soft">Made with <span className="fas fa-heart mx-1 text-primary"></span>by<Link href="https://d2g.one/"> D2G</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-xl-3 position-absolute position-lg-relative ps-lg-0">
      <div className="sticky-top py-4 sticky-area" data-sidebar-close="sidebar-close">
        <div className="btn-close-boots-container times">
        <div className='close link'><Link className="" href="/">X</Link></div>
        </div>
        <div className="bg-holder sidebar-rounded" style={{backgroundImage:'url(assets/img/sidebars/75192B.png)'}}>
       
        </div>
        {/* <!--/.bg-holder--> */}

        <div className="position-relative d-lg-flex flex-column justify-content-end align-items-end h-100 px-lg-4 px-xxl-5">
          <h1 className="text-white text-vertical px-5 px-lg-0 opacity-50 fs-xl-3 fs-xxl-4">That's me</h1>
          <hr className="my-4 w-100 d-none d-lg-block opacity-25" />
          <div className="flex-between-center d-none d-lg-flex w-100 opacity-75 sidebar-nav btn btn-link text-decoration-none px-1 m-18 t-white m-18" data-sidebar-link="page-link"><Link className="" href={"/WorkingTogether"}>WorkingTogether</Link><Link className="" href={"/Connect"}>Connect</Link></div>
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

export default ThatsMe