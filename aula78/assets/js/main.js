// XMLHttpRequest

// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     })
// };  

function loadResult(response) {
    const result = document.querySelector("[data-result]");
    result.innerHTML = response;
}

document.addEventListener("click", e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    if(tag === "a") {
        e.preventDefault();
        loadPage(element);
    }
});

async function loadPage(element)  {
    const href = element.getAttribute("href");

    try {
        const response = await fetch(href);
        if(response.status !== 200) throw new Error("ERROR 404");
        const html = await response.text();
        loadResult(html)
    } catch (error) {
        console.error(error);
    }
}


// block 21
