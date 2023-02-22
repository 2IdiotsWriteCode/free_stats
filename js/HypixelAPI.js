//t
function HypixelApi(name, uuid){
    api_key = "1d962e19-2887-47c3-8305-72992c0f22f8"

    var Profile = JSON.parse(httpGet("https://api.hypixel.net/player?key=" + api_key +"&uuid=e2e0fb12-9abe-4723-9a82-3864df6a07bb"));
    return Profile;

}