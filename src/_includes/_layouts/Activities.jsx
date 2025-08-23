import NavBar from "../../_components/NavBar.jsx";
import NewsCard from "../../_components/NewsCard.jsx";

export default function Activities({ title }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <NavBar />
        <section className="max-w-6xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-8">News</h2>

          <NewsCard
            date="March 10th, 2025"
            text="Prof. Rabinovitch attends The 56th Lunar and Planetary Science Conference (LPSC) in the Woodlands, Texas, and presents a poster on the [VATMOS-SR Mission Concept](https://www.lpi.usra.edu)." 
            image="/assets/news1.png"
            imageDesc="Prof. Rabinovitch supporting the inspection of the Mars 2020 Cruise Stage Solar Array during acoustic testing at JPL. Photo Credit: NASA/JPL, California Institute of Technology."
          />

          <NewsCard
            date="March 1st, 2025"
            text="The Rabinovitch Research Group, in collaboration with the [Computational ThermoFluids Lab (CTFLab)](https://www.ctflab.org/) at Cornell University, is excited to start working on the ONR-funded project 'Advancing understanding of and predictive modeling capabilities for high-speed shock-induced droplet aerobreakup and surface damage.' This project is supported through the ONR Hypersonic Aerothermodynamics, High-Speed Propulsion and Materials Program and has a 4-year period of performance."
          />

          <NewsCard
            date="Dec. 17th, 2024"
            text='The paper “[Sensitivity Analysis and Validation of a Computational Framework for Supersonic Parachute Inflation Dynamics](https://arc.aiaa.org/doi/10.2514/1.J064776)” has been published in the AIAA Journal. The supersonic parachute FSI modeling work is a Stanford/JPL/Stevens collaboration.'
          />

          <NewsCard
            date="Nov. 27th, 2024"
            text='The publication “[Experimental and numerical investigation of inertial particles in underexpanded jets](https://journals.cambridge.org/jfm/1000)” is available open-access in the Journal of Fluid Mechanics (JFM) in volume 1000! This paper is the culmination of a multi-year collaboration between Stevens, the University of Michigan, and Johns Hopkins University!'
          />

          <NewsCard
            date="Nov. 18th, 2024"
            text='We are excited to announce that our proposal “To What Extent Does Enceladus’ Plume Sample its Ocean: Insights from Conduit Flow Modeling” was recently selected for NASA funding through the Solar Systems Working (SSW) program. This work will be in collaboration with JPL and SWRI, and click [here](https://www.example-nasa-link.com) for more information!'
          />

        </section>
      </body>
    </html>
  );
}
