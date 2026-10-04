const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayMessage = document.getElementById('overlay-message');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// Game constants
const gridSize = 20; // 20x20 pixels per block
const tileCount = canvas.width / gridSize; // 20x20 grid

// Game state variables
let snake = [];
let food = { x: 0, y: 0 };
let dx = 0;
let dy = 0;
let nextDx = 0;
let nextDy = 0;
let score = 0;
let gameLoopTimeout;
let isGameOver = false;
let isPaused = false;
let gameStarted = false;
let baseSpeed = 150; // Initial speed in ms (lower is faster)

function initGame() {
    // Reset state
    snake = [
        { x: 10, y: 10 },
        { x: 10, y: 11 },
        { x: 10, y: 12 }
    ];
    dx = 0;
    dy = -1; // Moving up initially
    nextDx = 0;
    nextDy = -1;
    score = 0;
    baseSpeed = 150;
    isGameOver = false;
    isPaused = false;
    gameStarted = true;

    scoreElement.textContent = score;
    overlay.style.display = 'none';
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none';

    placeFood();

    // Clear any existing loop and start a new one
    clearTimeout(gameLoopTimeout);
    gameLoop();
}

function placeFood() {
    let validPosition = false;
    while (!validPosition) {
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);

        // Make sure food doesn't spawn on the snake
        validPosition = true;
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === food.x && snake[i].y === food.y) {
                validPosition = false;
                break;
            }
        }
    }
}

function gameLoop() {
    if (isGameOver || isPaused || !gameStarted) return;

    update();
    draw();

    if (!isGameOver) {
        // Calculate dynamic speed based on score. Cap the minimum speed.
        const currentSpeed = Math.max(50, baseSpeed - (score * 2));
        gameLoopTimeout = setTimeout(gameLoop, currentSpeed);
    }
}

function update() {
    // Apply queued direction changes
    dx = nextDx;
    dy = nextDy;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // Check self collision
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        placeFood();
    } else {
        snake.pop(); // Remove tail if no food eaten
    }
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw food
    ctx.fillStyle = '#ff0000'; // Bright red
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);

    // Draw snake
    ctx.fillStyle = '#00ff00'; // Bright green
    for (let i = 0; i < snake.length; i++) {
        // Slightly smaller rects to show block separation
        ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize - 1, gridSize - 1);
    }
}

function gameOver() {
    isGameOver = true;
    overlayTitle.textContent = "Game Over";
    overlayMessage.textContent = "You hit a wall or yourself!";
    restartBtn.style.display = 'inline-block';
    overlay.style.display = 'flex';
}

function togglePause() {
    if (isGameOver || !gameStarted) return;

    isPaused = !isPaused;

    if (isPaused) {
        overlayTitle.textContent = "Paused";
        overlayMessage.textContent = "Press Space to resume";
        overlay.style.display = 'flex';
        startBtn.style.display = 'none';
        restartBtn.style.display = 'none';
    } else {
        overlay.style.display = 'none';
        gameLoop(); // Resume loop
    }
}

// Input handling
document.addEventListener('keydown', (e) => {
    // Prevent default scrolling for arrows and space
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === ' ' || e.code === 'Space') {
        togglePause();
        return;
    }

    if (isPaused || isGameOver || !gameStarted) return;

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (dy !== 1) { // Cannot reverse directly down
                nextDx = 0;
                nextDy = -1;
            }
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (dy !== -1) { // Cannot reverse directly up
                nextDx = 0;
                nextDy = 1;
            }
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (dx !== 1) { // Cannot reverse directly right
                nextDx = -1;
                nextDy = 0;
            }
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (dx !== -1) { // Cannot reverse directly left
                nextDx = 1;
                nextDy = 0;
            }
            break;
    }
});

startBtn.addEventListener('click', initGame);
restartBtn.addEventListener('click', initGame);

// Initial draw of empty board
draw();
