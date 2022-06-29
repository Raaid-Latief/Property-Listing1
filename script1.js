let properties = [{
    id: "1",
    image: "https://i.postimg.cc/W1grGtXk/house-1836070-1920.jpg",
    title: "Modern House",
    type: "House",
    location: "Crawford",
    price: "R13 000 pm",
    sqFeet: "4000 sqFt",

},
{
    id: "2",
    image: "https://i.postimg.cc/NGnrZRnX/house-6967908-1920.jpg",
    title: "Forest Hideaway",
    type: "Cottage",
    location: "Tokai",
    price: "R12 00 pm",
    sqFeet: "3200 sqFt",

},
{
    id: "3",
    image: "https://i.postimg.cc/26z48mdB/large-home-389271-1280.jpg",
    title: "Beach House",
    type: "House",
    location: "Strand",
    price: "R17 000 pm",
    sqFeet: "4280 sqFt",

},
{
    id: "4",
    image: "https://i.postimg.cc/3wHGnpRT/interior-2685517-1920.jpg",
    title: "Studio Apartment",
    type: "Apartment",
    location: "CBD",
    price: "R11 000 pm",
    sqFeet: "2670 sqFt",

},
{
    id: "5",
    image: "https://i.postimg.cc/TPjV6hb6/house-1477041-1280.jpg",
    title: "Influencer Mansion",
    type: "House",
    location: "Claremont",
    price: "R21 000 pm",
    sqFeet: "4890 sqFt",

},
{
    id: "6",
    image: "https://i.postimg.cc/PxrwnyhW/house-1867187-1920.jpg",
    title: "Double Story Beachhouse",
    type: "House",
    location: "Strand",
    price: "18 000 pm",
    sqFeet: "4000 sqFt",
  
},
{
    id: "7",
    image: "https://i.postimg.cc/XNp26rZJ/grant-Uhp-YKnq-Zw-E8-unsplash.jpg",
    title: "Antique Apartment",
    type: "Apartment",
    location: "Claremont",
    price: "R12 000 pm",
    sqFeet: "2560 sqFt",

},
{
    id: "8",
    image: "https://i.postimg.cc/k5TBchsj/point3d-commercial-imaging-ltd-Tkpr-Gwyg-O5-Q-unsplash.jpg",
    title: "Modernised Apartment",
    type: "Apartment",
    location: "CBD",
    price: "R14 000 pm",
    sqFeet: "2340 sqFt",

},
{
    id: "9",
    image: "https://i.postimg.cc/8zBFFC6g/med-badr-chemmaoui-xt-Dp-Xi-a-YQ-unsplash.jpg",
    title: "Green Apartment",
    type: "Apartment",
    location: "Crawford",
    price: "R13 000 pm",
    sqFeet: "2800 sqFt",

}];




const forSaleContainer = document.getElementById("boxes");

function showProperties() {
    forSaleContainer.innerHTML = "";
    properties.forEach((property) => {
        forSaleContainer.innerHTML += `
        <div class="container">
        <div>
        <p class="outset py-3">
            <div class="row">
                <div class="col-lg-2">
                    <h4>${property.id}</h4>
                </div>
                <div class="col-lg-2">
                    <h4>${property.title}</h4>
                </div>
                <div class="col-lg-2">
                    <h4>${property.type}</h4>
                </div>
                <div class="col-lg-2">
                    <h4> ${property.location}</h4>
                </div>
                <div class="col-lg-2">
                    <h2>${property.sqFeet}</h2>
                </div>
                <div class="col-lg-2">
                <div class="row">
                <h2 class="col-lg-6">
                <button class="button"><i class="fa-solid fa-pen-to-square"></i></button>
                </h2>
                <h2 class="col-lg-6">
                   <button class="button"><i class="fa-solid fa-trash"></i></button>
                </h2>
            </div>
            </div>
            </div>
        </p>
    </div>
    </div>
            `;
      
    })
};

  showProperties
  ();