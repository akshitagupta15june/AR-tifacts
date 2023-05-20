function addCard() {
  var cardProduct = document.getElementById("card-product-input").value;
  var cardArtist = document.getElementById("card-artist-input").value;
  var cardLocation = document.getElementById("card-location-input").value;

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
                    <section class="carousel">
                    <div class="slider-wrapper">
                      <div class="slider">
                        <img id="slide-1" src="Images/Product.jpg" />
                        <img id="slide-2" src="Images/qr.png" />
                        <img id="slide-3" src="Images/Product.jpg" />
                      </div>
                      <div class="slide-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                      </div>
                    </div>
                  </section>
    
                  <div class="card-sidebar">
                    <h1>${cardProduct}</h1>
                    <h2>${cardArtist}, ${cardLocation}</h2>
                    <button onclick="showPopup()">Connect With Vendor</button>
                  </div>

      <button style= "background-color: crimson;" onclick="deleteCard(this.parentNode)">Delete Card</button>
    `;

  var cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);
}

function deleteCard(card) {
  card.parentNode.removeChild(card);
}