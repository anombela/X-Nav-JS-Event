// Companion code to form-5.html

// Set up function, to attach to onLoad
function setup () {
    formElement = document.getElementById('text');
    colorElement = document.getElementById('write');
    console.log(colorElement)
    formElement.addEventListener('input', handler);
}
// Handler function, to provide to addEventListener
handler = function (e) {
  console.log(formElement.value)
    colorElement.style.backgroundColor = formElement.value;
};
