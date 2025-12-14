const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function createWebsiteImage(filename, title, colorHex, accentHex) {
  const canvas = createCanvas(1600, 1200);
  const ctx = canvas.getContext('2d');
  
  // Dark background with gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 1200);
  gradient.addColorStop(0, '#0a0e27');
  gradient.addColorStop(1, '#1a1f3a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1600, 1200);
  
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [100, 100, 100];
  };
  
  const [r, g, b] = hexToRgb(colorHex);
  const [ar, ag, ab] = hexToRgb(accentHex);
  
  // Draw decorative circles
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 250, 150, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, 0.6)`;
  ctx.beginPath();
  ctx.arc(1350, 950, 150, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw header bar
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, 1600, 120);
  
  // Draw content blocks
  ctx.strokeRect(100, 200, 600, 200);
  
  ctx.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, 0.8)`;
  ctx.strokeRect(900, 200, 600, 200);
  
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
  ctx.strokeRect(100, 500, 1400, 400);
  
  // Add title text
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(title, 800, 600);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 });
  const filepath = path.join(publicDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`✓ Created: ${filename}`);
}

createWebsiteImage('website-ecommerce-fashion-dark.jpg', 'Monomode.in', '#ec4899', '#f43f5e');
createWebsiteImage('website-admin-dashboard-dark.jpg', 'Monomode.space', '#f59e0b', '#ea580c');
createWebsiteImage('website-grocery-landing-dark.jpg', 'DailyKart.io', '#10b981', '#14b8a6');
createWebsiteImage('website-admin-grocery-dark.jpg', 'DailyKart.space', '#84cc16', '#22c55e');
createWebsiteImage('website-tedx-event-dark.jpg', 'TEDx GCEM', '#ef4444', '#f43f5e');
createWebsiteImage('website-lms-education-dark.jpg', 'Protrainix', '#818cf8', '#a855f7');
createWebsiteImage('website-sports-academy-dark.jpg', 'HFB Academy', '#06b6d4', '#0891b2');

console.log('\n✅ All website images created successfully!');
