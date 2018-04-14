document.querySelector('input[type=submit]').addEventListener('click', function (e) {
    var name = document.querySelector('#agentName').value,
        whereToFill = document.querySelector('select#whereToFill').value,
        department = document.querySelector('select#department').value;
    chrome.storage.local.set({agentName : name }, function () {
        getAndUpdateSomeValue('agentName');
    });
    chrome.storage.local.set({whereToFill : whereToFill }, function () {
        getAndUpdateSomeValue('whereToFill');
    });
    chrome.storage.local.set({department : department }, function () {
        getAndUpdateSomeValue('department');
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
getAndUpdateSomeValue('department');
