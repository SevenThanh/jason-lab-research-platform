export default function ResearchCard({
  imageSrc,
  imageAlt,
  imageDesc,
  title,
  link,
  description,
}) {
  return (
    <div className="bg-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4 mb-8 shadow">
      <div className="md:w-72 w-full flex-shrink-0">
        <img src={imageSrc} alt={imageAlt} className="rounded mb-2 w-full h-auto object-contain" />
        {imageDesc && (
          <div className="text-xs text-gray-600 mt-1">
            {imageDesc}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">
          {link
            ? <a href={link} className="text-blue-700 underline">{title}</a>
            : title
          }
        </h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
