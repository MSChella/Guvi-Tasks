


const btnEle = document.getElementById("btn")
const imgEle = document.getElementById("image")



async function getDogImage(json) {
    await fetch("https://dog.ceo/api/breeds/image/random", { method: "GET" })
        .then((res) => res.json())
        .then((json) => {
            imgEle.innerHTML = `<img src = '${json.message}'>`
            console.log(json)
        })

}

btnEle.onclick = () => getDogImage()