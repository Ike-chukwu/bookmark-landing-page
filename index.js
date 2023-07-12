const menuBar = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".links");
const closeBtn = document.querySelector(".logo-2 .fa-times");
const underline = document.querySelector(".features-list .horizontals .indicator");
const options = document.querySelectorAll(".features .features-list .fList h3");
const fIllustration = document.querySelector(".features .f-illustration");
const question = document.querySelectorAll(".faqs .q-bank div.questions");
const downArrow = document.querySelectorAll(".faqs .q-bank .questions div .fa-chevron-down");
const input = document.querySelector(".newsletter input");
const inputContainer = document.querySelector(".newsletter .entry .iEntry");
const contactUsBtn = document.querySelector(".newsletter .entry button");
const errorMessage = document.querySelector(".newsletter .entry .iEntry .message");
const errorIcon = document.querySelector(".newsletter .error");
const mobileOrangeUnderline = document.querySelector(".features .features-list .fList .new-line");



// ----features sction render---
options.forEach((option) => {
  option.addEventListener('click', function(){
  if(this.textContent == 'Simple Bookmarking'){
    fIllustration.innerHTML = `
    <div class="box">
    <img src="images/illustration-features-tab-1 -2.svg" alt="" class="image">
    </div>

    <div class="content">
    <h2>Bookmark in one click</h2>
    <p>  Organize your bookmarks however you like. Our simple drag-and-drop interface 
      gives you complete control over how you manage your favourite sites.
    </p>
    <button class="more-info-btn">More Info</button>
    </div>
    `
    underline.style.left = '25%'
    mobileOrangeUnderline.style.top = '33%'
  }
  else if(this.textContent == 'Speedy Searching'){
    fIllustration.innerHTML = `
    <div class="box">
    <img src="images/illustration-features-tab-2.svg" alt="" class="image">
    </div>

    <div class="content">
    <h2>Intelligent search</h2>
    <p>   Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks.  
    </p>
    <button class="more-info-btn">More Info</button>
    </div>
    `
    underline.style.left = '43%'
    mobileOrangeUnderline.style.top = '66%'

  }
  else if(this.textContent == 'Easy Sharing'){
    fIllustration.innerHTML = `
    <div class="box">
    <img src="images/illustration-features-tab-3.svg" alt="" class="image">
    </div>
    <div class="content">
    <h2>  Share your bookmarks</h2>
    <p>    Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.  
    </p>
    <button class="more-info-btn">More Info</button>
    </div>
    `
    underline.style.left = '60%'
    mobileOrangeUnderline.style.top = '99%'
  }
  })
});


menuBar.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("active");
});


downArrow.forEach(arrow => {
 arrow.addEventListener('click', function(){
    arrow.classList.toggle('rotate')
    this.parentElement.parentElement.classList.toggle('active')
  })
})


contactUsBtn.addEventListener('click', function(event){
  event.preventDefault()
  if(input.value === ''){
    inputContainer.classList.add('active')
    errorMessage.textContent = 'Please enter your email address!'
    errorIcon.classList.add('active')
  }
  else{
    validation()
  }
  
})


// --checking validity of email addresss--
function validation(){
  let value = input.value
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(value.match(pattern)){
      inputContainer.classList.remove('active')
      errorIcon.classList.remove('active')
      input.value = ''
  }
  else{
    inputContainer.classList.add('active')
    errorIcon.classList.add('active')
    errorMessage.textContent = "Whoops, make sure it's an email"
  }
}



