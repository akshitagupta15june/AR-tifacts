document.getElementById('Submit').onclick = async function (e) {
    e.preventDefault()
    try {
        const name = document.getElementsByTagName('input')[0].value
        const email = document.getElementsByTagName('input')[1].value
        const first_address = document.getElementsByTagName('input')[2].value
        const address = document.getElementsByTagName('input')[3].value
        const tel = document.getElementsByTagName('input')[4].value
        const companyNo = document.getElementsByTagName('input')[5].value
        const product = document.getElementsByTagName('input')[6].value
        const pic = document.getElementsByTagName('input')[7].files[0]
        let productImg;
        if (pic.type === 'image/png' || 'image/jpeg') {
            const imgData = new FormData();
            imgData.append('file', pic)
            imgData.append('upload_preset', 'ARTifacts')
            imgData.append('cloud_name', 'do8whoupu')
            const response = await fetch("https://api.cloudinary.com/v1_1/do8whoupu/image/upload", {
                method: 'POST',
                body: imgData,
            })
            const data = await response.json()
            productImg = data.url
            console.log(productImg)
        }
        const response = await fetch('http://localhost:5000/vendor', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                first_address: first_address,
                address: address,
                tel: tel,
                companyNo: companyNo,
                product: product,
                productImg: productImg
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error.message)
    }


}
