<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { scale, fade } from "svelte/transition";

    const steps = [
        {
            num: 1,
            title: "Ideation",
            desc: "Weekly concepts & scripts based on trends.",
        },
        {
            num: 2,
            title: "Capture",
            desc: "You record simple raw clips. No editing.",
        },
        {
            num: 3,
            title: "Magic Edit",
            desc: "I add motion graphics, AI voiceovers & polish.",
        },
        {
            num: 4,
            title: "Distribute",
            desc: "Uploading, captions & hashtag optimization.",
        },
    ];
</script>

<SlideTransition>
    <h2 class="slide-title">SMM Content Pipeline</h2>
    <p class="subtitle">From Raw Clips to Viral Assets</p>

    <div class="pipeline-grid">
        {#each steps as step, i}
            <div
                class="step-card"
                in:scale={{ duration: 500, delay: 200 + i * 200 }}
            >
                <div class="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
            </div>
            {#if i < steps.length - 1}
                <div class="arrow" in:fade={{ delay: 300 + i * 200 }}>→</div>
            {/if}
        {/each}
    </div>
</SlideTransition>

<style>
    .subtitle {
        font-size: 1.5rem;
        color: var(--text-light);
        margin-bottom: 4rem;
    }

    .pipeline-grid {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: 1400px;
    }

    .step-card {
        flex: 1;
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 8px 20px rgba(165, 0, 253, 0.1);
        text-align: center;
        position: relative;
        border: 2px solid transparent;
        transition: transform 0.3s;
    }

    .step-card:hover {
        transform: translateY(-10px);
        border-color: var(--primary);
    }

    .step-num {
        background: var(--primary);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 1.5rem;
    }

    h3 {
        color: var(--primary);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-light);
    }

    .arrow {
        font-size: 2rem;
        color: #ddd;
        font-weight: 300;
    }
</style>
