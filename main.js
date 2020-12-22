
//otomatic change background after 12 seconds
function change_bg() {
    try {
        var cont = document.getElementById("uniq");
        var p = [
            './img/neon-wallpaper-20070214083317-scaled.jpg',
            './img/neon-wallpaper-20070214104539.jpg'
        ];
        var counter = 0;
        setInterval(function () {
            console.log(p[counter]);
            cont.style.backgroundImage = `url(${p[counter]})`;
            counter++;
            if (counter == 2) {
                counter = 0;
            }
        }, 12000)
    } catch (err) {
        alert(err.message);
    }
}

change_bg();