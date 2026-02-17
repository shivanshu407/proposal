<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly } from "svelte/transition";

    const deliverables = [
        {
            platform: "Reddit UGC Seeding",
            detail: "5–10 profiles · 5–10 acquisitions/post",
            color: "#FF4500",
            delay: 100,
        },
        {
            platform: "Instagram Social Media",
            detail: "Brand positioning · Page outlook · 5 posts/mo",
            color: "#E1306C",
            delay: 200,
        },
        {
            platform: "UGC Video Ads",
            detail: "5 UGC videos/mo for paid ads",
            color: "#a500fd",
            delay: 300,
        },
        {
            platform: "Student Ambassador Program",
            detail: "Nano-influencer network activation",
            color: "#00b894",
            delay: 400,
        },
        {
            platform: "Performance Marketing",
            detail: "Facebook & Instagram targeted ads",
            color: "#1877F2",
            delay: 500,
        },
        {
            platform: "Influencer Collabs",
            detail: "2 Instagram collabs per week",
            color: "#fd79a8",
            delay: 600,
        },
        {
            platform: "AI UGC Content",
            detail: "American voice & style costings",
            color: "#6c5ce7",
            delay: 700,
        },
        {
            platform: "TikTok Postings",
            detail: "Trend-driven short-form content",
            color: "#000000",
            delay: 800,
        },
        {
            platform: "LinkedIn Content",
            detail: "Thought leadership & industry writing",
            color: "#0077b5",
            delay: 900,
        },
    ];
</script>

<SlideTransition>
    <h2 class="slide-title">Deliverables</h2>
    <p class="sub">What you get — every single month.</p>

    <div class="grid">
        {#each deliverables as item}
            <div
                class="card"
                style="border-left: 5px solid {item.color}"
                in:fly={{ x: 60, duration: 400, delay: item.delay }}
            >
                <span class="dot" style="background:{item.color}"></span>
                <div>
                    <h4>{item.platform}</h4>
                    <p>{item.detail}</p>
                </div>
            </div>
        {/each}
    </div>
</SlideTransition>

<style>
    .sub {
        color: var(--text-light);
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        width: 90%;
        max-width: 1200px;
    }

    .card {
        background: white;
        padding: 1.2rem 1.4rem;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
        transition: transform 0.25s;
    }

    .card:hover {
        transform: translateY(-4px);
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 6px;
    }

    h4 {
        margin: 0 0 0.3rem;
        font-size: 1rem;
        color: var(--text-dark);
    }

    .card p {
        margin: 0;
        font-size: 0.85rem;
        color: var(--text-light);
        line-height: 1.4;
    }
</style>
