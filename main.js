// 

{ "status"; "success", "message"; "https://images.dog.ceo/breeds/waterdog-spanish/20180714_201544.jpg" }

const btn = document.getElementById("btn")
const rasm = document.getElementById("rasm")

let url = 'https://dog.ceo/api/breeds/image/random'

window.addEventListener('DOMContentLoaded', function () {
    fetch(url)
        .then((javob) => {
            let jav = javob.json()
            return jav
        })
        .then((data) => {
            console.log(data.message);
            rasm.src = data.message
        })
})

btn.addEventListener('click', function () {
    fetch(url)
        .then((javob) => {
            let jav = javob.json()
            return jav
        })
        .then((data) => {
            console.log(data.message);
            rasm.src = data.message
        })
})

// dogs

let dogs = 'https://dog.ceo/api/breeds/list/all'
const select = document.getElementById("select");
const img = document.getElementById("img");
const fetchURL = fetch(dogs);

window.addEventListener('DOMContentLoaded', function () {
    fetch(dogs)
        .then((res) => {
            return res.json()
        })
        .then((data) => {

            // console.log(data.message);
            let res = data.message;
            // console.log(res);
            let keysOFObject = Object.keys(res)
            // console.log(keysOFObject);
            // keysOFObject.map((dog) => console.log(dog))
            for (let i = 0; i < keysOFObject.length; i++) {
                const option = document.createElement('option')
                option.value = keysOFObject[i];
                option.innerText = keysOFObject[i];
                select.appendChild(option)

            }
        })
    select.addEventListener('change', function (e) {
        e.preventDefault()
        let sect = select.value
        let api = `https://dog.ceo/api/breed/${sect}/images/random`;
        fetch(api)
            .then((send) => {
                let op = send.json()
                return op
            })
            .then((dat) => {
                img.src = dat.message;
            })
    })
});

// //

// const rasm1 = document.getElementById("rasm");
// let api = "https://reqres.in/api/users"


// fetch(api)
// .then((req) => req.json())
// .then((data) => console.log(data));

