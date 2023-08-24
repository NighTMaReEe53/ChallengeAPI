// Selector
const theContainer = document.querySelector(".container");

window.addEventListener("load", () => {
  getData();
});
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      let theData = res.json();
      return theData;
    })
    .then((theData) => {
      console.log(theData);
      theData.forEach((data) => {
        // Create Main Div
        let theMainDiv = document.createElement("div");
        theMainDiv.className = "box";
        // Create span
        let theSpan = document.createElement("span");
        theSpan.appendChild(
          document.createTextNode(`User ID : ${data.userId}`)
        );
        // Create Heading
        let theHeading = document.createElement("h2");
        theHeading.appendChild(document.createTextNode(data.title));
        // Create Paragraph
        let theP = document.createElement("p");
        theP.appendChild(document.createTextNode(data.body));
        // Append To MainDiv
        theMainDiv.appendChild(theSpan);
        theMainDiv.appendChild(theHeading);
        theMainDiv.appendChild(theP);
        theContainer.appendChild(theMainDiv);
      });
    });
}
