
    
function myFunction(View)
{
    let fullImage =  document.getElementById("fullImage")
    fullImage.src = View.src;
}



const count = document.getElementById("count")
const cart = document.getElementById("cart")
const cancel = document.getElementById("cancel")
cart.addEventListener("click" , increaseNumber)
let number = 0;
function increaseNumber() {
        number++;
    count.textContent = number;

    }
    
    cancel.addEventListener("click" , decreaseNumber)
    function decreaseNumber() {
        number--;
    count.textContent = number; 
}


function openMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = 'flex';
}

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = 'none';
}

function next() {
    const scroll = document.querySelector('.scroll')
    scroll.scrollLeft += 1000;
    scroll.style.scrollBehavior = "smooth"
}
  function prv() {
      const scroll = document.querySelector('.scroll');
      scroll.scrollLeft -= 1000;
      scroll.style.scrollBehavior = "smooth"
  }

function hide() {
   let email = document.getElementById("email")
   let hidetext = document.getElementById("hidetext")
   let showtext = document.getElementById("showtext")
   

   if(email.type === "email") {
       email.type = "password"
       hidetext.style.display = 'block'
    
   }else{
       email.type ="email"
       hidetext.style.display = "none"
    
   }
   

    
}
// product details
let Name = document.getElementById("name")
let price = document.getElementById("price")
let product = [
    {
      styleName : 'loosi ' ,
      price : 29 ,
      discription : "match your style" ,

    }
];

Name.textContent = product[0].styleName;
console.log(product[0].styleName);

// submitform  js //



    function submitForm () {
        let FirstName = document.getElementById("FirstName").value;
        let LastName = document.getElementById("LastName").value;
        let Mail = document.getElementById("Mail").value;
        let password = document.getElementById('password').value;
        let errorMassage = document.getElementById('errorMassage');
        let errorMail = document.getElementById('errorMail');
        let isValid = true;
     
    
      // Basic validation
      if (FirstName === '' || LastName === '' || Mail === '' || password === '') {
        errorMassage.textContent = 'All fields are required';
        isValid = false;
      }else{
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!pattern.test(Mail)) {
            errorMassage.textContent = 'Invalid email address';
            isValid = false;
        }else if(password.length < 8 ){
            errorMassage.textContent = 'password should be At least 8 digits '
            isValid = false;
        }
        else{
            errorMassage.textContent = 'Thanks for submitting your form';
            errorMassage.style.color = 'green';
            isValid = true;
        }
      }
      if(isValid){
    
    document.getElementById('contactForm').style.display = 'none'

}  

};
function Hide(){
    let hideText = document.getElementById("hide-text")
    let showText = document.getElementById("show-text")
    let password = document.getElementById('password');

    if(password.type === "password"){
        password.type = "text";
         hideText.style.display = 'flex';
    }  else{
        password.type = "password"
        hideText.style.display = 'none';
    }

}
// Define an array to store product details
let products = [
    {
        name: 'Loosi',
        price: 29,
        description: "Match your style"
    },
    {
        name: 'Shirt',
        price: 39,
        description: "Comfortable and stylish"
    },
    {
        name: 'Jeans',
        price: 49,
        description: "Classic and durable"
    }
];

// Function to display product details
function displayProductDetails() {
    let productName = document.getElementById("name");
    let productPrice = document.getElementById("price");
  

    // Randomly select a product from the array
    let randomIndex = Math.floor(Math.random() * products.length);
    let randomProduct = products[randomIndex];

    // Display the details of the selected product
    productName.textContent = randomProduct.name;
    productPrice.textContent = '$' + randomProduct.price;
    console.log('active array code');
}

// Call the function to display product details




