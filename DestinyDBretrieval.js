function ajsearch() {
  // (A) GET SEARCH TERM
  var data = new FormData();
  data.append("search", document.getElementById("search").value);
  data.append("ajax", 1);
 
  // (B) AJAX SEARCH REQUEST
  fetch("searchdb.php", { method:"POST", body:data })
  .then(res => res.json()).then((results) => {
    var wrapper = document.getElementById("results");
    if (results.length > 0) {
      wrapper.innerHTML = "DestinyDB.html";
      for (let res of results) {
        let line = document.createElement("div");
        line.innerHTML = `${res["Armor_Name"]} - ${res["Weapon_Name"]}- ${res["Ghost_Name"]}`;
        wrapper.appendChild(line);
      }
    } else { wrapper.innerHTML = "No results found"; }
  });
  return false;
}