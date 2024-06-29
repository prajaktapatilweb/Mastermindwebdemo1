import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import Clinicinfo from "../components/home/Clinicinfo";
import Centermode from "../components/home/Centermode";
import DrAkshay from "../components/home/DrAkshay";
import Countdown from "../components/home/Countdown";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Services from "../components/Services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
   <Cursor/>
  <Hero/>
  

  <Parallax type="services"></Parallax>
  <Services/>
  <Parallax type="portfolio"></Parallax>
  <Portfolio/>
  <Contact></Contact>
   {/* <Countdown/>  */}


{/* <Clinicinfo/> */}

      {/* <Dentalservices></Dentalservices> */}
      {/* <DrAkshay></DrAkshay> */}
      {/* <Centermode/> */}
     
        {/* <Testimonial></Testimonial> */}
      {/* <Contact></Contact> */}

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

