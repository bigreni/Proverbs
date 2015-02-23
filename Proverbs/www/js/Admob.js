var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-9249695405712287/3154959152',
        interstitial: 'ca-app-pub-9249695405712287/3301233156'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);