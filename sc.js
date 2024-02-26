let products = [
    {
        id: 1,
        name: "Makarun",
        category: "Bakery",
        description: "Delicious 9/10",
        image: "media/m.jpg"
    },
    {
        id: 2,
        name: "Chocolate potatoes",
        category: "Сandy",
        description: "Delicious 100/10",
        image: "media/b.jpg"
    },
    {
        id: 3,
        name: "Lolipop",
        category: "Сandy",
        description: "Delicious 7/10",
        image: "media/l.jpg"
    },
    {
        id: 4,
        name: "Donut",
        category: "Bakery",
        description: "Delicious 10/10",
        image: "media/d.jpg"
    },
    {
        id: 5,
        name: "Candies with nuts",
        category: "Сandy",
        description: "Delicious 100000/10",
        image: "media/ch.jpg"
    },
    {
        id: 6,
        name: "Candies without nuts",
        category: "Сandy",
        description: "Delicious 1000/10",
        image: "media/chwthout.jpg"
    },
    {
        id: 7,
        name: "Cake",
        category: "Bakery",
        description: "Delicious 100000/10",
        image: "media/ck.jpg"
    },
    {
        id: 8,
        name: "Marmalade",
        category: "Сandy",
        description: "Delicious 9/10",
        image: "media/mar.jpg"
    }
];

let displayWindow = true;

function loadProducts(category){
    let container = document.getElementById("container-id");
    let productsHtml = '';
    let filterFunction;
    if(category){
        filterFunction = (elem) => { return elem.category === category; };
    } else {
        filterFunction = (elem) => { return true; };
    }
    products.filter(filterFunction).forEach(elem => {
        let elemHtml = `<div class='card-elem' id='${elem.id}'><h2>${elem.name}</h2> <image width='50%' src='${elem.image}'/> <p>${elem.description}</p></div>`;
        productsHtml += elemHtml;
    });

    for(let i = 1; i <= products.length; i++){
        if(i % 3 === 0){}
        else{}
    }

    container.innerHTML = productsHtml;
}

loadProducts();



function clickedAccept(){
    displayWindow = false;
}
/*-----------------------------------------*/
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementById("close");

// When the user clicks the button, open the modal 
setTimeout( function() {
    modal.style.display = "block";
  }, 1000);


span.addEventListener("click", function() {
    modal.style.display = "none";
    console.log("CLOSE =)");
}
)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


}


/*--------------------------*/

 let modal2 = document.getElementById("myModal2");


 let okButton = document.getElementById("OK");


 let noButton = document.getElementById("NO");

 setTimeout( function() {
    modal2.style.display = "block";
  }, 5000);


 okButton.addEventListener("click", function() {
     modal2.style.display = "none";
     console.log("CLOSE=)");
 });

 noButton.addEventListener("click", function() {
     modal2.style.display = "none";
     setTimeout(function() {
         modal2.style.display = "block";
     }, 5000);
 });