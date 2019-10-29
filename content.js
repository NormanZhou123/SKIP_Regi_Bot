chrome.runtime.onMessage.addListener(function (request){
    if (request = 'Fuck'){
        document.querySelector('button[data-cy="AccountButton"]').click();
        console.log('clicked on the account button');
        window.addEventListener('load', function () {
            console.log("It's loaded!");
        })
        /*if (document.getElementById('ssIFrame_google').hasAttribute('aria-hidden')){
            document.querySelector('button[aria-label="Log out"]').click();
            console.log('logged out');
        }
        else {
            window.close();
        }*/
    }
});