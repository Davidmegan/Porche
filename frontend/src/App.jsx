import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import History from "./components/History";
import Connect from "./components/Connect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import AutoDisappearingTireTrackCursor from "./components/AutoDisappearingTireTrackCursor";

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    //home
    gsap.from(".head", {
      y: -100,
      opacity: 0,
      delay: 0.2,
      ease: "power4.out",
    });
    gsap.from(".nav span", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".ti-1", {
      y: 100,
      opacity: 0,
      delay: 1.5,
      duration: 1,
      ease: "power4.out",
    });
    gsap.from(".car1", {
      x: 2000,
      delay: 2,
      duration: 1.5,
      ease: "power4.out",
    });
    gsap.from(".pa-1", {
      x: -100,
      opacity: 0,
      delay: 3,
      duration: 1,
      ease: "power4.out",
    });
    gsap.from(".svg1", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 3.5,
      stagger: 0.2,
      ease: "power4.out",
    });
    //about
    gsap.from(".ti-2", {
      y: 100,
      opacity: 0,

      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-2",
        start: "top 40%",
      },
    });
    gsap.from(".pa-2", {
      y: 100,
      opacity: 0,
      delay: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-2",
        start: "top 40%",
      },
    });
    gsap.from(".car2", {
      duration: 1,
      opacity: 0,
      delay: 1.5,
      x: -300,
      rotation: 15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".ti-2",
        start: "top 40%",
      },
    });
    gsap.from(".drift", {
      duration: 2,
      opacity: 0,
      delay: 1.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".ti-2",
        start: "top 40%",
      },
    });
    gsap.from(".svg2", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-2",
        start: "top 40%",
      },
    });
    //history
    gsap.from(".ti-3", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-3",
        start: "top 40%",
        delay: 1,
      },
    });
    gsap.from(".pa-3", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-3",
        start: "top 40%",
        delay: 1,
      },
    });
    gsap.from(".car3", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-3",
        start: "top 40%",
        delay: 1,
      },
    });
    gsap.from(".svg3", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1.7,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-3",
        start: "top 40%",
        delay: 1,
      },
    });
    //connect
    gsap.from(".ti-4", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
        delay: 1,
      },
    });
    gsap.from(".pa-4", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
        delay: 1,
      },
    });
    gsap.from(".car4", {
      x: -100,
      opacity: 0,
      delay: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
        delay: 1,
      },
    });
    gsap.from(".svg4", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
        delay: 1,
      },
    });

    gsap.from(".pa-5", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ti-4",
        start: "top 80%",
        delay: 1,
      },
    });
  });

  return (
    <div className="bg-[#D9D9D9] overflow-hidden ">
      <AutoDisappearingTireTrackCursor />
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
