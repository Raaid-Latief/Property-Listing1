let properties = [{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "Double Story Beach House",
    location: "Strand",
    price: "18 000 pm",
    sqFeet: "4000 sqFt",
  
},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

},
{
    image: "",
    title: "",
    location: "",
    price: "",
    sqFeet: "",

}];




function showProperties(properties) {
    document.querySelector("#propertyList").innerHTML = "";
    pokemonArray.forEach((properties) => {
       document.querySelector("#propertyList").innerHTML += `
      <img src=${} alt="Front">
       `;
    })
}
