export default function StudentCard({
  photo,
  name,
  project,
  contact,
  about,
}) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-md shadow mb-8 items-start gap-8 border-t border-gray-400">
      <img
        src={photo}
        alt={name}
        className="w-52 h-52 object-cover rounded-md border border-gray-300 shadow"
      />
      <div className="flex-1">
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {name}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Project:</span> {project}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Contact:</span>{" "}
          <a
            href={`mailto:${contact}`}
            className="text-blue-700 underline"
          >
            {contact}
          </a>
        </div>
        <div className="text-gray-800 text-base mt-2">
          <span className="font-semibold">About:</span> {about}
        </div>
      </div>
    </div>
  );
}
