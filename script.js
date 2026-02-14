function sayYes() {
  const song = document.getElementById("loveSong");
  song.play();

  document.body.innerHTML = `
    <div style="
      background: linear-gradient(135deg,#ff99cc,#ff4da6);
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color:white;
      font-family:Arial;
      text-align:center;
    ">
      <h1 style="font-size:50px;">Yeh Ishq Hai 💕</h1>
      <p style="font-size:25px;">From today…</p>
      <h2 style="font-size:35px;">Sakshaat ❤️ Vaishnavi</h2>
      <p style="font-size:20px;">Forever starts now ✨</p>
      <img src="cute-boy-cheek-pinching-his-girlfriend-happy-valentine-cartoon-character-illustration_56104-367.avif" 
           style="width:250px; margin-top:20px; border-radius:15px;">
    </div>
  `;
}
