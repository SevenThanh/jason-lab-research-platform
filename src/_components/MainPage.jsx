// --- Content for the Main Page ---
// You can edit the text and info here to change what appears on the main page.
const profileName = "Jason Rabinovitch";
const profileTitle = "Assistant Professor in the Mechanical Engineering Department at Stevens Institute of Technology";
const profileImg = "/assets/pfp.png";
const profileSocials = [
  {
    href: "https://www.linkedin.com/in/jason-rabinovitch-729b3185/",
    label: "in",
    target: "_blank"
  },
  {
    href: "mailto:jrabinov@research.stevens.edu",
    label: "✉️"
  },
  {
    href: "https://scholar.google.com/citations?user=hQRtV44AAAAJ&hl=en",
    label: "G",
    target: "_blank"
  }
];
const aboutTitle = "About me";
const aboutText = `Dr. Jason Rabinovitch is currently an Assistant Professor in the Mechanical Engineering Department at Stevens Institute of Technology in Hoboken, NJ. Prior to Stevens Institute of Technology, he worked at the Jet Propulsion Laboratory (JPL) for 6+ years as a Mechanical Engineer in the Entry, Descent, and Landing and Formulation Group. He was fortunate to work on the Mars 2020 mission in a variety of different roles, ranging from delivering flight hardware to the Cruise Stage, contamination control analysis for the rover, and aerodynamic analysis and testing for the Mars Helicopter. The Rabinovitch Research Group at Stevens combines an interest in space exploration with fundamental computational fluid dynamics topics. Dr. Rabinovitch is originally from Toronto, Ontario, is still a Toronto Maple Leafs fan, and enjoys a variety of outdoor activities including ice hockey and snowboarding.`;
const educationTitle = "Education";
const education = [
  { id: "phd_caltech", degree: "PhD", year: 2014, school: "California Institute of Technology", field: "Aeronautics" },
  { id: "ms_ecole", degree: "MS", year: 2010, school: "École Polytechnique", field: "Fluid Mechanics" },
  { id: "ms_caltech", degree: "MS", year: 2009, school: "California Institute of Technology", field: "Aerospace Engineering" },
  { id: "bs_yale", degree: "BS", year: 2008, school: "Yale University", field: "Mechanical Engineering" }
];

export default function MainPage() {
  return (
    <div className="flex justify-center max-w-7xl mx-auto p-8 gap-32">
      {/* Left Side - Profile Information */}
      <div className="flex flex-col items-center w-96">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
          <img
            src={profileImg}
            alt={profileName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name and Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          {profileName}
        </h1>
        <p className="text-lg text-center text-gray-700 italic mb-6 leading-relaxed">
          {profileTitle}
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {profileSocials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.target || undefined}
              rel={s.target ? "noopener noreferrer" : undefined}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <span className="text-white text-xl">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Right Side - Content */}
      <div className="flex-1 max-w-2xl">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{aboutTitle}</h2>
          <p className="text-lg leading-relaxed text-gray-800">{aboutText}</p>
        </section>
        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{educationTitle}</h2>
          <ul className="space-y-3">
            {education.map((item) => (
              <li key={item.id} className="text-lg text-gray-800">
                <strong>{item.degree}</strong> ({item.year}) {item.school} ({item.field})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
