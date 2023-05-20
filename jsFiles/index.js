/*document.getElementsByTagName('form')[0].onsubmit = async function async(e) {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const response = await fetch('http://localhost:5000/vendor', {
        method: 'post',
        body: formdata
    })
    const data = await response.json()
    console.log(data)

}*/

document.getElementsByTagName('form')[0].onsubmit = async function(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const response = await fetch('http://localhost:5000/vendor', {
        method: 'post',
        body: formdata
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        // Clear form values
        e.target.reset();
        // Reload the page
        window.location.reload();
    }
};
