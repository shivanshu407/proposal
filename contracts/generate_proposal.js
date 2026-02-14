const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Commit App Proposal</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
            
            :root {
                --primary: #a500fd;
                --text: #333;
                --bg: #ffffff;
                --light-gray: #f9f9f9;
            }

            body {
                font-family: 'Montserrat', sans-serif;
                margin: 0;
                padding: 0;
                background-color: var(--bg);
                color: var(--text);
                -webkit-print-color-adjust: exact;
            }

            .page {
                width: 210mm;
                height: 297mm;
                padding: 20mm;
                box-sizing: border-box;
                position: relative;
                page-break-after: always;
                overflow: hidden;
            }

            .cover-page {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background: linear-gradient(135deg, #1a0b2e 0%, #a500fd 100%);
                color: white;
            }

            .cover-title {
                font-size: 4rem;
                font-weight: 700;
                margin-bottom: 20px;
                letter-spacing: -2px;
            }

            .cover-subtitle {
                font-size: 1.5rem;
                font-weight: 300;
                opacity: 0.9;
                margin-bottom: 50px;
            }

            .logo-placeholder {
                font-size: 2rem;
                font-weight: 700;
                padding: 20px 40px;
                border: 3px solid white;
                margin-bottom: 40px;
                border-radius: 10px;
            }

            h1 {
                color: var(--primary);
                font-size: 2.5rem;
                margin-bottom: 30px;
                border-bottom: 2px solid var(--primary);
                padding-bottom: 10px;
            }

            h2 {
                color: var(--text);
                font-size: 1.5rem;
                margin-top: 30px;
                margin-bottom: 15px;
            }

            p {
                line-height: 1.6;
                margin-bottom: 15px;
                color: #555;
            }

            .section-box {
                background: var(--light-gray);
                padding: 20px;
                border-radius: 8px;
                border-left: 5px solid var(--primary);
                margin-bottom: 20px;
            }

            .pipeline-step {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }

            .step-number {
                background: var(--primary);
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                margin-right: 15px;
                flex-shrink: 0;
            }

            .ad-card {
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 15px;
                margin-bottom: 15px;
                background: white;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            }

            .platform-tag {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 0.8rem;
                font-weight: 600;
                margin-bottom: 10px;
            }
            
            .tag-reddit { background: #FF4500; color: white; }
            .tag-linkedin { background: #0077b5; color: white; }
            .tag-insta { background: #E1306C; color: white; }

            .footer {
                position: absolute;
                bottom: 20mm;
                left: 20mm;
                right: 20mm;
                text-align: center;
                font-size: 0.8rem;
                color: #888;
                border-top: 1px solid #eee;
                padding-top: 10px;
            }
            
            .personal-note {
                font-style: italic;
                color: #666;
                border-top: 1px solid #ddd;
                margin-top: 30px;
                padding-top: 20px;
            }
        </style>
    </head>
    <body>

        <!-- Page 1: Cover -->
        <div class="page cover-page">
            <div class="logo-placeholder">COMMIT API</div>
            <div class="cover-title">Strategic Growth Proposal</div>
            <div class="cover-subtitle">Use Motion. Join the Tournament. Live the Game.</div>
            <div style="margin-top: 50px; font-size: 1.2rem;">Prepared for Commit AI</div>
            <div style="margin-top: 10px; font-size: 1rem; opacity: 0.8;">By Keshav Varshney</div>
        </div>

        <!-- Page 2: Executive Summary & Overview -->
        <div class="page">
            <h1>Executive Summary</h1>
            <p>Commit isn't just another fitness tracker; it's a world where sweat meets social currency. You're building an ecosystem where motion intelligence meets high-stakes community gaming. My proposal focuses on amplifying this unique value proposition to the US market.</p>
            
            <div class="section-box">
                <h2>My Vision for Commit</h2>
                <p>I see fitness as a live, gamified social experience. I will help position Commit not as a tool, but as a lifestyle—transforming the "solo grind" into a collective obsession. By leveraging persona-driven AI commentary and immersive tournaments, we will create a digital environment users <em>want</em> to inhabit.</p>
            </div>
            
            <p class="personal-note">"I don't just build camapigns; I build narratives. Commit's story is about breaking isolation through competition. That's the story I want to tell." — Keshav</p>

            <h2>Core Services</h2>
            <ul>
                <li><strong>Social Media Marketing (SMM):</strong> End-to-end content production and community management.</li>
                <li><strong>Search Engine Optimization (SEO):</strong> Dominating "Gamified Fitness" and "AI Workout" keywords.</li>
                <li><strong>Performance Marketing:</strong> High-ROI user acquisition campaigns targeting US fitness enthusiasts and gamers.</li>
            </ul>

            <div class="footer">Confidential Proposal | Page 1</div>
        </div>

        <!-- Page 3: SMM Pipeline -->
        <div class="page">
            <h1>SMM Content Pipeline</h1>
            <p>I've designed a streamlined workflow to turn your raw moments into viral assets across TikTok, Instagram, Facebook, Reddit, and LinkedIn. You focus on the product; I handle the noise.</p>

            <div class="section-box">
                <h2>The Workflow</h2>
                <div class="pipeline-step">
                    <div class="step-number">1</div>
                    <div><strong>Content Ideation:</strong> I provide weekly scripts/concepts based on trending audio and fitness challenges.</div>
                </div>
                <div class="pipeline-step">
                    <div class="step-number">2</div>
                    <div><strong>Raw Capture:</strong> You record simple raw clips based on my briefs. No editing needed.</div>
                </div>
                <div class="pipeline-step">
                    <div class="step-number">3</div>
                    <div><strong>Magic Edit:</strong> I edit, add motion graphics, AI voiceovers, and dynamic captions to match the platform's native style.</div>
                </div>
                <div class="pipeline-step">
                    <div class="step-number">4</div>
                    <div><strong>Distribution:</strong> I handle uploading, captioning, and hashtag optimization across all platforms.</div>
                </div>
            </div>

            <h2>Platform Strategy & Monthly Deliverables</h2>
            <ul>
                <li><strong>TikTok/Reels (5 Videos/Month):</strong> High-energy, fast-paced edits focusing on "The Tournament" aspect.</li>
                <li><strong>Reddit (5 Posts/Month):</strong> Deep-dive community engagement in r/fitness, r/stoppeddrinking, r/getdisciplined.</li>
                <li><strong>LinkedIn (5 Posts/Month):</strong> Thought leadership on "The Future of Fitness is Gamified" and AI integration.</li>
            </ul>

            <div class="footer">Confidential Proposal | Page 2</div>
        </div>

        <!-- Page 4: Content Ideas -->
        <div class="page">
            <h1>Content Strategy Ideas</h1>
            
            <h2>Reddit & LinkedIn (Written Content)</h2>
            <div class="ad-card">
                <span class="platform-tag tag-reddit">Reddit</span>
                <strong>Topic: "Why your solo workout is failing you."</strong>
                <p>A data-backed discussion on how social stakes increase consistency by 300%. Validating the "Commit" philosophy without being overly promotional.</p>
            </div>
            <div class="ad-card">
                <span class="platform-tag tag-linkedin">LinkedIn</span>
                <strong>Topic: "The Death of the Pedometer: Hello, Motion Intelligence."</strong>
                <p>Analyzing how AI and computer vision are replacing basic step-tracking with form correction and competitive scoring.</p>
            </div>

            <h2>Video Concepts (Short-Form)</h2>
            <div class="ad-card">
                <span class="platform-tag tag-insta">Instagram/TikTok</span>
                <strong>Concept: "The AI Coach Roast"</strong>
                <p>Show a user slacking off, and the AI persona roasting them (funny/motivational). "You call that a squat? My grandmother has better form, and she's a cloud server."</p>
            </div>
             <div class="ad-card">
                <span class="platform-tag tag-insta">Instagram/TikTok</span>
                <strong>Concept: "Tournament Mode"</strong>
                <p>Split screen: User vs. Rival. Real-time score updates. High stakes music. "Only one of us is winning this badge today."</p>
            </div>

            <div class="footer">Confidential Proposal | Page 3</div>
        </div>

        <!-- Page 5: Performance Marketing -->
        <div class="page">
            <h1>Performance Marketing</h1>
            <p>Targeting the US market requires precision. I will run aggressive conversion campaigns focusing on "Gamers who lift" and "Fitness competition enthusiasts".</p>

            <h2>Ad Copy Samples (US Market)</h2>
            
            <div class="ad-card">
                <strong>Headline:</strong> Stop working out alone. Start competing.
                <p><strong>Body:</strong> Your gym buddy cancels. The Commit Arena never sleeps. Join the live tournament where your sweat earns you rank. Prove you're not just talk.</p>
                <strong>CTA:</strong> Download & Dominate</strong>
            </div>

            <div class="ad-card">
                <strong>Headline:</strong> Your AI Coach is watching. And judging.
                <p><strong>Body:</strong> Forget generic cheering. Get real-time, persona-driven feedback that actually pushes you harder. It's not just tracking; it's coaching with attitude.</p>
                <strong>CTA:</strong> Meet Your Coach</strong>
            </div>

             <div class="section-box">
                <h2>Targeting Strategy</h2>
                <ul>
                    <li><strong>Interests:</strong> Crossfit, Strava, Peloton, E-sports, League of Legends, Self-improvement.</li>
                    <li><strong>Demographics:</strong> 18-35, US-based, high mobile usage.</li>
                    <li><strong>Format:</strong> 9:16 Video Ads (UGC style) & Carousel Ads (Feature highlights).</li>
                </ul>
            </div>

            <div class="footer">Confidential Proposal | Page 4</div>
        </div>

    </body>
    </html>
    `;

    await page.setContent(content);
    await page.pdf({ path: 'commit_app_proposal.pdf', format: 'A4', printBackground: true });

    await browser.close();
    console.log('PDF Generated Successfully');
})();
