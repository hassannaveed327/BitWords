const footerform = document.getElementById("contact-form-section"),
    footerusername = document.getElementById("fcont_name"),
    footeremail = document.getElementById("fcont_email"),
    footerphone = document.getElementById("cont_phpne"),
    footeruRequirement = document.getElementById("fuser-req"),
    fcountriesData = document.getElementById("fcont_country"),
    fcaptcha = document.getElementById("f-quiz-ans");
function fshowError(e, t) {
    if ("requirement" == e.name) {
        e.closest("div.form-text-cont").classList.add("verror");
    }
    const a = e.closest("div.user-input");
    a.classList.add("verror");
    a.querySelector("small").innerText = t;
}
function fdoNotingonFocus(e) {
    e.parentElement.className = "user-input form-control";
}
function fcheckLettersSpacesDots(e) {
    return /^[a-zA-Z\s.,]+$/.test(e);
}
function fshowSucces(e) {
    if ("requirement" == e.name) {
        const t = e.closest("div.form-text-cont");
        t.classList.add("success"), t.classList.remove("verror");
    }
    const t = e.closest("div.user-input");
    t.classList.add("success"), t.classList.remove("verror");
    t.querySelector("small").innerText = "success";
}
function fcheckEmail(e) {
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())
        ? fshowSucces(e)
        : "" == e.value
        ? fshowError(e, "Please Fill Email")
        : fshowError(e, "Please fill valid email address");
}
function fphonenumber(e) {
    /^[A-Za-z0123456789()\s.+-]+$/.test(e.value.trim()) && e.value.length >= 6 ? fshowSucces(e) : "" == e.value ? fshowError(e, "Please Fill Phone", "phone-error") : fshowError(e, "Please Fill Valid Phone Number", "phone-error");
}
function fcheckCont(e) {
    fcheckLength(fcountriesData, 1, 60);
}
function fws_checkphonenumber(e) {
    -1 !== [46, 8, 9, 27, 13, 187, 189, 16, 17].indexOf(e.keyCode) ||
        (65 == e.keyCode && !0 === e.ctrlKey) ||
        (86 == e.keyCode && !0 === e.ctrlKey) ||
        (67 == e.keyCode && !0 === e.ctrlKey) ||
        (88 == e.keyCode && !0 === e.ctrlKey) ||
        (e.keyCode >= 35 && e.keyCode <= 39) ||
        ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault());
}
function fcheckEmailEvent(e) {
    fcheckEmail(footeremail);
}
function fcheckUseName(e) {
    fcheckLength(footerusername, 2, 49), !1 === fcheckLettersSpacesDots(footerusername.value.trim()) && fshowError(footerusername, "Please Fill Name");
}
function fcheckPhone(e) {
    fcheckLength(footerphone, 6, 30), fphonenumber(footerphone);
}
function fcheckfoucsoutPhone(e) {
    fphonenumber(footerphone);
}
function fcheckURequirement(e) {
    loadReCapJS();
    fcheckLength(footeruRequirement, 3, 1500);
}
function fcheckRequired(e) {
    e.forEach(function (e) {
        let t = e.value.trim();
        /^[A-Za-z0-9!@#$%^&*()".,;:{}<>?\[\]\-+=' ]{2,}/.test(t)
            ? (fcheckEmail(footeremail), fcheckLength(footerphone, 6, 18), fvalidateMquiz())
            : "fullname" == e.name
            ? fshowError(e, "Please Fill Name")
            : "requirement" == e.name
            ? fshowError(e, "Please Fill Requirement")
            : "phone" == e.name
            ? fshowError(e, "Please Fill Phone")
            : "user-country" == e.name
            ? fshowError(e, "Please Fill Country")
            : "email" == e.name
            ? fshowError(e, "Please Fill Email")
            : "captcha" == e.name
            ? fvalidateMquiz()
            : fshowError(e, "This Field is required");
    });
}
function fcheckLength(e, t, a) {
    let n = e.value.trim();
    e.value.length < t
        ? "fullname" == e.name
            ? fshowError(e, "Please Fill Name")
            : "requirement" == e.name
            ? fshowError(e, "Please Fill Requirement")
            //: "phone" == e.name ? fshowError(e, "Please Fill Phone")
            : "user-country" == e.name
            ? fshowError(e, "Please Fill Country")
            : "email" == e.name && fshowError(e, "Please Fill Email")
        : e.value.length > a || fshowSucces(e);
}
function fvalidateMquiz() {
    let fque = document.getElementById("f-quizz").textContent,
        fans = document.getElementById("f-quiz-ans").value,
        fqerror = document.getElementById("fcaptchaerror");
    return eval(fque) == fans ? ((fqerror.textContent = ""), !0) : ((fqerror.textContent = "Invalid Answer"), !1);
}
function fgetFieldName(e) {
    return e.id.charAt(0).toUpperCase() + e.id.slice(1);
}
function fvcSpaceChecker(e) {
    return !!/^[A-Za-z0-9!@#$%^&*()".,;:{}<>?\[\]\-+=' ]{2,}/.test(e);
}

async function fvcCmnFormValidation(){
    if (
        (fcheckRequired([footerusername, footeremail, fcountriesData, footeruRequirement, fcaptcha]),
        !0 !== fvcSpaceChecker(footeremail.value.trim()) ||
            !0 !== fvcSpaceChecker(footerusername.value.trim()) ||
            !0 !== fvcSpaceChecker(fcountriesData.value.trim()) ||
            //!0 !== fvcSpaceChecker(footerphone.value.trim()) ||
            !0 !== fvcSpaceChecker(footeruRequirement.value.trim()))
    )
    return !1;

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(footeremail.value.trim()))
        return fshowError(footeremail, "Please Fill Email"), !1;
    
    //if (footerphone.value.length < 6) return fshowError(footerphone, "Phone Number is not valid"), !1;
    
    if (!1 === fvalidateMquiz()) return !1;

    let rcToken = new Promise( (resolve, reject) => {                  
        grecaptcha.ready(function(){
            grecaptcha.execute('6LdOHZcjAAAAAPTetYrbEoZhdueRkAVucKDbOj7S', {action:'validate_captcha'}).then(function(token){
                resolve( token );
            });
        });
    });

    let pxlToken = await rcToken;
    if( pxlToken ){
        let rcFld1 = document.getElementById('g-recaptcha-response');
        if( rcFld1 ){
            rcFld1.value = pxlToken;
        }
    }
    var e = document.getElementById("contact-form-section"),
    t = document.getElementById("submitButton");
    e.classList.add("in-process"), (t.value = "Please wait..."), (t.disabled = !0), e.submit();
}

function fws_validateStr(e) {
    let t = e.keyCode || e.charCode;
    if (footerusername.value.length >= 50 && ![8, 46, 37, 39].includes(t)) return e.preventDefault(), !1;
    var a = e || window.event;
    if ("paste" === a.type) n = event.clipboardData.getData("text/plain");
    else var n = a.keyCode || a.which;
    if ((n > 64 && n < 91) || 8 == n || 46 == n || 9 == n || 32 == n || 37 == n || 39 == n || 38 == n || 40 == n) return !0;
    e.preventDefault();
}
function fws_validatecountry(e) {
    let t = e.keyCode || e.charCode;
    if (fcountriesData.value.length >= 50 && ![8, 46, 37, 39].includes(t)) return e.preventDefault(), !1;
    var a = e || window.event;
    if ("paste" === a.type) n = event.clipboardData.getData("text/plain");
    else var n = a.keyCode || a.which;
    if ((n > 64 && n < 91) || 8 == n || 46 == n || 9 == n || 32 == n || 37 == n || 39 == n || 38 == n || 40 == n) return !0;
    e.preventDefault();
}
function fcheckPhonenumber(e) {
    let t = [46, 8, 9, 27, 13, 187, 189, 16, 17];
    t.includes(e.keyCode, t) ||
        (65 == e.keyCode && !0 === e.ctrlKey) ||
        (86 == e.keyCode && !0 === e.ctrlKey) ||
        (67 == e.keyCode && !0 === e.ctrlKey) ||
        (88 == e.keyCode && !0 === e.ctrlKey) ||
        (e.keyCode >= 35 && e.keyCode <= 39) ||
        ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault());
}
footerusername.addEventListener("keyup", fcheckUseName),
    footerusername.addEventListener("keypress", fcheckUseName),
    footerusername.addEventListener("keydown", fws_validateStr),
    footerusername.addEventListener("focusout", fcheckUseName),
    fcountriesData.addEventListener("keyup", fcheckCont),
    fcountriesData.addEventListener("keypress", fcheckCont),
    fcountriesData.addEventListener("keydown", fws_validatecountry),
    fcountriesData.addEventListener("focusout", fcheckCont),
    
    /*
    //Optional Phone field
    footerphone.addEventListener("keyup", fcheckPhone),
    footerphone.addEventListener("keypress", fcheckPhone),
    footerphone.addEventListener("keydown", fws_checkphonenumber),
    footerphone.addEventListener("focusout", fcheckPhone),
    */
    
    footeremail.addEventListener("keyup", fcheckEmailEvent),
    footeremail.addEventListener("keypress", fcheckEmailEvent),
    footeremail.addEventListener("keydown", fcheckEmailEvent),
    footeremail.addEventListener("focusout", fcheckEmailEvent),
    footeruRequirement.addEventListener("keyup", fcheckURequirement),
    footeruRequirement.addEventListener("keypress", fcheckURequirement),
    footeruRequirement.addEventListener("keydown", fcheckURequirement),
    footeruRequirement.addEventListener("focusout", fcheckURequirement),
    footeruRequirement.addEventListener("focusin", fcheckURequirement),
    fcaptcha.addEventListener("focusout", fvalidateMquiz),
    document.addEventListener(
        "click",
        function (e) {
            e.target.matches("div.select-box, a.select-first") ||
                ([].forEach.call(document.querySelectorAll("ul.in-options.open-close"), function (e) {
                    e.classList.contains("open-close") && e.classList.remove("open-close");
                }),
                [].forEach.call(document.querySelectorAll("span.arrow-btn"), function (e) {
                    e.classList.contains("rotate") && e.classList.remove("rotate");
                }));
        },
        !1
    );
var jQuizExists = document.getElementById("f-quizz");
function fgenerateWsQuizz() {
    let e = Math.floor(9 * Math.random()) + 1,
        t = Math.floor(9 * Math.random()) + 1;
    document.getElementById("f-quizz").textContent = e + " + " + t;
}
function fcap_limit(e, t) { 
    //loadReCapJS();
    var a = e || window.event;
    if ("paste" === a.type) n = event.clipboardData.getData("text/plain");
    else {
        var n = a.keyCode || a.which;
        n = String.fromCharCode(n);
    }
    (!/[0-9]|\./.test(n) || t.value.length > 1) && ((a.returnValue = !1), a.preventDefault && a.preventDefault());
}
function fws_numcheck(e, t) {
    var a = e || window.event;
    if ("paste" === a.type) n = event.clipboardData.getData("text/plain");
    else {
        var n = a.keyCode || a.which;
        n = String.fromCharCode(n);
    }
    (!/^\d+$/.test(n) || t.value.length > 2) && ((a.returnValue = !1), a.preventDefault && a.preventDefault());
}
function fupload_file(e) {
    e.preventDefault(), fajax_file_upload(e.dataTransfer.files);
}
function ffile_explorer() {
    document.getElementById("selectfile").click(),
        (document.getElementById("selectfile").onchange = function () {
            (files = document.getElementById("selectfile").files), fajax_file_upload(files);
        });
}
function fajax_file_upload(e) {
    let t = document.getElementById("fgloader");
    if ((t.classList.add("active"), null != e)) {
        var a = new FormData();
        for (i = 0; i < e.length; i++) a.append("file[]", e[i]);
        var n = new XMLHttpRequest();
        n.open("POST", "ajax.php", !0),
            (n.onload = function (e) {
                200 == n.status || alert("Error " + n.status + " occurred when trying to upload your file."), t.classList.add("active");
            }),
            n.send(a);
    }
}
jQuizExists && fgenerateWsQuizz();
let fdropArea = document.getElementById("drop-areas");
function fpreventDefaults(e) {
    e.preventDefault(), e.stopPropagation();
}
function fhighlight(e) {
    fdropArea.classList.add("highlight");
}
function funhighlight(e) {
    fdropArea.classList.remove("active");
}
function fhandleDrop(e) {
    fhandleFiles(e.dataTransfer.files);
}
["dragenter", "dragover", "dragleave", "drop"].forEach((e) => {
    fdropArea.addEventListener(e, fpreventDefaults, !1), document.body.addEventListener(e, fpreventDefaults, !1);
}),
    ["dragenter", "dragover"].forEach((e) => {
        fdropArea.addEventListener(e, fhighlight, !1);
    }),
    ["dragleave", "drop"].forEach((e) => {
        fdropArea.addEventListener(e, funhighlight, !1);
    }),
    fdropArea.addEventListener("drop", fhandleDrop, !1);
let fuploadProgress = [],
    fprogressBar = document.getElementById("fprogress-bar");
function finitializeProgress(e) {
    (fprogressBar.value = 0), (fuploadProgress = []);
    for (let t = e; t > 0; t--) fuploadProgress.push(0);
}
function fsetFileError(e) {
    let t = document.getElementById("ffile-type-error");
    (t.innerHTML = e),
        setTimeout(function () {
            t.innerHTML = "";
        }, 3e3);
}
function fupdateProgress(e, t) {
    fuploadProgress[e] = t;
    let a = fuploadProgress.reduce((e, t) => e + t, 0) / fuploadProgress.length;
    fprogressBar.value = a;
}
function fhandleFiles(e, t) {
    fsetFileError("");
    let a = document.getElementById("fuplcounter");
    if (parseInt(a.value) >= 10) return void fsetFileError("You can not upload more then 10 media files.");
    let n = e.length + parseInt(a.value);
    if (parseInt(n) > 10) return void fsetFileError("You can not upload more then 10 media files.");
    let o = document.getElementById("fUploadedfilename").value;
    if (o) {
        if (o.split(",").length > 10) return void fsetFileError("You can not upload more then 10 media files.");
    }
    e.length > 10 ? fsetFileError("You can not upload more then 10 media files.") : (finitializeProgress((e = [...e]).length), e.forEach(fuploadFile));
}
function fremoveMe(e, t) {
    let a = document.getElementById("fuplcounter");
    fsetFileError("");
    const n = new XMLHttpRequest();
    n.open("GET", pxlObj.web_url+"/footer_delete_file.php?delete=1&imageName=" + t, !0),
        (n.onreadystatechange = function () {
            if (4 == this.readyState && 200 == this.status) {
                let o = parseInt(a.value);
                o--, (a.value = o);
                var n = document.getElementById("fUploadedfilename").value;
                (newStr = n.replace(t, "")),
                    (document.getElementById("fUploadedfilename").value = newStr),
                    console.log(this.responseText),
                    e.parentNode.remove(),
                    0 == a.value && document.getElementById("fgloader").classList.remove("show-me");
            }
        }),
        n.send();
}

function fuploadFile(e, t) {
    fsetFileError("");
    let a = document.getElementById("fuplcounter");
    if (parseInt(a.value) >= 10) return void fsetFileError("You can not upload more then 10 media files.");
    let n = document.getElementById("fgloader");
    n.classList.add("show-me"), n.classList.add("active");
    if (e.size / 1024 / 1024 > 20) return fsetFileError("ERROR Uploaded document exceeds the maximum size limit of 20 MB"), void n.classList.remove("active");
    var o = new FormData();
    o.append("ffile", e);
    var r = new XMLHttpRequest();
    r.open("POST", pxlObj.web_url+"/footer-file-uploader.php", !0),
        (r.onload = function (t) {
            if (200 == r.status) {
                let t = JSON.parse(r.responseText);
                if ((console.log(t), 1 == t.status)) {
                    let n = parseInt(a.value);
                    n++, (a.value = n);
                    let o = document.getElementById("fUploadedfilename").value;
                    document.getElementById("fUploadedfilename").value = "" == o ? t.file : o + t.file;
                    let r = new FileReader();
                    r.readAsDataURL(e),
                        (r.onloadend = function () {
                            let a = document.createElement("div"),
                                n = "";
                            switch ((console.log(e.type), e.type)) {
                                case "application/pdf":
                                    n = pxlObj.tpl_url+"/dev-img/pdf_gy.png";
                                    break;
                                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                                case "text/plain":
                                    n = pxlObj.tpl_url+"/dev-img/doc_gy.png";
                                    break;
                                case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                                case "application/vnd.ms-excel":
                                    n = pxlObj.tpl_url+"/dev-img/xls_gy.png";
                                    break;
                                case "image/vnd.adobe.photoshop":
                                    n = pxlObj.tpl_url+"/dev-img/psd_gy.png";
                                    break;
                                case "application/x-zip-compressed":
                                case "application/zip":
                                    n = pxlObj.tpl_url+"/dev-img/zip_gy.png";
                                    break;
                                default:
                                    n = pxlObj.tpl_url+"/dev-img/def-thumb.png";
                            }
                            e.size > 1e7 && "image/jpeg" == e.type
                                ? (n = pxlObj.tpl_url+"/dev-img/jpg_gy.png")
                                : e.size > 1e7 && "image/png" == e.type && (n = pxlObj.tpl_url+"/dev-img/png_gy.png"),
                                (a.innerHTML = '<img src="' + n + '" height="55" width="55"><button type="button" onclick="return fremoveMe(this,this.value);" value="' + t.file + '">X</button></span>'),
                                document.getElementById("fgallery").appendChild(a);
                        });
                } else fsetFileError(t.message);
            } else console.log("error");
            n.classList.remove("active");
        }),
        r.send(o);
}
var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "zMonaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
function autocomplete(e, t) {
    var a;
    function n(e) {
        if (!e) return !1;
        !(function (e) {
            for (var t = 0; t < e.length; t++) e[t].classList.remove("autocomplete-active");
        })(e),
            a >= e.length && (a = 0),
            a < 0 && (a = e.length - 1),
            e[a].classList.add("autocomplete-active");
    }
    function o(t) {
        for (var a = document.getElementsByClassName("autocomplete-items"), n = 0; n < a.length; n++) t != a[n] && t != e && a[n].parentNode.removeChild(a[n]);
    }
    e.addEventListener("input", function (n) {
        var r,
            i,
            l,
            s = this.value;
        if ((o(), !s)) return !1;
        (a = -1), (r = document.createElement("DIV")).setAttribute("id", this.id + "autocomplete-list"), r.setAttribute("class", "autocomplete-items"), this.parentNode.appendChild(r);
        var c = 0;
        for (l = 0; l < t.length; l++) {
            var u = new RegExp(s, "i");
            t[l].match(u) &&
                (c++,
                ((i = document.createElement("DIV")).innerHTML = "<strong>" + t[l].substr(0, s.length) + "</strong>"),
                (i.innerHTML += t[l].substr(s.length)),
                (i.innerHTML += "<input type='hidden' value='" + t[l] + "'>"),
                i.addEventListener("click", function (t) {
                    (e.value = this.getElementsByTagName("input")[0].value), o();
                }),
                r.appendChild(i));
        }
        c > 0 ? r.setAttribute("class", "autocomplete-items has-data") : r.setAttribute("class", "autocomplete-items");
    }),
        e.addEventListener("keydown", function (e) {
            var t = document.getElementById(this.id + "autocomplete-list");
            t && (t = t.getElementsByTagName("div")), 40 == e.keyCode ? (a++, n(t)) : 38 == e.keyCode ? (a--, n(t)) : 13 == e.keyCode && (e.preventDefault(), a > -1 && t && t[a].click());
        }),
        document.addEventListener("click", function (e) {
            o(e.target);
        });
}
autocomplete(document.getElementById("fcont_country"), countries);