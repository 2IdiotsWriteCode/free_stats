function GetData(form) {
    var name = form.name.value;
    var MojangData = MojangAPIGet(name)
    var RealName = MojangData.name;
    var uuid = MojangData.uuid;

    WynncraftData = WynncraftAPI(RealName, uuid);
    //console.log(MojangData);
    console.log(WynncraftData);
}