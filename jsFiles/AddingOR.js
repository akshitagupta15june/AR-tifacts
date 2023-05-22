function convertURIToImageData(URI) {              //convertQrCodeImageURI into ImageData 
    return new Promise(function (resolve, reject) {
        if (URI == null) return reject();
        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            image = new Image();
        image.addEventListener('load', function () {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(context.getImageData(0, 0, canvas.width, canvas.height));
        }, false);
        image.src = URI;
    });
}

const Run = async () => {
    const res = await fetch('http://localhost:5000/')    //fetching all vandor data from mongodb
    const data = await res.json()
    console.log(data)
    // var URI = data[0].QRImgURI;
    // convertURIToImageData(URI).then(function (imagedata) { //Taking Image data and convert it into <img src=''>
    //     var canvas = document.createElement('canvas');
    //     var ctx = canvas.getContext('2d');
    //     canvas.width = imagedata.width;
    //     canvas.height = imagedata.height;
    //     ctx.putImageData(imagedata, 0, 0);

    //     var image = new Image();
    //     image.src = canvas.toDataURL();
    //     console.log(image)     //Just use this image tag with scr by targeting element inside html  (<img src=''>)

    //     //Now start targeting
    //     return image.src


    // });
    //Card template
    for (element of data) {
        const URI = element.QRImgURI
        const imagedata = await convertURIToImageData(URI);
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = imagedata.width;
        canvas.height = imagedata.height;
        ctx.putImageData(imagedata, 0, 0);

        let image = new Image();
        image.src = canvas.toDataURL();
        console.log(image)     //Just use this image tag with scr by targeting element inside html  (<img src=''>)
        const imageSRC = image.src
        document.getElementsByClassName('card-container')[0].innerHTML += `<div class="card" >
                  <img src=${element.productImg} alt="Artifact Image" height="150" width="150">
                      <div class="details">
                          <p>${element.product}</p>
                          <h3>${element.name}</h3>
                          <p>Hamirpur, India</p>
                          <p>Price: $5</p>
                          <img src=${imageSRC} alt="Artifact QR Code" height="100" width="100">
                      </div>
                      <button class="connect-button">Connect with Vendor</button>
      <div/>`
    }
}
Run()
