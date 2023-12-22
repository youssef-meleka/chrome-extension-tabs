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

function showFormAfterDelay(tabId) {
  //const runButton = document.querySelector(tabId + ' .run-btn');
  const textContent = document.querySelector(tabId + ' p');
  const myForm = document.querySelector(tabId + ' .hidden-form');
  
  // Wait for 4 seconds before hiding the text content
  setTimeout(() => {
    textContent.style.display = 'none';

    // Show the form after an additional 1 second
    setTimeout(() => {
      myForm.style.display = 'block';
    }, 1000);
  }, 4000);
}
  
  