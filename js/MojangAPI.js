function MojangAPIGet(name){

    var Profile = JSON.parse(httpGet("https://api.ashcon.app/mojang/v2/user/" + name));
    console.log(Profile);
    const RealName = Profile["username"];
    const uuid = Profile["uuid"];
    data = {name:RealName, uuid:uuid}

    return data;
}