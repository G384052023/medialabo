const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 20;
const rows = canvas.height / tileSize;
const cols = canvas.width / tileSize;

const player = {
    x: 1,
    y: 1,
    color: 'blue',
    hp: 10,
    mp: 10
};

const enemy = {
    x: 10,
    y: 10,
    color: 'red'
};

const bullets = [];
const beams = [];

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    switch(e.key) {
        case 'ArrowUp':
            player.y = Math.max(0, player.y - 1);
            break;
        case 'ArrowDown':
            player.y = Math.min(rows - 1, player.y + 1);
            break;
        case 'ArrowLeft':
            player.x = Math.max(0, player.x - 1);
            break;
        case 'ArrowRight':
            player.x = Math.min(cols - 1, player.x + 1);
            break;
        case 'a':
        case 'A':
            shootBullet();
            break;
        case 's':
        case 'S':
            shootBeam();
            break;
    }
    drawGame();
}

function shootBullet() {
    bullets.push({ x: player.x, y: player.y, color: 'white' });
}

function shootBeam() {
    if (player.mp > 0) {
        player.mp -= 1;
        beams.push({ x: player.x, y: player.y, color: 'cyan' });
        updateStats();
    }
}

function updateStats() {
    document.getElementById('hp').textContent = player.hp;
    document.getElementById('mp').textContent = player.mp;
}

function drawTile(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTile(player.x, player.y, player.color);
    drawTile(enemy.x, enemy.y, enemy.color);

    bullets.forEach(bullet => {
        drawTile(bullet.x, bullet.y, bullet.color);
    });

    beams.forEach(beam => {
        drawTile(beam.x, beam.y, beam.color);
    });

    // Move bullets
    bullets.forEach(bullet => {
        bullet.x += 1;
    });

    // Move beams
    beams.forEach(beam => {
        beam.x += 1;
    });

    updateStats();
}

drawGame();
