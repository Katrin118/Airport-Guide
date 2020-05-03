var v = 10;
function calculatetime() {
    var current_location_input = document.getElementById("current_location").value;
    var target_location_input = document.getElementById("target_location").value;
    var current_location = distances[current_location_input]
    var target_location = distances[target_location_input]
    var time_left = parseInt(Math.abs(current_location - target_location)/v);
    return time_left;
}

function show_time(){
    var time = calculatetime();
    document.getElementById('tleft').innerHTML = time ;
}

function recomendations(){
    var node;
    var textnode;
    time = calculatetime();
    remaining_time_input = document.getElementById("remaining_time").value;
    var keys = Object.keys(possible_location);
    for (const key of keys) {
      if (remaining_time_input > possible_location[key] / v){
        var recomendation = document.getElementById("recomendation");
        node = document.createElement("LI");
        textnode = document.createTextNode(key + " - " + possible_location[key] + "km");
        node.appendChild(textnode);
        document.getElementById("recomendation").appendChild(node);
      }
    }
}

