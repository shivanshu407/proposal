<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly } from "svelte/transition";

    const deliverables = [
        {
            platform: "TikTok / Reels",
            count: "5 Videos / Month",
            color: "#E1306C",
            delay: 200,
        },
        {
            platform: "Reddit",
            count: "5 Posts / Month",
            color: "#FF4500",
            delay: 400,
        },
        {
            platform: "LinkedIn",
            count: "5 Posts / Month",
            color: "#0077b5",
            delay: 600,
        },
    ];
</script>

<SlideTransition>
    <h2 class="slide-title">Monthly Deliverables</h2>

    <div class="deliverables-container">
        {#each deliverables as item}
            <div
                class="del-row"
                style="background-color: {item.color}"
                in:fly={{ x: 100, duration: 600, delay: item.delay }}
            >
                <div class="platform">{item.platform}</div>
                <div class="count">{item.count}</div>
            </div>
        {/each}
    </div>
</SlideTransition>

<style>
    .deliverables-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;
        max-width: 900px;
    }

    .del-row {
        padding: 2rem 3rem;
        border-radius: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
    }

    .del-row:hover {
        transform: scale(1.02);
    }

    .platform {
        font-size: 2.2rem;
        font-weight: 700;
    }

    .count {
        font-size: 2.2rem;
        font-weight: 400;
        opacity: 0.95;
    }
</style>
