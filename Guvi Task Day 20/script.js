


const btnEle = document.getElementById("btn")
const imgEle = document.getElementById("image")



async function getDogImage(json) {
    await fetch("https://dog.ceo/api/breeds/image/random", { method: "GET" })
        .then((res) => res.json())
        .then((json) => {
            imgEle.innerHTML = `<img src = '${json.message}' alt='Dog Image'/>`
            console.log(json)
        })

}

btnEle.onclick = () => getDogImage()

const btnEle2 = document.getElementById("btn_fox")
const imgFoxEle = document.getElementById("image_fox")



async function getBearImage(json) {
    await fetch("https://random-d.uk/api or https://random-d.uk/api/v2", { method: "GET" })
        .then((res) => res.json())
        .then((json) => {
            imgFoxEle.innerHTML = `<img src = '${json.message}' alt='Fox Image'/>`
            console.log(json)

        })
        .catch((error) => console.error("this is an error"))

}

btnEle2.onclick = () => getBearImage()