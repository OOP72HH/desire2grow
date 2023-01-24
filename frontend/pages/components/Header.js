import Head from 'next/head'
import Link from 'next/link'


export default function Header() {
  return (
  <>
 <Head>
  <style>{`body {display:block !important}`}</style>
 <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    


    {/* <!-- ===============================================--> */}
    {/* <!--    Document Title--> */}
    {/* <!-- ===============================================--> */}
    <title>Desire2Grow - Carry your topics into the world with clarity, energy and passion!</title>


    {/* <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================--> */}
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16x16.png"/>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicons/favicon.ico"/>
    <link rel="manifest" href="assets/img/favicons/manifest.json"/>
    <meta name="msapplication-TileImage" content="assets/img/favicons/mstile-150x150.png"/>
    <meta name="theme-color" content="#ffffff"/>


    {/* <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================--> */}
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
    <link href="vendors/prism/prism.css" rel="stylesheet"/>
    <link href="assets/css/theme.css" rel="stylesheet" />
    <link href="assets/css/user.css" rel="stylesheet" />

    <link href="vendors/swiper/swiper-bundle.min.css" rel="stylesheet"/>
    <link href="vendors/prism/prism.css" rel="stylesheet"/>




 </Head>
  </>
  )
}
