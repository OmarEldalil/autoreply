document.querySelector('input[type=submit]').addEventListener('click', function (e) {
    var name = document.querySelector('#agentName').value;
    chrome.storage.local.set({agentName : name }, function () {
        getAgentName();
    });
    var el = document.createElement('p'),
        txt= document.createTextNode('Saved');
    el.appendChild(txt);
    document.body.appendChild(el);
})

var getAgentName = function(){
    chrome.storage.local.get(['agentName'],function (data) {
        document.querySelector('#agentName').value = data.agentName || "Not Set yet";
    })
}
getAgentName();