const PptxGenJS = require("pptxgenjs");

let pres = new PptxGenJS();

// --- 1. Master Slide Definition ---
pres.defineSlideMaster({
    title: "COMMIT_MASTER",
    background: { color: "FFFFFF" },
    objects: [
        // Bottom purple bar
        { rect: { x: 0, y: "95%", w: "100%", h: "5%", fill: "A500FD" } },
        // Logo placeholder (Text)
        { text: { text: "COMMIT API", options: { x: 0.5, y: 0.2, fontSize: 18, color: "A500FD", bold: true } } },
        // Footer text
        { text: { text: "Strategic Proposal | Confidential", options: { x: "80%", y: "96%", fontSize: 10, color: "FFFFFF" } } }
    ]
});

// --- 2. Cover Slide ---
let slide1 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide1.addText("Strategic Growth Proposal", {
    x: 1, y: 2.5, w: "80%", fontSize: 44, color: "A500FD", bold: true, align: "center",
    animation: { type: "flyIn", duration: 1000 } // Animation
});
slide1.addText("Use Motion. Join the Tournament. Live the Game.", {
    x: 1, y: 3.5, w: "80%", fontSize: 20, color: "363636", align: "center",
    animation: { type: "fadeIn", delay: 1000 }
});
slide1.addText("Prepared for Commit AI\nBy Keshav Varshney", {
    x: 1, y: 5.0, w: "80%", fontSize: 14, color: "666666", align: "center", italic: true
});

// --- 3. Executive Summary ---
let slide2 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide2.addText("Executive Summary", { x: 0.5, y: 0.5, fontSize: 32, color: "A500FD", bold: true });
slide2.addText("My Vision: Fitness as a Live Game", { x: 0.5, y: 1.5, fontSize: 24, color: "333333", bold: true });
slide2.addText(
    [
        { text: "Commit isn't just a tracker; it's a world where sweat meets social currency.", options: { bullet: true } },
        { text: "We will position Commit as a lifestyle, transforming the 'solo grind' into a collective obsession.", options: { bullet: true } },
        { text: "I don't just build campaigns; I build narratives.", options: { bullet: true, italic: true } }
    ],
    { x: 0.5, y: 2.2, w: "90%", h: 4, fontSize: 18, color: "555555", lineSpacing: 32, animation: { type: "flyIn" } }
);

// --- 4. SMM Pipeline ---
let slide3 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide3.addText("SMM Content Pipeline", { x: 0.5, y: 0.5, fontSize: 32, color: "A500FD", bold: true });
slide3.addText("From Raw Clips to Viral Assets", { x: 0.5, y: 1.2, fontSize: 16, color: "666666" });

let steps = [
    { title: "1. Ideation", desc: "I provide weekly concepts & scripts." },
    { title: "2. Capture", desc: "You record simple raw clips." },
    { title: "3. Magic Edit", desc: "I add motion graphics & AI voiceovers." },
    { title: "4. Distribute", desc: "Uploading, captions & hashtags." }
];

steps.forEach((step, idx) => {
    let xPos = 0.5 + (idx * 2.3);
    slide3.addShape(pres.ShapeType.rect, {
        x: xPos, y: 2.5, w: 2.1, h: 2.5, fill: "F9F9F9", line: { color: "A500FD", width: 2 },
        animation: { type: "zoomIn", delay: idx * 500 } // Staggered animation
    });
    slide3.addText(step.title, { x: xPos + 0.1, y: 2.7, w: 1.9, fontSize: 18, color: "A500FD", bold: true });
    slide3.addText(step.desc, { x: xPos + 0.1, y: 3.5, w: 1.9, fontSize: 14, color: "333333" });
});

// --- 5. Monthly Deliverables ---
let slide4 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide4.addText("Monthly Deliverables", { x: 0.5, y: 0.5, fontSize: 32, color: "A500FD", bold: true });

let deliverables = [
    { platform: "TikTok / Reels", count: "5 Videos / Month", color: "E1306C" },
    { platform: "Reddit", count: "5 Posts / Month", color: "FF4500" },
    { platform: "LinkedIn", count: "5 Posts / Month", color: "0077b5" }
];

deliverables.forEach((item, idx) => {
    let yPos = 1.8 + (idx * 1.5);
    slide4.addShape(pres.ShapeType.roundRect, {
        x: 1, y: yPos, w: 8, h: 1.2, fill: item.color,
        animation: { type: "wipe", delay: idx * 400 }
    });
    slide4.addText(item.platform, { x: 1.5, y: yPos + 0.1, w: 4, fontSize: 24, color: "FFFFFF", bold: true });
    slide4.addText(item.count, { x: 5, y: yPos + 0.1, w: 3.5, fontSize: 24, color: "FFFFFF", align: "right" });
});

// --- 6. Content Strategy ---
let slide5 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide5.addText("Content Strategy Ideas", { x: 0.5, y: 0.5, fontSize: 32, color: "A500FD", bold: true });

slide5.addText("Reddit & LinkedIn", { x: 0.5, y: 1.5, fontSize: 20, color: "333333", bold: true });
slide5.addText("• Reddit: 'Why your solo workout is failing you.' (Data-backed discussion)\n• LinkedIn: 'The Death of the Pedometer: Hello, Motion Intelligence.'",
    { x: 0.5, y: 2.0, w: "90%", fontSize: 16, color: "555555", lineSpacing: 24 });

slide5.addText("Video Concepts", { x: 0.5, y: 3.5, fontSize: 20, color: "333333", bold: true });
slide5.addText("• The AI Coach Roast: Persona roasting poor form.\n• Tournament Mode: Split screen User vs Rival.",
    { x: 0.5, y: 4.0, w: "90%", fontSize: 16, color: "555555", lineSpacing: 24 });

// --- 7. Performance Marketing ---
let slide6 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide6.addText("Performance Marketing (US)", { x: 0.5, y: 0.5, fontSize: 32, color: "A500FD", bold: true });

slide6.addText("Targeting: Gamers who lift, Crossfit, E-sports fans.", { x: 0.5, y: 1.2, fontSize: 16, color: "666666" });

slide6.addShape(pres.ShapeType.rect, { x: 1, y: 2.0, w: 4, h: 3, fill: "FFFFFF", line: { color: "DDDDDD" } });
slide6.addText("Ad Copy A", { x: 1.2, y: 2.2, fontSize: 14, color: "A500FD", bold: true });
slide6.addText("Headline: Stop working out alone. Start competing.\n\nBody: The Commit Arena never sleeps. Join the live tournament where your sweat earns you rank.",
    { x: 1.2, y: 2.8, w: 3.6, fontSize: 12, color: "333333" });

slide6.addShape(pres.ShapeType.rect, { x: 5.5, y: 2.0, w: 4, h: 3, fill: "FFFFFF", line: { color: "DDDDDD" } });
slide6.addText("Ad Copy B", { x: 5.7, y: 2.2, fontSize: 14, color: "A500FD", bold: true });
slide6.addText("Headline: Your AI Coach is watching.\n\nBody: Forget generic cheering. Get real-time, persona-driven feedback that actually pushes you harder.",
    { x: 5.7, y: 2.8, w: 3.6, fontSize: 12, color: "333333" });

// --- 8. Closing ---
let slide7 = pres.addSlide({ masterName: "COMMIT_MASTER" });
slide7.addText("Let's Build This World.", {
    x: 1, y: 2.5, w: "80%", fontSize: 44, color: "A500FD", bold: true, align: "center",
    animation: { type: "zoomIn" }
});
slide7.addText("Ready to Commit?", {
    x: 1, y: 4.0, w: "80%", fontSize: 24, color: "333333", align: "center"
});

// Write File
pres.writeFile({ fileName: "commit_app_proposal.pptx" }).then(() => {
    console.log("PPT Generation Complete");
});
