const navigations = [
    { name: 'Research', href: '/Research' },
    { name: 'Current Students', href: '/Students' },
    { name: 'Activities', href: '/Activities' },
];

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-8 py-6 bg-gray-300">
            {/* Left side - Site title */}
            <div className="text-2xl font-bold text-black">
                Rabinovitch Research Group
            </div>
            {/* Right side - Navigation links */}
            <nav className="flex space-x-10 px-6">
                {navigations.map((nav) => (
                    <a
                        href={nav.href}
                        key={nav.name}
                        className="text-lg text-black font-bold hover:underline"
                    >
                        {nav.name}
                    </a>
                ))}
            </nav>
        </div>
    );
}
