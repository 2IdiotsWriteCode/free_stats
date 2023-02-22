function GetData(form) {
    var name = form.name.value;
    var MojangData = MojangAPIGet(name)
    var RealName = MojangData.name;
    var uuid = MojangData.uuid;

    //WynncraftData = WynncraftAPI(RealName, uuid);
    HypixelData = HypixelApi(RealName, uuid);
    console.log(MojangData);

    // General tab
    document.getElementById("name").innerHTML = RealName;
    document.getElementById("uuid").innerHTML = uuid;

    //Hypixel tab
    document.getElementById("HypixelName").innerHTML = RealName;
    document.getElementById("Level").innerHTML = "Level: " + Math.floor((Math.sqrt(HypixelData.player.networkExp + 15312.5) - 125/Math.sqrt(2))/(25*Math.sqrt(2)));
    document.getElementById("Karma").innerHTML = "Karma: " + HypixelData.player.karma;

    //console.log(WynncraftData);
}