function WynncraftAPI(name, uuid){
    var Profile = JSON.parse(httpGet("https://api.wynncraft.com/player/" + name + "/stats"));
    console.log(profile)

    return "shit";
}

