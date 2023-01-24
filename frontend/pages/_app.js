import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/footer';
import { useState } from 'react';




function MyApp({ Component, pageProps }) {

 const [Lang,setCLang] = useState("")


 const ChangeLang = (e)=>{
  e.preventDefault()
  let values = e.target.value;
  setCLang(values)
}


 
  return (
    <>
   <Header />
  <div id="Selector">
  <select onChange={ChangeLang} >
        <option value="">English</option>
        <option value="de">German</option>
      </select>
  </div>
    <Component {...pageProps}  Lang={Lang}/>
   <Footer/>
    </>
  )   
}

export default MyApp
   
