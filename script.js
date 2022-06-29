// Modal

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



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
            <div class="card rounded-2 col-md-4">
              <img
                src=${property.image}
                class="card-img-top"
                alt="Image of ${property.title}"
              />
              <div class="card-body">
                <div class="card-text">
                  <h3 id="title">${property.title}</h3>
                  <h4 id="location" class="text-muted">
                    <i class="fa-solid fa-location-dot me-1" title="Location of property"></i>
                    ${property.location}
                  </h4>
                  <div id="type" class="d-flex align-items-baseline">
                  <i class="fa-solid fa-house me-1" title="Type of Property"></i>
                    <p id="typeOutput">${property.type}</p>
                  </div>
                 
                  <div id="sqFt" class="d-flex align-items-baseline">
                  <i class="fa-solid fa-ruler me-1" title="Square Feet"></i>
                    <p id="sqFtOutput">${property.sqFeet}</p>
                  </div>
                  <div id="price" class="d-flex align-items-baseline">
                    <i class="fa-solid fa-coins me-1" title="Price"></i>
                    <p id="priceOutput">${property.price}</p>
                  </div>
                </div>
              </div>
            </div>
            `;
      
    })
};

  showProperties
  ();



  




