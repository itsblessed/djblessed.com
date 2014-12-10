var templates = {};

window.onload = function (){
  console.log('Hi, this is Rivendoe, I write also code not only music :)');

  SC.initialize({
    client_id: '95cc62b676635733a0087d0b95b9a0aa'
  });

  templates['track'] = Handlebars.compile(document.getElementById('template-track').innerHTML);

  console.log(templates);

  getSongList();

  // var track_url = 'https://soundcloud.com/rivendoe/legend-comes-to-life';
  // SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
  //   console.dir(oEmbed);
  // });

};

var getSongList = function (){
  SC.get('/users/111561679/tracks', function(tracks) {
    tracks.forEach(ui.renderTrack);
  });
};


var ui = {};

ui.renderTrack = function (track){
  console.log(track);
  var target = document.getElementById('list');

  var content = templates.track({
    track_id: track.id
  });

  target.innerHTML += content;

};