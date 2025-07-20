export default function NavBar ({}) {
    return (
        <div className="flex justify-between items-center px-8 py-6 bg-gray-50">
            {/* Left side - Site title */}
            <div className="text-2xl font-bold text-black">
                Rabinovitch Research Group
            </div>
            
            {/* Right side - Navigation links */}
            <nav className="flex space-x-8">
                <a href="#research" className="text-lg text-black hover:text-gray-600 transition-colors">
                    Research
                </a>
                <a href="#students" className="text-lg text-black hover:text-gray-600 transition-colors">
                    Current Students
                </a>
                <a href="#activities" className="text-lg text-black hover:text-gray-600 transition-colors">
                    Activities
                </a>
            </nav>
        </div>
    );
}