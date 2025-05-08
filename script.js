function showConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncrement: Math.random() * 0.05 + 0.01
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.ellipse(c.x + c.tilt, c.y, c.r, c.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();

      // Update posisi
      c.y += c.d * 0.3; // jatuh lebih realistis
      c.x += Math.sin(c.tiltAngle) * 2; // sedikit ayunan ke samping
      c.tiltAngle += c.tiltAngleIncrement;

      // Jika jatuh di bawah layar, reset ke atas
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}
