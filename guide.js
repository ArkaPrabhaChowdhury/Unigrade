$("#submit").on('click', function () {
    if (($('input[id=yes1]:checked', '#mcq').val() == "yes1" && $('input[id=theory]:checked', '#mcq').val() == "theory" && $('input[id=no2]:checked', '#mcq').val() == "no2")||(($('input[id=yes1]:checked', '#mcq').val() == "yes1" && $('input[id=practical]:checked', '#mcq').val() == "practical" && $('input[id=no2]:checked', '#mcq').val() == "no2"))) {
        document.getElementById("decide").setAttribute("href", "biology.html");
    }
    if ($('input[id=yes1]:checked', '#mcq').val() == "yes1" && $('input[id=theory]:checked', '#mcq').val() == "theory" && $('input[id=yes2]:checked', '#mcq').val() == "yes2") {
        document.getElementById("decide").setAttribute("href", "chemistry.html");
    }
    if ($('input[id=yes1]:checked', '#mcq').val() == "yes1" && $('input[id=practical]:checked', '#mcq').val() == "practical" && $('input[id=yes2]:checked', '#mcq').val() == "yes2") {
        document.getElementById("decide").setAttribute("href", "physics.html");
    }
    if ($('input[id=no1]:checked', '#mcq').val() == "no1" && $('input[id=practical]:checked', '#mcq').val() == "practical" && $('input[id=yes2]:checked', '#mcq').val() == "yes2"||(($('input[id=no1]:checked', '#mcq').val() == "no1" && $('input[id=practical]:checked', '#mcq').val() == "practical" && $('input[id=no2]:checked', '#mcq').val() == "no2"))) {
        document.getElementById("decide").setAttribute("href", "code.html");
    }
    if ($('input[id=no1]:checked', '#mcq').val() == "no1" && $('input[id=theory]:checked', '#mcq').val() == "theory" && $('input[id=yes2]:checked', '#mcq').val() == "yes2") {
        document.getElementById("decide").setAttribute("href", "math.html");
    }
    if ($('input[id=no1]:checked', '#mcq').val() == "no1" && $('input[id=theory]:checked', '#mcq').val() == "theory" && $('input[id=no2]:checked', '#mcq').val() == "no2") {
        document.getElementById("decide").setAttribute("href", "cs.html");
    }
});