<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
</script>

<SlideTransition>
    <h2 class="slide-title">Performance Marketing (US)</h2>

    <div class="ads-container">
        <div class="ad-set anim-1">
            <div class="ad-header">
                <span class="badge">Ad Set 1</span>
                <span class="objective">Objective: App Installs</span>
            </div>
            <div class="ad-body">
                <div class="field">
                    <label>Audience</label>
                    <p>Gamers who lift · Crossfit · E-sports fans</p>
                </div>
                <div class="field">
                    <label>Age / Geo</label>
                    <p>18–34 · United States</p>
                </div>
                <div class="field">
                    <label>Placements</label>
                    <div class="tags">
                        <span class="tag">IG Reels</span>
                        <span class="tag">FB Feed</span>
                        <span class="tag">Stories</span>
                    </div>
                </div>
                <div class="field">
                    <label>Creative</label>
                    <p>
                        UGC Video — "Your gym buddy cancels. The Arena never
                        sleeps."
                    </p>
                </div>
                <div class="field">
                    <label>CTA</label>
                    <div class="cta-btn">Download & Dominate</div>
                </div>
            </div>
        </div>

        <div class="ad-set anim-2">
            <div class="ad-header alt">
                <span class="badge">Ad Set 2</span>
                <span class="objective">Objective: Engagement</span>
            </div>
            <div class="ad-body">
                <div class="field">
                    <label>Audience</label>
                    <p>Fitness app users · MyFitnessPal · Strava lookalikes</p>
                </div>
                <div class="field">
                    <label>Age / Geo</label>
                    <p>21–40 · United States</p>
                </div>
                <div class="field">
                    <label>Placements</label>
                    <div class="tags">
                        <span class="tag">IG Feed</span>
                        <span class="tag">TikTok</span>
                        <span class="tag">Audience Network</span>
                    </div>
                </div>
                <div class="field">
                    <label>Creative</label>
                    <p>
                        AI Coach Roast — "Your AI Coach is watching. And
                        judging."
                    </p>
                </div>
                <div class="field">
                    <label>CTA</label>
                    <div class="cta-btn">Meet Your Coach</div>
                </div>
            </div>
        </div>
    </div>
</SlideTransition>

<style>
    .ads-container {
        display: flex;
        gap: 2rem;
        justify-content: center;
        width: 90%;
        max-width: 1100px;
    }

    .ad-set {
        flex: 1;
        background: white;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transform: translateY(25px);
    }

    .anim-1 {
        animation: slideUp 0.5s ease-out 0.3s forwards;
    }
    .anim-2 {
        animation: slideUp 0.5s ease-out 0.5s forwards;
    }

    @keyframes slideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ad-header {
        background: var(--primary);
        color: white;
        padding: 0.8rem 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ad-header.alt {
        background: linear-gradient(135deg, #1a0b2e, #a500fd);
    }

    .badge {
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .objective {
        font-size: 0.78rem;
        opacity: 0.9;
    }

    .ad-body {
        padding: 1.2rem 1.4rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--primary);
        font-weight: 700;
    }

    .ad-body p {
        margin: 0;
        font-size: 0.88rem;
        color: var(--text-dark);
        line-height: 1.4;
    }

    .tags {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
    }

    .tag {
        background: #f3e8ff;
        color: var(--primary);
        padding: 0.25rem 0.6rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .cta-btn {
        background: black;
        color: white;
        text-align: center;
        padding: 0.7rem;
        border-radius: 8px;
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
</style>
