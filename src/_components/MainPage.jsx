export default function MainPage ({ aboutTitle, aboutText, educationTitle, education }) {
    return (
        <div className="flex justify-center max-w-6xl mx-auto p-8 gap-16">
            {/* Left Side - Profile Information */}
            <div className="flex flex-col items-center w-96">
                {/* Profile Image */}
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                    <img 
                        src="/assets/pfp.png" 
                        alt="Jason Rabinovitch"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Name and Title */}
                <h1 className="text-3xl font-bold text-center mb-2">
                    Jason Rabinovitch
                </h1>
                <p className="text-lg text-center text-gray-700 italic mb-6 leading-relaxed">
                    Assistant Professor in the <span className="italic">Mechanical Engineering Department</span> at Stevens Institute of Technology
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#linkedin" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <span className="text-white text-xl">in</span>
                    </a>
                    <a href="#email" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <span className="text-white text-xl">✉</span>
                    </a>
                    <a href="#google" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <span className="text-white text-xl">G</span>
                    </a>
                </div>
            </div>

            {/* Right Side - Content from Markdown */}
            <div className="flex-1 max-w-2xl">
                {/* About Me Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">
                        {aboutTitle}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                        {aboutText}
                    </p>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">
                        {educationTitle}
                    </h2>
                    <ul className="space-y-3">
                        {education && education.map((item) => (
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