const navigations = [
    { name: 'Research', href: '/research/' },
    { name: 'Current Students', href: '/students/' },
    { name: 'Activities', href: '/activities/' },
];

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-8 py-6 bg-gray-300">
            <a href="/" className="text-2xl font-bold text-black hover:underline">
                Rabinovitch Research Group
            </a>

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