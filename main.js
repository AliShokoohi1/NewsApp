const API = "a7c1fd00267f44c28aafcf9acdaf06de"
const url = "https://newsapi.org/v2/everything?q="


document.getElementById("search").addEventListener("click",()=>{
    cards.innerHTML = ""
    let query = document.getElementById("input").value;
    fetchNews(query);
})

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API}`)
    const data = await res.json();
    console.log(data)
    showCards(data);
}
const cards = document.getElementById("cards")
function showCards(bindData){
    
    for(let i = 0; i<18;i++){
        if(bindData.articles[i].urlToImage != null){
            let card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML= `
            <img src=${bindData.articles[i].urlToImage} alt="">
            <h3>${bindData.articles[i].title}</h3>
            <p>${bindData.articles[i].description}</p>
        `
        cards.appendChild(card);        
        }
        else {
            let card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML= `
            <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" alt="">
            <h3>${bindData.articles[i].title}</h3>
            <p>${bindData.articles[i].description}</p>
        `
        cards.appendChild(card);  
        }
    }
    
}

// 

window.addEventListener("load",headLines())
async function headLines(){
    const resp = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7c1fd00267f44c28aafcf9acdaf06de")
    const data2 = await resp.json();
    console.log(data2)
    showHeadLine(data2)
}

const headline = document.getElementById("headlines")
function showHeadLine(data){
            for(let i = 0; i<10;i++){
            let head = document.createElement("h4")
            head.classList.add("headlines")
            head.innerHTML= `
            <h4>-${data.articles[i].title}</h4>
        `
        headline.appendChild(head);  

    }

}

// 

window.addEventListener("load",popular());
async function popular(){
    const respo = await fetch("https://newsapi.org/v2/everything?q=sport&sortBy=popularity&apiKey=a7c1fd00267f44c28aafcf9acdaf06de")
    const data3 = await respo.json();
    console.log(data3)
    showPop(data3);
}

function showPop(bindData){
    
    for(let i = 0; i<18;i++){
        if(bindData.articles[i].urlToImage != null){
            let card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML= `
            <img src=${bindData.articles[i].urlToImage} alt="">
            <h3>${bindData.articles[i].title}</h3>
            <p>${bindData.articles[i].description}</p>
        `
        cards.appendChild(card);        
        }
        else {
            let card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML= `
            <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" alt="">
            <h3>${bindData.articles[i].title}</h3>
            <p>${bindData.articles[i].description}</p>
        `
        cards.appendChild(card);  
        }
    }
    
}