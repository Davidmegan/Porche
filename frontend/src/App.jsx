import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import History from "./components/History";
import Connect from "./components/Connect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();
    //home
    t1.from(".head", {
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });
    t1.from(".nav span", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    t1.from(".ti-1", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".car1", {
      x: 2000,
      duration: 1.5,
      ease: "power4.out",
    });
    t1.from(".pa-1", { x: -100, opacity: 0, duration: 1, ease: "power4.out" });
    t1.from(".svg1", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
    //about
    t1.from(".ti-2", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".pa-2", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".car2", {
      duration: 1,
      opacity: 0,
      x: -300,
      rotation: 15,
      ease: "power2.out",
    });
    t1.from(".svg2", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
    //history
    t1.from(".ti-3", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".pa-3", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".car3", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".svg3", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
    //connect
    t1.from(".ti-4", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
      },
    });
    t1.from(".pa-4", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".car4", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    t1.from(".svg4", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    t1.from(".pa-5", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  });

  return (
    <div className="bg-[#D9D9D9] overflow-hidden ">
      <Header />
      <Home />
      <About />
      <History />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
