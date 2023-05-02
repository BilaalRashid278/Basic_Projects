let Songs = [
    { SongName: "Song No 1", Path: "./songs/1.mp3" },
    { SongName: "Song No 1", Path: "./songs/2.mp3" },
    { SongName: "Song No 1", Path: "./songs/3.mp3" },
    { SongName: "Song No 1", Path: "./songs/4.mp3" },
    { SongName: "Song No 1", Path: "./songs/5.mp3" }
];
let flag = 0;
let x = (x) => {
    flag = flag + x;
    if (flag > Songs.length - 1) {
        flag = 0;
    } else if (flag < 0) {
        flag = Songs.length - 1;
    }
    // slideIndex(flag);
    let songindex = Songs[flag].Path;
    console.log(songindex);
};




// let slideIndex = (index) => {
//     let song = Songs[index];
//     let songIndex = Songs[index].Path;
//     let songPlay = new Audio(songIndex);
//     console.log(songIndex);
//     // console.log(song);
// };
// slideIndex(flag);


// #######################################################################################





