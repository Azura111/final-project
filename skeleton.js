let player;
let sceneIndex = 0;
let scenes = [];
let challengeActive = false;
let inventory = [];
let dialogueBox = null;

function setup() {
  createCanvas(800, 600);

  // Initialize player
  player = new Player(width / 2, height - 50);

  // Create scenes (levels)
  scenes = [
    new Scene(
      "Ancient Egypt",
      "Collect the artifact and return it to the Sphinx!",
      ["Artifact"],
      [
        new BackgroundElement("Pyramid", random(width), random(height / 2), 80, 80),
        new BackgroundElement("Palm Tree", random(width), random(height / 2), 50, 100),
      ],
      [
        new NPC("Sphinx", "Greetings, traveler! Bring me the artifact to unlock the secrets of the pyramid.", random(100, 700), random(100, 500)),
      ]
    ),
    new Scene(
      "Renaissance Europe",
      "Solve the puzzle to unlock Leonardo's invention!",
      ["Blueprint"],
      [
        new BackgroundElement("Castle", random(width), random(height / 2), 100, 100),
        new BackgroundElement("Cobblestone Path", random(width), random(height / 2), 120, 30),
      ],
      [
        new NPC("Leonardo da Vinci", "Welcome! Solve my puzzle, and I'll share my invention with you.", random(100, 700), random(100, 500)),
      ]
    ),
    new Scene(
      "Medieval Japan",
      "Retrieve the samurai's lost katana!",
      ["Katana"],
      [
        new BackgroundElement("Cherry Blossom Tree", random(width), random(height / 2), 60, 100),
        new BackgroundElement("Pagoda", random(width), random(height / 2), 100, 120),
      ],
      [
        new NPC("Samurai", "My katana has been lost! Retrieve it, and you shall earn my gratitude.", random(100, 700), random(100, 500)),
      ]
    ),
    new Scene(
      "Industrial Revolution",
      "Fix the broken steam engine!",
      ["Steam Engine Part"],
      [
        new BackgroundElement("Factory", random(width), random(height / 2), 120, 80),
        new BackgroundElement("Smoke Stack", random(width), random(height / 2), 50, 150),
      ],
      [
        new NPC("Engineer", "The steam engine needs repairs! Find the missing part.", random(100, 700), random(100, 500)),
      ]
    ),
    new Scene(
      "Space Age",
      "Navigate the satellite to its orbit!",
      ["Satellite Component"],
      [
        new BackgroundElement("Earth", random(width), random(height / 2), 150, 150),
        new BackgroundElement("Spaceship", random(width), random(height / 2), 80, 40),
      ],
      [
        new NPC("Astronaut", "The satellite is incomplete. Help me finish it to reach orbit!", random(100, 700), random(100, 500)),
      ]
    ),
  ];
}

function draw() {
  background(200);

  if (challengeActive) {
    // Display the current challenge
    scenes[sceneIndex].displayChallenge();
  } else {
    // Display the current scene
    scenes[sceneIndex].displayScene();
    player.display();
    player.move();
    displayInventory();

    // Display dialogue box if active
    if (dialogueBox) {
      dialogueBox.display();
    }
  }
}

// Handle key presses for interactions and navigation
function keyPressed() {
  if (keyCode === ENTER && !challengeActive) {
    // Start challenge if near the interactive point
    if (player.isNear(scenes[sceneIndex].interactivePoint)) {
      challengeActive = true;
    } else {
      // Interact with nearby NPC
      const npc = scenes[sceneIndex].getNearbyNPC(player);
      if (npc) {
        dialogueBox = new Dialogue(npc.message);
      } else {
        dialogueBox = new Dialogue("You need to reach the objective or interact with an NPC first!");
      }
    }
  } else if (keyCode === ESCAPE && challengeActive) {
    challengeActive = false; // Exit challenge mode
  } else if (keyCode === LEFT_ARROW && !challengeActive) {
    // Navigate to previous scene
    sceneIndex = max(0, sceneIndex - 1);
    dialogueBox = new Dialogue(`Scene: ${scenes[sceneIndex].title}`);
  } else if (keyCode === RIGHT_ARROW && !challengeActive) {
    // Navigate to next scene
    sceneIndex = min(scenes.length - 1, sceneIndex + 1);
    dialogueBox = new Dialogue(`Scene: ${scenes[sceneIndex].title}`);
  }
}

// Display the player's inventory
function displayInventory() {
  fill(50);
  textSize(16);
  textAlign(LEFT);
  text("Inventory:", 10, 20);
  for (let i = 0; i < inventory.length; i++) {
    text(`- ${inventory[i]}`, 10, 40 + i * 20);
  }
}

// Player class to handle player interactions
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
  }

  display() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;

    // Constrain movement within canvas boundaries
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  isNear(point) {
    return dist(this.x, this.y, point.x, point.y) < 40;
  }
}

// Scene class to define individual scenes
class Scene {
  constructor(title, challenge, rewards, backgroundElements, npcs) {
    this.title = title;
    this.challenge = challenge;
    this.rewards = rewards;
    this.interactivePoint = createVector(random(100, 700), random(100, 500));
    this.backgroundElements = backgroundElements;
    this.npcs = npcs;
  }

  displayScene() {
    textAlign(CENTER);
    textSize(24);
    fill(0);
    text(this.title, width / 2, 50);

    for (let element of this.backgroundElements) {
      element.display();
    }

    for (let npc of this.npcs) {
      npc.display();
    }

    // Highlight interactive point
    fill(255, 0, 0);
    ellipse(this.interactivePoint.x, this.interactivePoint.y, 20);

    textSize(18);
    fill(0);
    text("Reach the red dot and press ENTER to start the challenge.", width / 2, height - 20);
  }

  displayChallenge() {
    background(255, 250, 200);
    textAlign(CENTER);
    textSize(18);
    fill(0);
    text(this.challenge, width / 2, height / 2);
    text("Press SPACE to complete or ESC to return.", width / 2, height / 2 + 50);

    // Complete challenge on SPACE press
    if (keyIsDown(32)) {
      inventory.push(...this.rewards);
      challengeActive = false;
      dialogueBox = new Dialogue("Challenge completed! Reward added to inventory.");
    }
  }

  getNearbyNPC(player) {
    for (let npc of this.npcs) {
      if (dist(player.x, player.y, npc.x, npc.y) < 50) {
        return npc;
      }
    }
    return null;
  }
}

// BackgroundElement class for static objects
class BackgroundElement {
  constructor(name, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    fill(150);
    rect(this.x, this.y, this.w, this.h);
    textSize(12);
    fill(0);
    textAlign(CENTER);
    text(this.name, this.x + this.w / 2, this.y + this.h + 15);
  }
}

// Dialogue class for NPC messages
class Dialogue {
  constructor(message) {
    this.message = message;
    this.timer = 120; // Duration to display message
  }

  display() {
    fill(0, 0, 0, 200);
    rect(50, height - 100, width - 100, 60, 10);
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text(this.message, width / 2, height - 65);

    this.timer--;
    if (this.timer <= 0) {
      dialogueBox = null; // Close dialogue after timer ends
    }
  }
}

// NPC class for non-player characters
class NPC {
  constructor(name, message, x, y) {
    this.name = name;
    this.message = message;
    this.x = x;
    this.y = y;
  }

  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, 30);
    textSize(12);
    fill(0);
    textAlign(CENTER);
    text(this.name, this.x, this.y - 20);
  }
}
