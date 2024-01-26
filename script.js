$.ajax(
    'https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            let response = JSON.parse(APIResponse);

            let advice = response.slip.advice;

            let myDiv = document.getElementById('adviceGrabber');

            let activityTag = document.createElement('p');
            activityTag.innerHTML = advice;

            myDiv.appendChild(activityTag);

            document.body.appendChild(myDiv);
        }
    })

document.getElementById("hoverText").addEventListener("mouseover", function () {
    document.getElementById("hoverText").style.fontSize = "2.5em";
})

document.getElementById("hoverText").addEventListener("mouseout", function () {
    document.getElementById("hoverText").style.fontSize = "1.875em";
})

document.getElementById("hoverText2").addEventListener("mouseover", function () {
    document.getElementById("hoverText2").style.fontSize = "1.5em";
})

document.getElementById("hoverText2").addEventListener("mouseout", function () {
    document.getElementById("hoverText2").style.fontSize = "1em";
})