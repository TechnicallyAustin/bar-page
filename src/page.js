import "bootstrap/dist/css/bootstrap.min.css";

export function pageLoad() {
  console.log("window loaded");
  const page = () => {
    const content = document.querySelector("#content");
    const header = content.appendChild(document.createElement("header"));
    const image = content.appendChild(document.createElement("img"));
    const headline = content.appendChild(document.createElement("headline"));

    content.setAttribute("class", " w-100 h-100 bg-dark");
    header.setAttribute("class", "container-fluid bg-light h-25");
    image.setAttribute("class", "");
    headline.setAttribute("class", "");
    headline.textContent = "Technically the best Bar ever?";
  };
  page();
}

window.onload = function createPage() {
  pageLoad();
};
