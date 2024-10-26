import Navbar from "./components/navbar/page";
import Hero1 from "./components/hero1/page";
import About from "./components/about/page";
import Courses from "./components/course/page";
import Advance_courses from "./components/course2/page";
import Footer from "./components/footer/page";
import jobs from "./job/page";

export default function Home() {
  return (
    <>
     <Navbar />
      <Hero1 />
      <About />
      <Courses />
      <Advance_courses />
      <Footer />
    </>
  );
}