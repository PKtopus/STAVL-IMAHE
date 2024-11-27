var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);

var content_section = document.getElementById("contents")
var small_icons_section = document.getElementById("small_icons")
var startBtn = document.getElementById("startBtn")
var typeTitle = document.getElementById("type_title")
var settingsBtn = document.getElementById("settings")
var settingsExitBtn = document.getElementById("settingsExit")
var credsContent = document.getElementById("creditcontent")
var credits = document.getElementById("credits")
var icon1 = document.getElementById("ic_1");
var icon2 = document.getElementById("ic_2");
var icon3 = document.getElementById("ic_3");

var qr_codes_container = document.getElementById("qr_codes");
var qr_pic = document.getElementById("LM")
var qr_exitBtn = document.getElementById("qr_code_exit")

function change_icons_width_and_height(size){
    icon1.style.width = size;
    icon1.style.height = size;
    icon2.style.width = size;
    icon2.style.height = size;
    icon3.style.width = size;
    icon3.style.height = size;
}

if (window.innerWidth <= 400){
    content_section.style.height = "450px"
    change_icons_width_and_height("90px")
    typeTitle.style.position = "relative"
    typeTitle.style.top = '-40px'
}

if (window.innerWidth <= 380){
    typeTitle.style.fontSize = "45px"
    content_section.style.height = "300px"
    typeTitle.style.position = "relative"
    typeTitle.style.top = '-60px'
    change_icons_width_and_height("85px")

    startBtn.style.fontSize = "35px"
}
if (window.innerWidth >= 700 && window.innerWidth <= 799){
    content_section.style.height = "550px"
    change_icons_width_and_height("155px")

    icon1.style.marginLeft = "9%"
    icon2.style.marginLeft = "9%"
    icon3.style.marginLeft = "9%"
}

if (window.innerWidth >= 700 && window.innerWidth <= 799){
    content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg1.png)";
}

if (window.innerWidth >= 800 && window.innerWidth <= 899 ){
    content_section.style.height = "600px"
    startBtn.style.top = "80%"
}
if (window.innerWidth >= 1500){
    content_section.style.height = "380px"
    startBtn.style.top = "75%"
} 
var small_icons_height = small_icons_section.getBoundingClientRect().height;
var height = content_section.getBoundingClientRect().bottom;
var set_height = ((window.innerHeight - height) - small_icons_section.getBoundingClientRect().y) + "px";

var startBtn_rect = startBtn.getBoundingClientRect();
var LM_rect = qr_pic.getBoundingClientRect();

document.documentElement.style.setProperty("--small_icons_height", set_height)
document.documentElement.style.setProperty("--content_part",height+"px");
document.documentElement.style.setProperty("--startBtnX",(startBtn_rect.x + (startBtn_rect.width/2)) + "px")
document.documentElement.style.setProperty("--startBtnY",startBtn_rect.y+"px")

var cur_mode = "BB";

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 25);
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function to_left(element){
    var init_width = 100;
    var init_left = 50;
    var timer = setInterval(function (){
        if (init_width <= 0){
            to_right(element)
            clearInterval(timer)
        }
        
        element.style.width = init_width +"%"
        init_width -= 4
    },10)
}
function to_right(element){
    var init_width = 0;
    var init_left = window.innerWidth;
    var timer = setInterval(function() {
        if (init_width == window.innerWidth){
            clearInterval(timer)
        }
        console.log(init_width)
        element.style.width = init_width +"%"
        
        init_width += 4
    })
}

var delay = 50;

icon1.onclick = function (){
    setTimeout(unfade(content_section),delay)
    if (window.innerWidth <= 600){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg1_1.png)"

    } else if (window.innerWidth >= 700){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg1.png)"
    }
    icon1.style.boxShadow = "0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db";
    icon2.style.boxShadow = "none"
    icon3.style.boxShadow = "none"

    typeTitle.innerHTML = "Class Bulletin Board"
    cur_mode = "BB";
}
icon2.onclick = function (){
    content_section.style.opacity = "0"
    setTimeout(unfade(content_section),delay)
    if (window.innerWidth <= 600){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg2_2.png)"
        typeTitle.innerHTML = "Class <br>Materials"

    } else if (window.innerWidth >= 700){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg2_3.png)"
        typeTitle.innerHTML = "Class Materials"
    }
    icon1.style.boxShadow = "none"
    icon2.style.boxShadow = "0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db";
    icon3.style.boxShadow = "none"
    cur_mode = "CM"
}
icon3.onclick = function (){
    content_section.style.opacity = "0"
    setTimeout(unfade(content_section),delay)
    if (window.innerWidth <= 600){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg3.png)"
        typeTitle.innerHTML = "Quizizz <br>Learning"

    } else if (window.innerWidth >= 700){
        content_section.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(bg3_2.png)"
        typeTitle.innerHTML = "Quizizz Learning"
    }
    icon1.style.boxShadow = "none"
    icon2.style.boxShadow = "none"
    icon3.style.boxShadow = "0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db";
    cur_mode = "QL"
}

settingsBtn.onclick = function () {
    credits.style.visibility = "visible"
    credits.style.width = "100%"
    credits.style.borderRadius = "0"
    credits.style.top = "0"
    credits.style.left = "0"

    unfade(credsContent)
}
settingsExitBtn.onclick = function () {
    fade(credsContent)
    credits.style.width = "0"
    credits.style.borderRadius = "100px"
    credits.style.top = "-20px"
    credits.style.left = "-20px"
}

startBtn.onclick = function (){
    if (cur_mode == "BB"){
        window:open("https://docs.google.com/presentation/d/15_spxF8YuE8_SvJ1gQdyhNQydOnnrKOT-MVmmiy__vA/edit#slide=id.p",'_blank').focus()
    } 
    if (cur_mode == "CM"){
        qr_codes_container.style.visibility = "visible"
        qr_codes_container.style.top = "0"
        qr_codes_container.style.left = "0"
        qr_codes_container.style.width = "100%"
        qr_codes_container.style.height = "100%"
        qr_codes_container.style.borderRadius = "0"
        qr_codes_container.style.opacity = "1"
        
        qr_exitBtn.onclick = function () {
            qr_codes_container.style.top = startBtn_rect.y + "px"
            qr_codes_container.style.left = (startBtn_rect.x + (startBtn_rect.width/2)) + "px"
            qr_codes_container.style.width = "0"
            qr_codes_container.style.height = "0"
            qr_codes_container.style.borderRadius = "100px"
        }
    }
    if (cur_mode == "QL"){
        window:open("https://l.messenger.com/l.php?u=https%3A%2F%2Fquizizz.com%2Fjoin%3FshowGroupJoin%3Dtrue%26t%3D9yjXUozY5Ll0kimJZp66-QwLELbRbrtVRL4hG14cB2zgexU8qFeq33PbGSnddPAlma7TZqIwMCorXoeUk82KJL3Tz6WrlUDFswGGoAW4ZnC3xc2WTLGed4Dcy5DkOumN9lzqixqOgn8-G7G0E3uz5sssG5oz3hxT90g.RID-91XZerjTXEZS4tjMag.WV5eAeJ9DnEilecz&h=AT1CD72eBZId4rZXz_7lDSeAzNbcV3cqgYgN1k65Myda6VJIKJv3uVRyPjz3BUuwZAGEZDl2tHE8HKWIm6jRRRZPh3QkUlcxkPjJErSvDSRqS84XKhcHVuFBRlLENy6qIhFudQ",'_blank').focus()
    }
}