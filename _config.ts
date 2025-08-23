import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
  src: "./src",
  dest: "./output",
  server: {
    open: true,
    page404: "./404.html",
  }
});

site.use(
  tailwindcss({
  extensions: [".html", ".js", ".njk", ".jsx"],

    options: {
      content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.jsx", "./src/**/*.js"],
      theme: {
        extend: {
          colors: {

          },
        },
      },
      plugins: [typography],
    },
  }),
);

site.use(jsx());
site.use(postcss());
site.add("style.css"); 
site.copy("assets");

export default site;
