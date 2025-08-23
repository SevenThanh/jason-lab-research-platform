function parseLinks(text) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

export default function NewsCard({ date, title, text, image, imageDesc }) {
  return (
    <div className="flex flex-col md:flex-row rounded-lg border border-gray-200 shadow-lg p-6 mb-8 bg-white gap-6">
      <div className="flex-1 min-w-0">
        <div className="text-gray-500 text-sm font-semibold mb-1">{date}</div>
        {title && <div className="text-lg font-bold mb-2">{title}</div>}
        <div className="text-base text-gray-800 leading-relaxed">{parseLinks(text)}</div>
      </div>
      {image &&
        <div className="md:w-64 w-full flex-shrink-0">
          <img src={image} alt={imageDesc || 'News related'} className="w-full h-auto rounded mb-2 object-cover border" />
          {imageDesc && (
            <div className="text-xs text-gray-500">{imageDesc}</div>
          )}
        </div>
      }
    </div>
  );
}
