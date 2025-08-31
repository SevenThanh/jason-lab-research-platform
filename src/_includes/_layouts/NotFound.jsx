export default function NotFound() {
  return (
    <section>
      <head>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <main>
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
            <div className="mb-8">
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              404 Error!{" "}
              <a href="/" className="text-white hover:underline">
                Click here to go to the homepage.
              </a>
            </h1>

            <article className="text-xl text-gray-700 max-w-2xl mx-auto">
              Unfortunately, the page you are trying to access does not exist.
            </article>
          </div>
        </main>
      </body>
    </section>
  );
}