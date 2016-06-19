SC.initialize({
    client_id: 'Not for you',
    redirect_uri: 'Also not for you'
});

$(document).ready(function() { 
    
    $('button').click(function(){
        var $value = $('input').val();
        SC.get('/tracks', {
            q: $value, license: 'cc-by-sa'
        }).then(function(tracks) {
            console.log(tracks);
            var u = tracks[1].uri;
            var url = u.substring(26);
            SC.stream(url).then(function(player){
                player.play();
            })
        });
    });
});
