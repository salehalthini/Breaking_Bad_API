// ############################################################################
//                       Made with love by Salehalthi
// #############################################################################
// #Github:salehalthini
// #Insta:rh.0w
if (!document.cookie.match(/(?:^|; *)alert_shown=1/)) {
   
alert("#معلومة في حالة اردت مشاهدت باقي الشخصيات قم بأغلاق المربع")
    document.cookie = "alert_shown=1;max-age=" + 60 * 60 * 24 * 365;
}

async function ssss(){
    const response = await fetch("https://www.breakingbadapi.com/api/character/random");
    const json = await response.json();
    document.querySelector("#contact h1").innerHTML =json[0].name;
    document.querySelector("#contact h4").innerHTML =json[0].birthday;
    document.querySelector("#contact h3").innerHTML =json[0].nickname;
    document.getElementById("imgd").style.display = "block";
    document.querySelector("#contact img").src =json[0].img;

}
document.getElementById('buttonn1').onclick = ssss;
async function get(){
const response = await fetch("https://www.breakingbadapi.com/api/characters/1");
const json = await response.json();
const { value: text } = await Swal.fire({
    input: 'text',
    title: 'ابحث عن معلومات   الشخصية الخيالية والتر وايت ',
    html: ' واحد الاسم #' + '<br>' + ' اثنين تاريخ الميلاد #' + '<br>' + ' ثلاثة الصورة #' + '<br>' + 'اربعة عرض الكل #',
    confirmButtonColor: '',
    confirmButtonText: 'عرض النتيجة',
    showCloseButton: true,
    inputPlaceholder: 'ادخل الرقم',
    footer: '<a href=""> قم بأغلاق المربع للبحث عن الشخصيات بشكل عشوائي</a>'
  })
if (text === "1"){
    document.querySelector("#contact h1").innerHTML =json[0].name;
    document.getElementById("fake").style.display = "none";
    document.getElementById("buttonn1").style.display = "none";
}else if(text==="2"){
    document.querySelector("#contact h4").innerHTML =json[0].birthday;
    document.getElementById("fake").style.display = "none";
    document.getElementById("buttonn1").style.display = "none";
}else if(text === "3"){
    document.getElementById("imgd").style.display = "block"
    document.querySelector("#contact img").src =json[0].img;
    document.getElementById("fake").style.display = "none";
    document.getElementById("buttonn1").style.display = "none";
   
}else if(text === "4"){
    document.getElementById("buttonn1").style.display = "none";
    document.querySelector("#contact h1").innerHTML =json[0].name;
    document.querySelector("#contact h4").innerHTML =json[0].birthday;
    document.getElementById("imgd").style.display = "block";
    document.querySelector("#contact img").src =json[0].img;
    document.getElementById("fake").style.display = "none";
}
else{
    document.getElementById("buttonn").style.display = "none";
    document.getElementById("buttonn1").style.display = "block";
    const response = await fetch("https://www.breakingbadapi.com/api/character/random");
    const json = await response.json();
    document.querySelector("#contact h1").innerHTML =json[0].name;
    document.querySelector("#contact h4").innerHTML =json[0].birthday;
    document.querySelector("#contact h3").innerHTML =json[0].nickname;
    document.getElementById("imgd").style.display = "block";
    document.querySelector("#contact img").src =json[0].img;

    
}


}

get()
 function sss(){
     get()

}


document.getElementById('buttonn').onclick = sss;
