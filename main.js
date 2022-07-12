// var button = {
//     play: document.getElementById("btn-play"),
//     pause: document.getElementById("btn-pause"),
//     stop: document.getElementById("btn-stop")
// }
//  var sptec = WaveSurfer.create({
//      container: "#audio-spectrum",
//      waveColor: 'red',
//      progressColor: "green"
//  })

//  sptec.load('tigan.mp3')

 function ofFour(arr){
    let max = []
    for(var i = 0; i < arr.length; i++){
      let tpm = arr[i][0]
      for(var j = 0; j < arr[i].length; j++){
      let currnt = arr[i][j]
      if(currnt >= tpm){
          tpm = currnt
      }
      }
      max.push(tpm)
    }
    console.log(max)
  }
  ofFour([[1,2,3,4,],[6,7,8,9,12],[20,26,23,22]])