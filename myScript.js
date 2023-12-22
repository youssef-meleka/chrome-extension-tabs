// Define variables
var tabLabels = document.querySelectorAll("#tabs li");
var tabContents = document.querySelectorAll(".tab-contents");

function activateTab(e) {
  e.preventDefault();
  
  // Deactivate all tabs
  tabLabels.forEach(function(label, index){
    label.classList.remove("active");
  });
  tabContents.forEach(function(pane, index){
    pane.classList.remove("active");
  });
  
  // Activate current tab
  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");

  // Show text and run button for the clicked tab
  const textContent = document.querySelector(clickedTab + " p");
  const runButton = document.querySelector(clickedTab + " .run-btn");

  textContent.style.display = 'block';
  runButton.style.display = 'block';

  // Hide the form for the clicked tab
  const myForm = document.querySelector(clickedTab + " .hidden-form");
  myForm.style.display = 'none';
}

// Apply event listeners
tabLabels.forEach(function(label, index){
  label.addEventListener("click", activateTab);
});

function handleButtonClick(buttonId) {
  const button = document.getElementById(buttonId);
  const textMessageId = buttonId.replace("myButton", "textMessage");
  const formId = buttonId.replace("myButton", "myForm");

  const textMessage = document.getElementById(textMessageId);
  const form = document.getElementById(formId);

  button.addEventListener("click", () => {
    textMessage.textContent = "Please wait for a moment...";
    textMessage.style.display = "block";

    setTimeout(() => {
      textMessage.style.display = "none";
      form.style.display = "block";
    }, 4000);
  });
}

// Initialize functionality for each button
handleButtonClick("myButton1");
handleButtonClick("myButton2");
handleButtonClick("myButton3");




  