// ================= MUSIC =================
const bgMusic = document.getElementById("bgMusic");
if (bgMusic) bgMusic.volume = 0.25;

// ================= ELEMENTS =================
const textDiv = document.getElementById("text");
const buttonsDiv = document.getElementById("buttons");
const backgroundDiv = document.getElementById("background");

// ================= CREEPY MESSAGE BOX =================
let creepTimer;
let creepShown = false;

const creepBox = document.createElement("div");
creepBox.style.position = "absolute";
creepBox.style.top = "20%";
creepBox.style.left = "50%";
creepBox.style.transform = "translateX(-50%) scale(0.8)";
creepBox.style.padding = "20px";
creepBox.style.background = "#000000";
creepBox.style.color = "#000";
creepBox.style.borderRadius = "10px";
creepBox.style.fontSize = "18px";
creepBox.style.textAlign = "center";
creepBox.style.opacity = "0";
creepBox.style.transition = "transform 2s ease, opacity 2s ease";
creepBox.style.maxWidth = "80%";
creepBox.style.zIndex = "10";
document.body.appendChild(creepBox);

// ================= STORY =================
const creditsText = [
  "The End",
  "",
  "Story",
  "Benyamin, Nullchan404",
  "",
  "Programming",
  "Benyamin, Nullchan404",
  "",
  "Design",
  "Benyamin, Nullchan404",
  "",
  "Special Thanks",
  "Everyone who shared their stories and experiences, and everyone who struggles in silence. You are not alone.",
  "",
  "Thank you for playing.",
];

const story = [
  /* ---------- MENU ---------- */
  {
    id: "menu",
    text: [
      "I Tried",
      "An interactive story",
      "Press START to begin.",
      "GitHub: https://github.com/yourusername",
    ],
    interaction: { type: "menu" },
  },
  {
    id: "controls",
    text: [
      "Controls:",
      "ENTER or SPACE → Continue",
      "Click buttons → Choose",
      "Press ENTER or SPACE.",
    ],
    interaction: { type: "continue", next: "scene_1" },
  },
  /* ---------- WALKING ---------- */
  {
    id: "scene_1",
    text: [
      "London outskirts. 3:00 AM.",
      "The city feels abandoned.",
      "Streetlights hum somewhere above her.",
      "She walks because stopping feels worse.",
    ],
    interaction: { type: "continue", next: "scene_memory" },
  },
  {
    id: "scene_memory",
    text: [
      "Her footsteps echo behind her.",
      "She remembers laughing once.",
      "It feels like remembering another person.",
      "The night presses closer.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Keep walking", next: "scene_walk_more" },
        { text: "Stop for a moment", next: "scene_stop" },
        { text: "Take a side street", next: "scene_side_street" },
      ],
    },
  },
  {
    id: "scene_side_street",
    text: [
      "She turns down a narrow street.",
      "Windows stare like closed eyes.",
      "Somewhere inside, people sleep safely.",
      "She keeps moving anyway.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Return to the road", next: "scene_walk_more" },
        { text: "Stand in silence", next: "scene_stop_thoughts" },
      ],
    },
  },
  {
    id: "scene_stop",
    text: [
      "She stops walking.",
      "Silence fills her ears.",
      "For a moment she feels invisible.",
      "The cold reminds her she still exists.",
    ],
    interaction: { type: "continue", next: "scene_stop_thoughts" },
  },
  {
    id: "scene_stop_thoughts",
    text: [
      "She breathes slowly.",
      "Thoughts grow louder when everything else disappears.",
      "The night feels endless.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Keep going", next: "scene_walk_more" },
        { text: "Wait longer", next: "scene_lingering" },
      ],
    },
  },
  {
    id: "scene_lingering",
    text: [
      "Time stretches.",
      "Minutes blur together.",
      "Eventually the cold pushes her forward again.",
    ],
    interaction: { type: "continue", next: "scene_walk_more" },
  },
  {
    id: "scene_walk_more",
    text: [
      "She walks faster now.",
      "As if something behind her might catch up.",
      "Ahead, the bridge waits.",
    ],
    interaction: { type: "continue", next: "scene_bridge_arrival" },
  },
  /* ---------- BRIDGE ---------- */
  {
    id: "scene_bridge_arrival",
    text: [
      "The bridge rises from the darkness.",
      "Wind moves across the river.",
      "Water below looks endless.",
    ],
    interaction: { type: "continue", next: "scene_bridge_middle" },
  },
  {
    id: "scene_bridge_middle",
    text: [
      "She reaches the center.",
      "City lights shimmer like broken stars.",
      "Her thoughts grow louder than the wind.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Look at the water", next: "scene_look_water" },
        { text: "Check her phone", next: "scene_phone_light" },
        { text: "A memory surfaces", next: "scene_memory_flash" },
      ],
    },
  },
  {
    id: "scene_memory_flash",
    text: [
      "A memory appears suddenly.",
      "Warm sunlight.",
      "Laughter.",
      "It feels unreal now.",
    ],
    interaction: { type: "continue", next: "scene_phone_light" },
  },
  {
    id: "scene_look_water",
    text: [
      "She looks down.",
      "The river moves without caring who watches.",
      "It feels calm.",
      "Too calm.",
    ],
    interaction: { type: "continue", next: "scene_phone_light" },
  },
  /* ---------- PHONE ---------- */
  {
    id: "scene_phone_light",
    text: [
      "Her phone lights up.",
      "A small glow in endless darkness.",
      "Someone is trying to reach her.",
    ],
    interaction: { type: "continue", next: "scene_phone_hesitation" },
  },
  {
    id: "scene_phone_hesitation",
    text: [
      "Her reflection stares back from the screen.",
      "She barely recognizes herself.",
      "The message waits.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Unlock the phone", next: "scene_choice_intro" },
        { text: "Lower the phone", next: "scene_bridge_middle" },
      ],
    },
  },
  {
    id: "scene_choice_intro",
    text: [
      "The wind howls softly.",
      "The world feels far away.",
      "This moment feels heavier than everything before.",
    ],
    interaction: { type: "continue", next: "scene_choice" },
  },
  /* ---------- FINAL CHOICE ---------- */
  {
    id: "scene_choice",
    text: [
      "She stands alone on the bridge.",
      "One decision feels louder than every thought.",
      "The night waits.",
    ],
    interaction: {
      type: "choices",
      buttons: [
        { text: "Read the message", next: "ending_read" },
        { text: "Ignore the phone", next: "ending_ignore" },
        { text: "Walk away", next: "ending_walk_away" },
        { text: "Jump", next: "ending_jump" },
      ],
    },
  },
  /* ---------- ENDINGS ---------- */
  {
    id: "ending_read",
    text: [
      "She reads the message.",
      '"Hey… are you okay? I\'m here if you need me."',
      "Her hands shake.",
      "\"I'm not okay… but I'm still here.\"",
      "The night loosens slightly.",
    ],
    interaction: { type: "continue", next: "scene_credits" },
  },
  {
    id: "ending_ignore",
    text: [
      "She locks the phone.",
      "Silence returns immediately.",
      "The world feels distant.",
      "Surviving tonight is enough.",
    ],
    interaction: { type: "continue", next: "scene_credits" },
  },
  {
    id: "ending_walk_away",
    text: [
      "She steps back from the railing.",
      "The bridge fades behind her.",
      "Morning will come eventually.",
      "She keeps moving.",
    ],
    interaction: { type: "continue", next: "scene_credits" },
  },
  {
    id: "ending_jump",
    text: [
      "She climbs the railing.",
      "Wind roars in her ears.",
      "For one moment, everything becomes quiet.",
      "Then the city disappears.",
      "Only darkness remains.",
      "The river keeps flowing.",
      "The night forgets.",
    ],
    interaction: { type: "continue", next: "scene_credits" },
  },
  /* ---------- CREDITS ---------- */
  {
    id: "scene_credits",
    text: creditsText,
    interaction: { type: "credits" },
  },
];

// ================= ENGINE =================
function showScene(id) {
  const scene = story.find((s) => s.id === id);
  buttonsDiv.innerHTML = "";
  document.onkeydown = null;

  // reset creepy box
  creepBox.style.opacity = "0";
  creepBox.style.transform = "translateX(-50%) scale(0.8)";
  creepShown = false;
  clearTimeout(creepTimer);

  backgroundDiv.style.background = "#ffffff";

  textDiv.style.opacity = 0;
  textDiv.style.whiteSpace = "pre-wrap";
  textDiv.style.lineHeight = "1.4";
  textDiv.textContent = scene.text.join("\n");
  setTimeout(() => (textDiv.style.opacity = 1), 60);

  const interaction = scene.interaction;
  if (!interaction) return;

  // ===== MENU =====
  if (interaction.type === "menu") {
    const btn = document.createElement("button");
    btn.textContent = "Start";
    btn.onclick = () => {
      showScene("controls");
      bgMusic?.play().catch(() => {});
    };
    buttonsDiv.appendChild(btn);
  }
  // ===== CONTINUE =====
  else if (interaction.type === "continue") {
    document.onkeydown = (e) => {
      if (e.code === "Enter" || e.code === "Space") {
        showScene(interaction.next);
      }
    };

    
    creepTimer = setTimeout(() => {
      if (!creepShown) {
        creepBox.textContent =
          "press Enter or Space";
        creepBox.style.opacity = "1";
        creepBox.style.transform = "translateX(-50%) scale(1)";
        textDiv.style.transition = "transform 10s ease";
        textDiv.style.transform = "scale(0.95)";
        backgroundDiv.style.transition = "transform 10s ease";
        backgroundDiv.style.transform = "scale(0.95)";
        creepShown = true;
      }
    }, 10000);
  }
  // ===== CHOICES =====
  else if (interaction.type === "choices") {
    interaction.buttons.forEach((b) => {
      const btn = document.createElement("button");
      btn.textContent = b.text;
      btn.onclick = () => showScene(b.next);
      buttonsDiv.appendChild(btn);
    });
  }
  // ===== CREDITS =====
  else if (interaction.type === "credits") {
    const btn = document.createElement("button");
    btn.textContent = "Return to Menu";
    btn.onclick = () => showScene("menu");
    buttonsDiv.appendChild(btn);
  }
}

// ===== START GAME =====
showScene("menu");
