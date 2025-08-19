export default function RecentNewsLayout({ recentNewsTitle, recentNewsItems = [] }) {
  return (
    <div className="max-w-4xl mx-auto pt-16 px-4">
      <h2 className="text-3xl font-bold mb-6">{recentNewsTitle}</h2>
      <ul className="bg-gray-100 rounded-xl p-8 space-y-6 shadow">
        {recentNewsItems.map((item, idx) => (
          <li key={idx} className="text-lg text-gray-800 leading-relaxed list-disc ml-6">
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}