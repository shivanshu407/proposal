<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly, fade, scale } from "svelte/transition";

    const items = [
        { service: "Reddit UGC Seeding", price: 99 },
        { service: "Instagram Social Media", price: 149 },
        { service: "UGC Video Ads (5 videos)", price: 149 },
        { service: "Student Ambassador Program", price: 79 },
        { service: "Performance Marketing (FB)", price: 99 },
        { service: "Influencer Collabs (2/wk)", price: 129 },
        { service: "AI UGC (American)", price: 69 },
        { service: "TikTok Postings", price: 59 },
        { service: "LinkedIn Content Writing", price: 67 },
    ];

    const total = items.reduce((sum, i) => sum + i.price, 0);
</script>

<SlideTransition>
    <h2 class="slide-title">Investment</h2>

    <div class="pricing-table">
        <div class="table-header">
            <span>Service</span>
            <span>Monthly</span>
        </div>

        {#each items as item, i}
            <div
                class="row"
                in:fly={{ x: 40, duration: 350, delay: 100 + i * 80 }}
            >
                <span class="service">{item.service}</span>
                <span class="price">${item.price}</span>
            </div>
        {/each}

        <div
            class="total-row"
            in:scale={{ duration: 600, delay: 1000, start: 0.95 }}
        >
            <span>Total / Month</span>
            <span class="total-price">${total}</span>
        </div>
    </div>
</SlideTransition>

<style>
    .pricing-table {
        width: 70%;
        max-width: 750px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 30px rgba(165, 0, 253, 0.1);
        overflow: hidden;
    }

    .table-header {
        display: flex;
        justify-content: space-between;
        padding: 1.2rem 2rem;
        background: var(--primary);
        color: white;
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .row {
        display: flex;
        justify-content: space-between;
        padding: 0.9rem 2rem;
        border-bottom: 1px solid #f0f0f0;
        transition: background 0.2s;
    }

    .row:hover {
        background: #fdf5ff;
    }

    .service {
        font-size: 0.95rem;
        color: var(--text-dark);
    }

    .price {
        font-weight: 600;
        color: var(--text-dark);
        font-size: 0.95rem;
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        padding: 1.4rem 2rem;
        background: linear-gradient(135deg, #1a0b2e 0%, #a500fd 100%);
        color: white;
        font-weight: 700;
        font-size: 1.3rem;
    }

    .total-price {
        font-size: 1.8rem;
        letter-spacing: -1px;
    }
</style>
