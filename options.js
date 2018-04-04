document.querySelector('input[type=submit]').addEventListener('click', function (e) {
    var name = document.querySelector('#agentName').value,
        whereToFill = document.querySelector('select').value;
    chrome.storage.local.set({agentName : name }, function () {
        getAndUpdateSomeValue('agentName');
    });
    chrome.storage.local.set({whereToFill : whereToFill }, function () {
        getAndUpdateSomeValue('whereToFill');
    });
    var el = document.createElement('p'),
        txt= document.createTextNode('Saved');
    el.appendChild(txt);
    document.body.appendChild(el);
})


var getAndUpdateSomeValue = function(value){
    chrome.storage.local.get([value],function (data) {
        document.querySelector('#'+value).value = data[value]|| "Not Set yet";
    })
}
getAndUpdateSomeValue('agentName');
getAndUpdateSomeValue('whereToFill');
