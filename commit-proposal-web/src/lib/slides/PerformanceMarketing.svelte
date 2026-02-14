<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fade, blur } from "svelte/transition";
</script>

<SlideTransition>
    <h2 class="slide-title">Performance Marketing (US)</h2>
    <p class="subtitle" in:fade>
        Targeting: Gamers who lift, Crossfit, E-sports fans.
    </p>

    <div class="ads-container">
        <div
            class="ad-mockup"
            in:blur={{ amount: 10, duration: 800, delay: 200 }}
        >
            <div class="ad-header">Ad Copy A</div>
            <div class="ad-content">
                <h5>Stop working out alone. Start competing.</h5>
                <p>
                    Your gym buddy cancels. The Commit Arena never sleeps. Join
                    the live tournament where your sweat earns you rank.
                </p>
                <div class="cta">Download & Dominate</div>
            </div>
        </div>

        <div
            class="ad-mockup"
            in:blur={{ amount: 10, duration: 800, delay: 400 }}
        >
            <div class="ad-header">Ad Copy B</div>
            <div class="ad-content">
                <h5>Your AI Coach is watching. And judging.</h5>
                <p>
                    Forget generic cheering. Get real-time, persona-driven
                    feedback that actually pushes you harder.
                </p>
                <div class="cta">Meet Your Coach</div>
            </div>
        </div>
    </div>
</SlideTransition>

<style>
    .subtitle {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 3rem;
        color: var(--text-light);
    }

    .ads-container {
        display: flex;
        gap: 3rem;
        justify-content: center;
    }

    .ad-mockup {
        width: 350px;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .ad-header {
        background: var(--primary);
        color: white;
        padding: 1rem;
        font-weight: 700;
        text-align: center;
    }

    .ad-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    h5 {
        font-size: 1.4rem;
        margin: 0;
        line-height: 1.3;
    }

    p {
        color: var(--text-light);
        line-height: 1.6;
    }

    .cta {
        background: black;
        color: white;
        text-align: center;
        padding: 1rem;
        border-radius: 8px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
