const load = () => {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBDswpCQP0RYtKWrXhv9SnA9gkRxnE_EOg",
        authDomain: "web-test-462bb.firebaseapp.com",
        databaseURL: "https://web-test-462bb.firebaseio.com",
        projectId: "web-test-462bb",
        storageBucket: "web-test-462bb.appspot.com",
        messagingSenderId: "547115742706",
        appId: "1:547115742706:web:ac204f317be9dfa610676b",
        measurementId: "G-9RPKWD1XY8"
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();
    messaging.requestPermission().then(function () {
        return messaging.getToken();
    }).then(function (token) {
        console.log(token);
    })
    .catch(function (err) {
        console.log('Permission denied', err);
    });
	
    messaging.onMessage(function (payload) {
        console.log('onMessage: ', payload);
		call();
        
        var url = 'https://badasstechie.github.io/Clips/Siren.mp3';
        window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
        var context = new AudioContext(); //context
        var source ;
        
        function call(bool)
		{
            if(bool === undefined) bool = true;

            if(bool === true) 
            {
                source = context.createBufferSource(); //source node
                source.connect(context.destination); //connect source to speakers so we can hear it  

                  var request = new XMLHttpRequest();
                  request.open('GET', url, true); 
                  request.responseType = 'arraybuffer'; //the  response is an array of bits
                  request.onload = function() {
                      context.decodeAudioData(request.response, function(response) {
                          source.buffer = response;
                           source.start(0); //play audio immediately
                          source.loop = true;
                      }, function () { console.error('The request failed.'); } );
                  }
                    request.send();  
            } else {
				source.stop(context.currentTime);
                source.disconnect(context.destination);
                source = null;
            }
		}
        
    });
}
window.onload = load;
