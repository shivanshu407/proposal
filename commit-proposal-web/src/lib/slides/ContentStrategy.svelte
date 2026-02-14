<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly } from "svelte/transition";
</script>

<SlideTransition>
    <h2 class="slide-title">Content Strategy Ideas</h2>

    <div class="grid-container">
        <div class="column" in:fly={{ y: 50, duration: 600, delay: 200 }}>
            <h3>Written (Reddit/LinkedIn)</h3>
            <div class="card">
                <h4>Reddit</h4>
                <p><strong>"Why your solo workout is failing you."</strong></p>
                <p class="desc">
                    Data-backed discussion on social stakes increasing
                    consistency by 300%.
                </p>
            </div>
            <div class="card">
                <h4>LinkedIn</h4>
                <p><strong>"The Death of the Pedometer"</strong></p>
                <p class="desc">
                    Analysis of how Motion Intelligence is rewriting fitness
                    tracking rules.
                </p>
            </div>
        </div>

        <div class="column" in:fly={{ y: 50, duration: 600, delay: 400 }}>
            <h3>Video (Reels/TikTok)</h3>
            <div class="card video-card">
                <h4>Concept: The AI Coach Roast</h4>
                <p class="desc">
                    Persona roasting poor form. "My grandmother squats better,
                    and she's a server."
                </p>
            </div>
            <div class="card video-card">
                <h4>Concept: Tournament Mode</h4>
                <p class="desc">
                    Split screen: User vs Rival. Real-time scores. High stakes
                    music.
                </p>
            </div>
        </div>
    </div>
</SlideTransition>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        width: 100%;
        max-width: 1200px;
    }

    h3 {
        color: var(--primary);
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        border: 1px solid #eee;
        margin-bottom: 1.5rem;
    }

    h4 {
        margin: 0 0 0.5rem 0;
        color: var(--primary);
        font-size: 1.2rem;
    }

    p {
        margin: 0.5rem 0;
    }

    .desc {
        color: var(--text-light);
        font-size: 0.95rem;
    }

    .video-card {
        background: #fbf5ff;
        border-color: #f0d9ff;
    }
</style>
