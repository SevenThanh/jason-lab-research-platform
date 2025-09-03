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
        {/* 
          The main content for the Home page actually comes from a file called MainPage.jsx
          You can find it in src/_components/MainPage.jsx
          You can edit that file to change the text and info that appears on the main page.

          This file mostly controls the layout and which big sections appear (like RecentNews, RecentPubs).
          You usually don't need to change anything here unless you want to show or hide whole sections.
          
          Sorry for the inconvenience, just how this technology works!
        */}
        <MainPage />
        <div className="flex flex-col md:flex-row gap-8 justify-between max-w-6xl mx-auto my-12 px-4">
          <RecentNews />
          <RecentPubs />
        </div>
        {chilldren }
      </body>
    </html>
  );
}
