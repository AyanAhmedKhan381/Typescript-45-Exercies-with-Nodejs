//Defint the make_album function 
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling Three Function and creating a 3 variables with defferent valuse
var album1 = make_album("Ayan", "Album title 1");
var album2 = make_album("Ahmed", "Album Title 2");
//Calling a make_album function with third parameter
var album3 = make_album("Hamza", "Album Titile 3", 10);
//print variables
console.log(album1);
console.log(album2);
console.log(album3);
