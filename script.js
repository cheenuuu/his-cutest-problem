function sayYes() {

  // Play music
  var song = document.getElementById("loveSong");
  if (song) {
    song.play();
  }

  // Change to second page
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px;">
      <h1 style="font-size:40px;">Sakshaat 💖</h1>
      <p style="font-size:22px;">Cheenu loves Chikuuu 💕</p>
      <h2 style="font-size:30px;">Will you officially be mine? 💗</h2>
    </div>
  `;
}
