import NavBar from "../../_components/NavBar.jsx";
import MainPage from "../../_components/MainPage.jsx";

export default function Layout({ title, children, ...props }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <NavBar />
        <MainPage {...props} />
      </body>
    </html>
  );
}
