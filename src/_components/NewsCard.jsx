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

export default function NewsCard({ text }) {
  return (
    <li className="mb-6 text-base text-gray-900 leading-relaxed">
      {parseLinks(text)}
    </li>
  );
}
