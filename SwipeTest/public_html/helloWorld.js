/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write('<h1>Laser Gate</h1><div class="laserGate"><table border="0" cellspacing = "0" cellpadding = "0" id="a">');

for (i = 0; i < 9; i++) {
    document.write("<tr id='row'" + i + ">");
    for (j = 0; j < 9; j++) {
        if (j === 0) {
            if (i === 0) {
                document.write("<td id= '" + i.toString() + j.toString() + "' class='outer down right'> " + i + "   " + j + "</td>");
            }
            else if (i === 8) {
                document.write("<td id= '" + i.toString() + j.toString() + "' class='outer up right'> " + i + "   " + j + "</td>");
            }
            else {
                document.write("<td id= '" + i.toString() + j.toString() + "' class = 'outer up down' > " + i + "   " + j + "</td>");
            }
        }
        else if (j === 8) {
            if (i === 0) {
                document.write("<td id= '" + i.toString() + j.toString() + "' class='outer down left'> " + i + "   " + j + "</td>");
            }
            else if (i === 8) {
                document.write("<td id= '" + i.toString() + j.toString() + "' class='outer up left'> " + i + "   " + j + "</td>");
            }
            else {
                document.write("<td id= '" + i.toString() + j.toString() + "' class = 'outer up down' > " + i + "   " + j + "</td>");
            }
        }
        else {
            if (i === 0 | i === 8) {
                document.write("<td id= '" + i.toString() + j.toString() + "' class = 'outer right left' > " + i + "   " + j + "</td>");
            }
            else {
                document.write("<td id= '" + i.toString() + j.toString() + "' > " + i + "   " + j + "</td>");

            }
        }
    }
    document.write('</tr></div>');
}
;

$("#00").text("laser").addClass("laser");
$("#60").text("laser").addClass("laser");
$("#38").text("laser").addClass("laser");
$("#84").addClass("avatar");
document.write('</table>');

$(function() {
    //Enable swiping...
    $("table").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount) {
//            $('#grid').text("You swiped " + direction + " for " + distance + " pixels");
            var start = $(".avatar").attr("id");
            var moveSquares = Math.floor(distance / 75);
            var end = parseInt(start, 10);
            row = Math.floor(end / 10);
            col = end % 10;
//            $("h1").text("row " + row + " col " + col + " " + Math.floor(end / 10) + "   " + end % 10 + "  " + end);

            var end = parseInt(start, 10);
            if ($("#" + start + "").hasClass('right') && direction === 'right'.toString()) {
                col = (moveSquares + col > 8) ? '8' : (col + moveSquares);
            }
            else if ($("#" + start + "").hasClass('left') && direction === 'left'.toString()) {
                col = (col - moveSquares < 0) ? '0' : (col - moveSquares);
            }
            else if ($("#" + start + "").hasClass('up') && direction === 'up'.toString()) {
                row = (row - moveSquares < 0) ? '0' : (row - moveSquares);
            }
            else if ($("#" + start + "").hasClass('down') && direction === 'down'.toString()) {
                row = (row + moveSquares > 8) ? '8' : (row + moveSquares);
            }
            end = row.toString() + col.toString();
//            $("h1").text(Math.floor(end / 10) + "   " + end % 10 + "  " + end);
            $("#" + start + "").removeClass('avatar');
            $("#" + end + "").addClass('avatar');
            $('#grid').text("You are currently in box " + end + " you swiped " + direction + " for " + distance + " pixels");
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
//    $("table").on("click", function() {
//        alert("Level 1");
//        $("#00").text("laser").addClass("laser");
//        $("#60").text("laser").addClass("laser");
//        $("#38").text("laser").addClass("laser");
//        $("#84").addClass("avatar");
//    });

});