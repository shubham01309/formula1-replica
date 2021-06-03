
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('17.png')";
    document.getElementById('hello').innerHTML = "Lewis Hamilton"
    document.getElementById('world').innerHTML = "Lewis Hamilton started his professional Formula One career in 2007, driving for McLaren. He won his first title in 2008 with the team to become the then-youngest champion in the history of the sport.After four more seasons with McLaren, Hamilton moved to Mercedes, with whom he has won a further six titles in 2014, 2015 and from 2017–2020."
})

btn2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('16.png')";
    document.getElementById('hello').innerHTML = "Lando Norris"
    document.getElementById('world').innerHTML = "Lando Norris is a British-Belgian racing driver currently competing in Formula One withMcLaren, racing under the British flag. He won the MSA Formula championship in 2015, and the Toyota Racing Series, Eurocup Formula Renault 2.0 and Formula Renault 2.0 Northern European Cup in 2016."
})

btn3.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('14.png')";
    document.getElementById('hello').innerHTML = "Max Verstappen"
    document.getElementById('world').innerHTML = "Max Emilian Verstappen is a Belgian-Dutch racingdriver currently competing in Formula One, under the Dutch flag, with Red Bull Racing. At the 2015 Australian Grand Prix, when he was aged 17 years, 166 days, he became the youngest driver to compete in Formula One. He holds several other 'firsts' in Formula One racing."
})