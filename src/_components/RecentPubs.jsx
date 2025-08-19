export default function RecentPubs({ recentPubsTitle, recentPubsItems = [] }) {
  if (!recentPubsTitle || !recentPubsItems || recentPubsItems.length === 0) {
    return null;
  }
  
  return (
    <div className="max-w-4xl mx-auto pt-16 px-4">
      <h2 className="text-3xl font-bold mb-6">{recentPubsTitle}</h2>
      <ol className="bg-gray-100 rounded-xl p-8 space-y-6 shadow list-decimal ml-6">
        {recentPubsItems.map((item, idx) => (
          <li key={idx} className="text-lg text-gray-800 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ol>
    </div>
  );
}