/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write('<h1>Laser Gate</h1><table border="1" cellspacing = "1" cellpadding = "5" id="a">');

for (i = 0; i < 9; i++) {
    document.write("<tr id='row" + i + "'>'");
    for (j = 0; j < 9; j++) {
        if (j == 0 | j == 8) {
            document.write("<td id= '" + i.toString() + j.toString() + "' class='outer'> row " + i + " col " + j + "</td>");
        }
        else {
            document.write("<td id= '" + i.toString() + j.toString() + "'> row " + i + " col " + j + "</td>");
        }
    }
    document.write('</tr>');
}
$("#row0").addClass("outer");
$("#row8").addClass("outer");

document.write('</table>');

$(function() {
    //Enable swiping...
    $("table").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount) {
            $('#grid').text("You swiped " + direction + " for " + distance + " pixels");
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
    $("table").on("click", function() {
        alert("Level 1");
        $("#00").text("laser").addClass("laser");
        $("#60").text("laser").addClass("laser");
        $("#38").text("laser").addClass("laser");
    });
    
});