import React from "react";
import home1 from "../assets/about1.png";
import home2 from "../assets/about2.png";
import home3 from "../assets/about3.png";
import home4 from "../assets/about4.png";
const About = () => {
  return (
    <section className="bg-black text-white px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[60px] font-bold text-center font-[Genos] mb-3">
          ABOUT PACE
        </h2>
        <div className="w-150 border-t border-gray-500 mx-auto mb-8"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-lg leading-relaxed font-[Genos]">
            <p>
              The annual sports fest of{" "}
              <b>ARMY INSTITUTE of TECHNOLOGY, PUNE</b> is one of the largest of
              its kind in <b>PUNE</b> and an energy-packed event.
            </p>
            <br />
            <p>
              Colleges from all over Pune participate in the fest every year
              with more than
              <b> 4000 participants</b> taking part. Teams from prestigious
              institutes like
              <b> AFMC, CME, NDA, BEG, INA</b> also grace the event while
              competing fiercely.
            </p>
            <br />
            <p>
              PACE has grown leaps and bounds over the years and has
              consistently attracted participants from all over India. It has
              been living up to the expectations of thousands of participants
              who come here looking forward to the best events of their kind.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={home1} alt="Sports Image 1" className="rounded-lg" />
            <img src={home2} alt="Sports Image 1" className="rounded-lg" />
            <img src={home3} alt="Sports Image 1" className="rounded-lg" />
            <img src={home4} alt="Sports Image 1" className="rounded-lg" />
          </div>
        </div>
      </div>

    </section>
  );
};


export default About;
