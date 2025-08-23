import NavBar from "../../_components/NavBar.jsx";

export default function Research({ title }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <NavBar />
        <section className='max-w-4xl mx-auto my-12 px-4'>
            <p> In the Rabinovitch Research Group, we combine our fundamental interests in Computational Fluid Dynamics (CFD) and high-speed flows, and apply these interests to research topics related to space exploration, high-speed vehicle designs, planetary science and more! Below are some example research topics that we currently work on:
            </p>
        </section>
      </body>
    </html> 
  );
}
