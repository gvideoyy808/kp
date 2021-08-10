    var system = {
        win: false,
        mac: false,
        xll: false
    };
    var p = navigator.platform;
    var us = navigator.userAgent.toLowerCase();
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {
    var iframe_url='/404.html';
    $("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>该网站暂时无法进行访问</title><style>body{position:static !important;}body *{ visibility:hidden; }</style> ');
    $("body").empty();
    $(document).ready(function () {
    $("body").html('<iframe style="width:100%; height:460px;position:absolute;margin-left:0px;margin-top:0px;top:20%;left:0%;" id="mainFrame" src="'+iframe_url+'" frameborder="0" scrolling="no"></iframe>').show();
    $("body *").css("visibility", "visible");
  });
}
document.writeln("<script type=\'text/javascript\'>");
document.writeln("//判断F12审查元素");
document.writeln("function fuckyou() {");
document.writeln("window.close(); //关闭当前窗口(防抽)");
document.writeln("window.location = \'about:blank\'; //将当前窗口跳转置空白页");
document.writeln("}");
document.writeln(" ");
document.writeln("function ck() {");
document.writeln("console.profile();");
document.writeln("console.profileEnd();");
document.writeln("//我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！");
document.writeln("if(console.clear) {");
document.writeln("console.clear()");
document.writeln("};");
document.writeln("if(typeof console.profiles == \'object\') {");
document.writeln("return console.profiles.length > 0;");
document.writeln("}");
document.writeln("}");
document.writeln(" ");
document.writeln("function hehe() {");
document.writeln("if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == \'object\' && typeof opera.postError == \'function\' && console.profile.length > 0)) {");
document.writeln("fuckyou();");
document.writeln("}");
document.writeln("if(typeof console.profiles == \'object\' && console.profiles.length > 0) {");
document.writeln("fuckyou();");
document.writeln("}");
document.writeln("}");
document.writeln("hehe();");
document.writeln("window.onresize = function() {");
document.writeln("if((window.outerHeight - window.innerHeight) > 200)");
document.writeln("//判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵");
document.writeln("fuckyou();");
document.writeln("}");
document.writeln("</script>");
