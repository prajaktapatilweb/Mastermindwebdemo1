import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
// import "../components/hero/hero.css";
// import "../components/parallax/parallax.css"
// import "../components/Services/services.css"
// import "../components/portfolio/portfolio.css"
// import "../components/contact/contact.css"
// import "../components/cursor/cursor.css"
import "../assets/css/style.css";
import "slick-carousel/slick/slick-theme.css";


// import "../styles/globals.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>
                                Dental Clinic in HSR | Dentist in HSR Layout - HSR Dental Booth
                                </title>
                                <meta name="title" content="Dental Clinic in HSR | Dentist in HSR Layout - HSR Dental Booth"></meta>
                                <meta name='description' content="Looking for the best dentist in HSR Layout? Visit our multispeciality dental clinic in HSR and meet Dr. Jalpa Tank, a skilled Endodontist, for exceptional care at HSR Dental Booth."></meta>
                                <meta property="og:title" content="HSR Dental Booth" />
<meta property="og:description" content="Experience Excellence in Dental Care with Our Expert Team and Modern Dental Solutions" />
<meta property="og:image" content="https://www.hsrdentalbooth.com/_next/image?url=%2Fimages%2Fdr%2Fdr14.jpeg&w=384&q=75" />
<meta property="og:url" content="https://www.hsrdentalbooth.com/" ></meta>
                                {/* Dental Clinic  */}
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HSR Dental Booth",
  "image": " https://www.hsrdentalbooth.com/_next/image?url=%2Fimages%2Fclinicphoto.jpeg&w=1920&q=75",
  "@id": "",
  "url": "https://www.hsrdentalbooth.com/",
  "telephone": "7373736215",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Royal heights, 255, 17th Cross Rd, opposite Apollo Pharmacy, Sector 6, HSR Layout, Karnataka",
    "addressLocality": "Bengaluru",
    "postalCode": "560102",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9126008,
    "longitude": 77.6328482
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "11:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.practo.com/bangalore/clinic/hsr-dental-booth-a-multispeciality-dental-clinic-hsr-layout",
    "https://www.instagram.com/hsrdentalbooth/",
    "https://www.facebook.com/hsrdentalbooth/",
    "https://www.justdial.com/Bangalore/Hsr-Dental-Booth-Multispeciality-Dental-Clinic-Opposite-Apollo-Pharmacy-HSR-Layout/080PXX80-XX80-201030170037-N3X2_BZDET",
    "https://www.lybrate.com/bangalore/clinic/hsr-dental-booth-hsr-layout"
  ] 
}),
}}
/>


{/* Dentist -  */}
<script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Jalpa Tank",
  "image": " https://www.hsrdentalbooth.com/_next/image?url=%2Fimages%2Fdr%2Fdr14.jpeg&w=384&q=75",
  "@id": "",
  "url": "https://www.hsrdentalbooth.com/",
  "telephone": "7373736215",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Royal heights, 255, 17th Cross Rd, opposite Apollo Pharmacy, Sector 6, HSR Layout, Karnataka",
    "addressLocality": "Bengaluru",
    "postalCode": "560102",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9126008,
    "longitude": 77.6328482
  } ,
  "sameAs": [
    "https://www.practo.com/bangalore/doctor/dr-jalpa-tank-1-dentist",
    "https://www.linkedin.com/in/jalpa-tank-500b1a201/",
    "https://kivihealth.com/iam/jalpa.tank.19227",
    "https://www.eka.care/doctor/jalpa-tank-endodontist-bengaluru",
    "https://www.medipract.com/bangalore/doctor/dr-jalpa-tank-endodontist-cosmetic-aesthetic-dentist-conservative-dentist-654de4812bd367b5ba89069e",
    "https://www.justdial.com/Bangalore/Dr-Jalpa-Tank-Hsr-Dental-Booth-Opposite-Apollo-Pharmacy-Hsr-Layout/080PXX80-XX80-220420233547-R7S3_BZDET",
    "https://www.eka.care/clinic/dental-booth",
    "https://www.docindia.org/doctors/bangalore/dr-jalpa-tank-dentist"
  ] 
}),
}}
/>
     
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
