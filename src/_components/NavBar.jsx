export default function NavBar ({}) {
    return (
        <div className="flex justify-between items-center px-8 py-6 bg-gray-300">
            {/* Left side - Site title */}
            <div className="text-2xl font-bold text-black">
                Rabinovitch Research Group
            </div>
            
            {/* Right side - Navigation links */}
            <nav className="flex space-x-10 px-6">
                <a href="#research" className="text-lg text-black font-bold hover:underline">
                    Research
                </a>
                <a href="#students" className="text-lg text-black font-bold hover:underline">
                    Current Students
                </a>
                <a href="#activities" className="text-lg text-black font-bold hover:underline">
                    Activities
                </a>
            </nav>
        </div>
    );
}