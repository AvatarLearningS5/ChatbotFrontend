document.getElementById('enterButton').addEventListener('click', function () {
    alert('Enter button clicked with values: ' + document.getElementById('textbox1').value + ' and ' + document.getElementById('textbox2').value);
});

document.getElementById('stopButton').addEventListener('click', function () {
    document.getElementById('textbox1').value = '';
    document.getElementById('textbox2').value = '';
    alert('Inputs cleared!');
});