// Get url without the pathname details
var url = window.location.host
// regex to match common letters/numbers
var pattern = /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
scam = false
// loop through each letter of URL to see if its real.
const field = document.createElement("div");
field.style.cssText = 'font-size: 24px;font-weight:bold;background-color:#D5D5D5; color: #8A8A8A; margin:10px 0; border-radius: 6px;overflow: hidden; padding: 5px 15px; overflow-x: scroll;';

for(l = 0; l < url.length; l++) {
    if (!pattern.test(url[l])) {
        field.innerHTML += "<span style=\"color:#F80000;\">" + url[l] + "</span>"
        scam = true
    } else {
        field.innerHTML += url[l]
    }
}
if (scam) {
    const beastImage = document.createElement("div");
        beastImage.style.cssText = 'background-color:#AF1F00;color: #FFFFFF;text-align:center;padding:40px 10px;font-family: \'Arial\' !important !important;border:20px solid #000000;';
        document.body.prepend(beastImage);

        const content = document.createElement("div");
        content.style.cssText = 'max-width: 680px;margin: 0 auto;'
        beastImage.appendChild(content)
        // Create heading
        const head = document.createElement("h1");
        head.style.cssText = 'font-size: 40px;font-weight:bold;margin:0;color:#FFFFFF;'
        head.innerHTML = "&#9888; WARNING!";
        content.appendChild(head);

        // Create subtitle
        const subtitle = document.createElement("div");
        subtitle.style.cssText = 'font-size: 18px;font-weight:bold;'
        subtitle.innerHTML = "The website you are about to visit may not be authentic!";
        content.appendChild(subtitle);

        // Create description
        const des = document.createElement("div");
        des.style.cssText = 'font-size: 18px;margin-top: 10px;'
        des.innerHTML = "We have detected that this website is using deceptive characters that may be trying to appear as plain English as a possible scam against you.";
        content.appendChild(des)
        
        // HR
        const hr = document.createElement("hr");
        hr.style.cssText = 'border: none; border-top: 1px solid #FFF;margin:20px 0;';
        content.appendChild(hr)

        const secondt = document.createElement("div");
        secondt.style.cssText = 'font-size: 24px;font-weight:bold;'
        secondt.innerHTML = "The characters in question are highlighted below";
        content.appendChild(secondt);

        content.appendChild(field)

        const disclaimer = document.createElement("div");
        disclaimer.style.cssText = 'font-size: 18px;'
        disclaimer.innerHTML = "If you truly trust this website, you may continue on your own terms, otherwise for your safety, please exit this page immediately."
        content.appendChild(disclaimer);

        const learnmore = document.createElement("div");
        learnmore.style.cssText = 'font-size: 15px;margin-top:20px;'
        learnmore.innerHTML = "<a href=\"https://www.subtractiv.com/e/3\" style=\"color: #FFF;text-decoration:underline;\">Learn more about deceptive character phishing</a>"
        content.appendChild(learnmore);
}

