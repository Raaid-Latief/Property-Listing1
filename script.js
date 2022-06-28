let properties = [{
    image: "https://i.postimg.cc/W1grGtXk/house-1836070-1920.jpg",
    title: "Modern House",
    location: "Crawford",
    price: "R13 000 pm",
    sqFeet: "4000",

},
{
    image: "https://i.postimg.cc/NGnrZRnX/house-6967908-1920.jpg",
    title: "Forest Hideaway",
    location: "Tokai",
    price: "R12 00 pm",
    sqFeet: "3200",

},
{
    image: "https://i.postimg.cc/26z48mdB/large-home-389271-1280.jpg",
    title: "Beach House",
    location: "Strand",
    price: "R17 000 pm",
    sqFeet: "4280",

},
{
    image: "https://i.postimg.cc/3wHGnpRT/interior-2685517-1920.jpg",
    title: "Studio Apartment",
    location: "CBD",
    price: "R11 000 pm",
    sqFeet: "2670",

},
{
    image: "https://i.postimg.cc/TPjV6hb6/house-1477041-1280.jpg",
    title: "Influencer Mansion",
    location: "Claremont",
    price: "R21 000 pm",
    sqFeet: "4890",

},
{
    image: "https://i.postimg.cc/PxrwnyhW/house-1867187-1920.jpg",
    title: "Double Story Beach",
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
      <img src=${image} alt="Front">
       `;
    })
}
