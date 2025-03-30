document.addEventListener('DOMContentLoaded', function() {
    const lyrics = [
      { time: 0, text: "No es secreto, tú me tiene' loco" },
      { time: 5, text: "Me siento en LSD cuando te toco" },
      { time: 10, text: "Soy un tonto y mil vece' me equivoco" },
      { time: 15, text: "Te quiero siempre a mi ladito como Yoko" },
      { time: 22, text: "Oh, no te vaya' nunca" },
      { time: 28, text: "Oh, no te vaya' nunca" },
      { time: 33, text: "Oh, no te vaya' nunca" },
      { time: 40, text: "Oh, no te vaya' nunca" },
      { time: 47, text: "Ey, ah" },
      { time: 51, text: "Prefiero tus labio' a cualquier premio" },
      { time: 54, text: "Prefiero tu boca que un número uno" },
      { time: 57, text: "¿Cómo llegué a ser tu rey? Eso e' un misterio" },
      { time: 60, text: "Un atardecer contigo no lo cambio por ninguno" },
      { time: 64, text: "Si tú me quisiste cuando ni yo me quería" },
      { time: 69, text: "Que tú me quisiste cuando ni yo me quería, eh" },
      { time: 75, text: "Yo tan T'Chala, tú tan princesa Diana" },
      { time: 78, text: "En la cama Lana Rhoades, en la calle siempre es pana" },
      { time: 81, text: "Soñé que estaba contigo en la portada" },
      { time: 84, text: "De Vogue, los dos vestido' 'e Prada" },
      { time: 86, text: "Que nos grabábamo' en el sofá Eames de la sala" },
      { time: 89, text: "Y lo enseñaba en Sunset y Cannes to' el mundo lo amaba" },
      { time: 93, text: "Este es el amor del cual mi abuelito me hablaba" },
      { time: 96, text: "Querer estar a tu la'o hasta que el pelo esté lleno de cana'" },
      { time: 100, text: "Yo quiero, quiero, quiero, quiero verte brillar por siempre" },
      { time: 106, text: "Yo quiero, quiero, quiero, quiero verte bailar por siempre, yeah" },
      { time: 112, text: "Tú y yo por siempre" },
      { time: 114, text: "Baby, tú y yo por siempre" },
      { time: 120, text: "No es secreto, tú me tiene' loco" },
      { time: 125, text: "Me siento en LSD cuando te toco" },
      { time: 131, text: "Soy un tonto y mil vece' me equivoco" },
      { time: 137, text: "Te quiero siempre a mi ladito como Yoko" },
      { time: 144, text: "Oh, no te vaya' nunca" },
      { time: 150, text: "Oh, no te vaya' nunca" },
      { time: 155, text: "Oh, no te vaya' nunca" },
      { time: 161, text: "Oh, no te vaya' nunca" },
      { time: 167, text: "Oh, no te vaya' nunca" },
      { time: 173, text: "Oh, no te vaya' nunca" },
      { time: 180, text: "Oh, no te vaya' nunca" },
      { time: 190, text: "Oh, no te vaya' nunca" },
      { time: 193, text: "Oh, no te vaya'" }
    ];
  
    // Array de URLs de imágenes (utilizando las URLs del HTML)
    const imageUrls = [
      "https://i.pinimg.com/736x/51/28/be/5128bec140150f0e752dfcdd1fbd3055.jpg",
      "https://i.pinimg.com/736x/14/c5/d7/14c5d7e8d4cc9b5159ec832115b8916a.jpg",
      "https://i.pinimg.com/736x/59/4a/7a/594a7a804eca2196ae3828e0cf728e1a.jpg",
      "https://i.pinimg.com/736x/a1/ce/7e/a1ce7e6a179cae8b5dbdc2b79e6a259d.jpg",
      "https://i.pinimg.com/736x/99/f6/69/99f669536133f8a169a17152e77c3655.jpg",
      "https://i.pinimg.com/736x/80/a4/69/80a469b4d99f3a6632bf721d14446583.jpg"
    ];
  
    const lyricsDiv = document.getElementById('lyrics');
    // Cambia la referencia a 'finalMessage' en lugar de 'message'
    const finalMessageDiv = document.getElementById('finalMessage');
    const song = document.getElementById('song');
    const playButton = document.getElementById('playButton');
    const displayImage = document.getElementById('displayImage');
  
    let currentLine = 0;
    let currentImageIndex = 0;
    let imageTimeout;
  
    playButton.addEventListener('click', function() {
      song.play();
      playButton.style.display = 'none';
      updateLyrics();
  
      // Muestra la primera imagen (ya está definida en el HTML) y programa el cambio
      scheduleNextImage();
    });
  
    // Función para programar la transición a la siguiente imagen
    function scheduleNextImage() {
      imageTimeout = setTimeout(() => {
        // Desvanecer la imagen actual
        displayImage.style.opacity = 0;
        // Espera a que la transición finalice (1s) y actualiza el src
        setTimeout(() => {
          currentImageIndex++;
          if (currentImageIndex < imageUrls.length) {
            displayImage.src = imageUrls[currentImageIndex];
            displayImage.style.opacity = 1;
            scheduleNextImage(); // Programa el siguiente cambio
          }
        }, 1000);
      }, 30000);
    }
  
    // Actualización de la letra de la canción
    function updateLyrics() {
      const currentTime = song.currentTime;
      if (currentLine < lyrics.length && currentTime >= lyrics[currentLine].time) {
        lyricsDiv.textContent = lyrics[currentLine].text;
        lyricsDiv.style.opacity = 1;
        currentLine++;
      }
      if (currentLine < lyrics.length) {
        requestAnimationFrame(updateLyrics);
      } else {
        setTimeout(() => {
          lyricsDiv.style.opacity = 0;
          finalMessageDiv.style.display = 'block';
          finalMessageDiv.style.opacity = 1;
        }, 2000);
      }
    }
  });
  