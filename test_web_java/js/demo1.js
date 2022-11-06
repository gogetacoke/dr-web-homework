//点击什么按钮就会将对应按钮代表的值显示在input内
function shu(s) {
    var a = "#input"
    $(a).val($("#input").val() + s);
}

//当点击计算按钮的时候，将表单内value的值进行计算
function suan() {
    $(a).val(eval($("#input").val()))
}

//当点击清除按钮的时候将input的内容清空
function qing() {
    $("#input").val(" ");
}
