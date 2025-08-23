import NavBar from "../../_components/NavBar.jsx";
import MainPage from "../../_components/MainPage.jsx";
import RecentNews from "../../_components/RecentNews.jsx";
import RecentPubs from "../../_components/RecentPubs.jsx";

export default function Layout({ title, comp, chilldren, ...props }) {
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
        <MainPage {...props} />
        <div className="flex flex-col md:flex-row gap-8 justify-between max-w-6xl mx-auto my-12 px-4">
          <RecentNews />
          <RecentPubs />
        </div>
        {chilldren }
      </body>
    </html>
  );
}
