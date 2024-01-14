let movies = [

    {
        name:"Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt || Men Long Slevee Shirt (D-14-15)",
        poster:"https://m.media-amazon.com/images/I/81M0w0-26hL._SY879_.jpg",
        PRICE:"1999"
    },
    {
        name:"Majestic Man Printed Slim Fit Casual Shirt for Men",
        poster:"https://m.media-amazon.com/images/I/618KLdYOyTL._SY879_.jpg",
        PRICE:2499
    },
    {
        name:"Lymio Track Pant for Men || Track Pants || Plain Track Pant (Track-09-11)",
        poster:"https://m.media-amazon.com/images/I/61JweMWswjL._SY879_.jpg",
        PRICE:1000
    },
    {
        name:"Leriya Fashion Textured Shirts for Men Men Fancy Shirt ||  Plain Shirts for Men",
        poster:"https://m.media-amazon.com/images/I/61v2ugDrCqL._SY879_.jpg",
        PRICE:500
    },
    {
        name:"U-TURN Men's Cotton Solid Formal/Semi Formal Shirt",
        poster:"https://m.media-amazon.com/images/I/61vrHdwwrZL._SX679_.jpg",
        PRICE:1499
    },
    {
        name:"Kvetoo Men High Neck Full Sleeve Winter Woolen Sweater",
        poster:"https://m.media-amazon.com/images/I/81iqbU1joSL._SY879_.jpg",
        PRICE:1999
    },
    {
        name:"VOXATI Men's Denim Short Length Jacket",
        poster:"https://m.media-amazon.com/images/I/61G1ZLzdBeS._SX679_.jpg",
        PRICE:799
    }
    


];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>PRICE : ${data[i].PRICE}</h2>
                        

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);









// let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");  
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);
    

//     console.log(movieDIV);