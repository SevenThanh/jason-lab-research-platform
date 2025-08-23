import NavBar from "../../_components/NavBar.jsx";
import ResearchCard from "../../_components/ResearchCard.jsx";

export default function Research({ title }) {
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
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-4">
            In the Rabinovitch Research Group, we combine our fundamental interests in Computational Fluid Dynamics (CFD) and high-speed flows, and apply these interests to research topics related to space exploration, high-speed vehicle designs, planetary science and more! Below are some example research topics that we currently work on:
          </p>
          <hr className="border-gray-400 mb-8" />
          
          {/* Research cards */}
          <ResearchCard
            imageSrc="/assets/proj1.png"
            imageAlt="Supersonic Parachute"
            imageDesc="Sample FSI simulation using the ARGO computational suit (https://web.stevens.edu/fsi/) for a supersonic parachute inflation based on the SR03 flight test."
            title="Modeling Supersonic Parachute Inflations"
            description="All spacecraft that have landed successfully on Mars, to date, have used a supersonic Disk-Gap-Band (DGB) parachute during descent. We use a variety of modeling techniques to investigate the physics associated with supersonic parachute inflations and parachute aerodynamics."
          />

          <ResearchCard
            imageSrc="/assets/proj2.jpg"
            imageAlt="Enceladus Plume Diagram"
            imageDesc="Schematic of the Cryo-Erupt model. For more details, see our recent paper!"
            title="Modeling the Enceladus Plume!"
            link=""
            description="The Cassini spacecraft discovered a plume at Enceladus, a moon of Saturn, in the early 2000s. In a recent paper, we investigate how gases dissolved in Enceladus' ocean could contribute to the eruption process at Enceladus. Our poster from AGU in the fall of 2024 can be seen here."
          />

          <ResearchCard
            imageSrc="/assets/proj3.jpg"
            imageAlt="Shock Aerobreakup Simulation"
            imageDesc="Schematic of shock/breakup simulation. Collaboration with Prof. Desjardins's research group at Cornell."
            title="Shock/Droplet Aerobreakup and Impact/Damage Modeling"
            link=""
            description="When a high-speed vehicle flies through adverse weather conditions, such as a storm cloud, water droplets and other particulates will impact the vehicle. These impacts can cause damage to the vehicle. In collaboration with Prof. Desjardins's research group at Cornell University, we use the NG2A computational suite to investigate shock/droplet interactions, focusing on droplet breakup and impact."
          />

          <ResearchCard
            imageSrc="/assets/proj4.png"
            imageAlt="VATMOS Poster"
            title="Venus ATMOSpheric - Sample Return (VATMOS-SR Mission Concept)"
            description="Have you ever thought about what it would take to bring a sample of the Venus atmosphere back to Earth for analysis? The VATMOS-SR mission concept would do exactly that! Please see our poster below from the LPSC 2025 conference to learn more about this exciting mission concept!"
          />

        </section>
      </body>
    </html> 
  );
}
