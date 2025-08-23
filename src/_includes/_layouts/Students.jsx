import NavBar from "../../_components/NavBar.jsx";
import StudentCard from "../../_components/StudentCard.jsx";



export default function Students({ title }) {
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
            <h2 className="text-2xl font-bold mb-4">We are actively looking for additional PhD students to add to the group!</h2>
            <p className="mb-4 text-lg">
                For inquiries about joining the Rabinovitch Research Group please include the following:
                <ul className="list-disc pl-5 mt-2 text-base">
                <li>CV/Resume</li>
                <li>Short paragraph on your background and research interests</li>
                <li>Example (paper, ppt, etc.) of recent relevant research or project experience</li>
                </ul>
            </p>
            <hr className="border-gray-400 mb-8" />

            <StudentCard
                photo="/assets/danial.jpg"
                name="Danial Ghasimi (Fall 2021 - current)"
                project="FSI Modeling for High-Speed Parachute Inflations"
                contact="sghasimi@stevens.edu"
                about="I am from Kurdistan, Iran and I joined Stevens for my Ph.D. in fall of 2021. Prior to Stevens, I graduated from the University of Tehran with a master's degree. My past experience includes fluid-structure interaction (FSI) modeling of axons in a microchannel. For my Ph.D. research, I am focusing on FSI Modeling for High-Speed Parachute Inflations for Mars entry, descent, & landing (EDL). In my free time, I enjoy watching movies and talking about films, biking, and walking."
            />

            <StudentCard
                photo="/assets/andrew.jpg"
                name="Andrew Sayad (Fall 2022 - current)"
                project="Shockwave/Droplet Interaction Modeling"
                contact="asayad1@stevens.edu"
                about="My name is Andrew Sayad, and I am from Wayne, NJ. I earned my B.S. in Mechanical Engineering from Fairleigh Dickinson University with a minor in math and a focus in thermal-fluid physics. My research interests include computational modeling of highspeed multiphase flow and droplet effects on highspeed vehicles. I played baseball through high school and I’m a big New York Yankees fan. In my free time I enjoy working out, playing video games, and walking my dog Chewie."
            />
            </section>

      </body>
    </html>
  );
}