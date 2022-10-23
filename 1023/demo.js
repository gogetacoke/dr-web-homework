function func() {
    alert("我来了！！");
}


function toto() {
    var content = document.getElementById("ip").value

    if (content === "") {
        confirm("请输入内容吧！！");
    } else {
        confirm(content);
    }

}