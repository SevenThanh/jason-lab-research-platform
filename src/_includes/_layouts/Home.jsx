export default function Layout({ title, children }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {/* The PostCSS plugin should make this available at the root */}
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {/* Let's add multiple Tailwind classes to test */}
        <h1>
          {title}
        </h1>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <main className="prose max-w-none">{children}</main>
        </div>
      </body>
    </html>
  );
}