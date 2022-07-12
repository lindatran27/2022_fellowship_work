// Document Object - Select from doc - class needed - eventMethod - (whatkind,
// functionality)
document.querySelector('.first-button').addEventListener('click', function () {
    // do something when clicked
    alert("You clicked me!")
});

function submit (event) {
    event.preventDefault();
    console.log("you submitted the assignment!");
};

// find an on click example that has parameters.

document.querySelector('.first-name').addEventListener('change', checkName)

function checkName () {
    var userName = document.querySelector('.first-name').value;
    console.log(`Welcome back ${userName}`)
    // var welcomeMessage = document.querySelector('.welcome-message');
    // welcomeMessage = `Welcome back ${userName}`   
}

function lastNameCheck(event, input) {
    event.preventDefault();
    // console.log("Last Name");
    var lastName = input.value;
    console.log(lastName);
}

document.querySelector('.scrolly').addEventListener('scroll', function() {
    console.log("You scrolled the div.");
})

document.querySelector('.mouse-event-1').addEventListener('mouseout', function() {
  var mouseEvent = document.querySelector('.mouse-event-1')

  mouseEvent.style('color') = 'black';
  mouseEvent.style('font-size') = "5em"
});

function changeSize(item) {
    item.style['font size'] = '5em';
}