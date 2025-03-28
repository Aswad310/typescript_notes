function handleMsg(log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg);
            break;
        case "info":
            console.log(log.msg);
            break;
        case "success":
            console.log(log.msg);
            break;
    }
}
var res1 = handleMsg({
    type: "warning",
    msg: "warning",
});
console.log(res1);
