import Link from 'next/link';
import React,{useState} from 'react';
import ReactMarkdown from 'react-markdown';


const Blog = (props) => {
  
  const [modal,setModal] = useState(false);
  const [data,setData] = useState([])
 
 


  const getData =(id,slug,title,description,Ltitle,Ldescription)=>{
    const tempData = [id,slug,title,description,Ltitle,Ldescription];
    
    // console.log(tempData);
    setData(tempData);
    setModal(true);
  }
  
  // console.log(data);

  let modalStyle= {
    display:"block"
  }

  let Close ={
    display: "flex",
    width: "10%"
  }





  return (
    <>

     <section className="p-0 page d-none" id="blogs">
    
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-8 col-xl-9 order-1 order-lg-0 pt-10 pt-lg-7 pt-xxl-8 pb-0">
      <div className="row flex-center">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-5 mb-lg-6">
            <h2 className="mt-4 mt-lg-0"><span className="fw-medium">Inspirational thoughts</span></h2>
          </div>
          <div className="row justify-content-center g-3 py-3">
          {props.blogs.data.map((item)=>{
          //  console.log(props.blogs.data);
        return (
          <div className="col-sm-6 col-xl-5" key={item.id}>
          <div className="card h-100">
            <img className="blog-img" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.image.data[0].attributes.formats.thumbnail.url}`} width={300} height={234}  alt="blog" />
            {/* <img className='blog-img' src="assets/img/blogs/blog-1.png" alt="blog" /> */}
             <div className="card-img-overlay card-overlay-1">
             {/*  */}
              <h4 className="fs-lg-0 fs-xxl-1 text-white">{props.Lang ? <ReactMarkdown>{item.attributes.localizations.data[0].attributes.title}</ReactMarkdown>:<ReactMarkdown>{item.attributes.title}</ReactMarkdown>}
         </h4><a className="btn btn-link px-0" href="#" onClick={()=>getData(item.id,`/blog/${item.attributes.slug}`,item.attributes.title,item.attributes.description,item.attributes.localizations.data[0].attributes.title,item.attributes.localizations.data[0].attributes.description)}>Read<i className="fas fa-arrow-right ms-2"></i></a></div>
            </div>
          </div>
             )
             
            })}
            
          </div>
          <p><br /><br /></p>
          <p className="text-center btn hover-top btn-boots-warning t-white mb-4"><Link className="" href="/Connect">Connect</Link></p>
        </div>
      </div>
    </div>


  {
    modal === true ?   <div className="modal show fade" id={data[0]} style={modalStyle}>
     
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="d-flex justify-content-end border-bottom-0 py-5 px-5">
          <button className="btn-close position-fixed z-index-1" type="button" style={Close} onClick={()=>setModal(false)} ></button>
        </div>
      
        <section className="pt-7">

          <div className="">
            <div className="row justify-content-center pb-5">
              <div className="col-lg-8 col-xl-7">
                
                <div className="modal-body">
              
                    <h2 className="text-start bTitle"> {props.Lang ? <ReactMarkdown>{data[4]}</ReactMarkdown>:<ReactMarkdown>{data[2]}</ReactMarkdown>}
         </h2>
                  {/* <img className="img-fluid" src={} alt="..." /> */}
                  <div className="row my-5">
                    <p className='blogDetail'>
                    {props.Lang ? <ReactMarkdown>{data[5]}</ReactMarkdown>:<ReactMarkdown>{data[3]}</ReactMarkdown>}
         
                    
                       </p>
                   
                  </div>
                  
              </div>
              </div>
            </div>
          </div>
         

        </section>
  

      </div>
    </div>
  </div> : ""
  }

  
    <div className="col-lg-4 col-xl-3 col-12 position-absolute position-lg-relative ps-lg-0">
      <div className="sticky-top py-4 sticky-area" data-sidebar-close="sidebar-close">
        <div className="btn-close-boots-container times">
    
        <div className='close link'><Link className="" href="/">X</Link></div>
        </div>
        
        <div className="bg-holder sidebar-rounded" style={{backgroundImage:'url(assets/img/sidebars/blogs.png)'}}>
        </div>
        

        <div className="position-relative d-lg-flex flex-column justify-content-end align-items-end h-100 px-lg-4 px-xxl-5">
          <h1 className="text-white text-vertical px-5 px-lg-0 opacity-50 fs-xl-3 fs-xxl-4">Blog</h1>
          <hr className="my-4 w-100 d-none d-lg-block opacity-25" />
          <div className="flex-between-center d-none d-lg-flex w-100 opacity-75 sidebar-nav btn btn-link text-decoration-none px-1 t-white m-18" data-sidebar-link="page-link"><Link className="" href={"/Connect"}>Connect</Link><Link className="" href={"/Coaching"}>What is Coaching</Link></div>
        </div>
      </div>
    </div>
  </div>
</div>


</section>




    </>
  )
}



export async function getServerSideProps(context) {


  let headers = {Authorization: `Bearer ${process.env.ADMIN_TOKEN}`}
  let a = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/blogs?populate=*", {headers:headers})
  let blogs = await a.json() 




  return {
    props: {blogs: blogs},
  }
}


export default Blog