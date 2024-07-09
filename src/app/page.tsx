import Link from 'next/link'
import Image from "next/image";
import Herosection from './component/HerooSection'
import FueatureCourses from './component/FueatureCourses'
import WhychooseUs from './component/whychooseUs';
import MusicSchoolTestimonials from './component/TestimonialCards'
import UpcomingWebinars from './component/UpcomingWebinars'
import Footer from './component/Footer';
export default function Home() {
  return (
    <>
      <menu className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]'>
      <Herosection/>
      <FueatureCourses/>
      <WhychooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Footer/>
      </menu>
    </>
  );
}
