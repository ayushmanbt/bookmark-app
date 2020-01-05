// let sites = [{
//         id: 0,
//         site_name: "Google",
//         site_link: "https://www.google.com"
//     },
//     {
//         id: 1,
//         site_name: "Ayushman's Site",
//         site_link: "https://www.ayushmanbthakur.com"
//     }
// ]

let sites = JSON.parse(localStorage.getItem('sites')) || [];

let siteList = document.querySelector("#siteList");

let form = document.querySelector("form");
let siteName = document.querySelector("#site_name");
let siteLink = document.querySelector("#site_url");

form.addEventListener("submit", e => {
    e.preventDefault();
    let siteObject = {
        id: sites.length,
        site_name: siteName.value,
        site_link: siteLink.value
    }
    sites = [siteObject, ...sites]
    siteName.value = ""
    siteLink.value = ""
    render();
})

const render = () => {
    siteList.innerHTML = "";
    sites.forEach(site => {
        siteList.innerHTML += `
        <div class="site">
            <h3>${site.site_name}</h3>
            <div>
                <a href="${site.site_link}" target=":blank" class="btn">Visit Site</a>
                <div class="del btn" onclick="del(${site.id})">Delete</>
            </div>
        </div>
        `
    });
    localStorage.setItem("sites", JSON.stringify(sites))
}

render();

let del = (id) => {
    sites = sites.filter(site => site.id !== id)
    render();
}