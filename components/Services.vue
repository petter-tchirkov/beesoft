<template>
    <div class="min-h-screen relative flex flex-col justify-center page pt-40 lg:pt-10">
        <PageTitle title="SERVICES" />
        <section class="bg-gray-900 text-center py-5 lg:px-8 xl:px-0 flex flex-col justify-center">
            <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-2 lg:mx-auto max-w-[960px]">
                <div class="card bg-gray-800 p-6 relative max-h-[200px] group">
                    <div class="circle max-w-[230px]">
                    </div>
                    <div class="relative lg:pr-28">
                        <h2 class="uppercase text-orange mb-4 text-sequel group-hover:text-white transition-colors">
                            uI/uX <br />
                            creative
                            design</h2>
                        <p class="text-white text-sm max-w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                            eiusmod
                            tempor incididunt et dolore magna aliqua.</p>
                    </div>
                    <div class="icon"></div>
                </div>
                <div class="card bg-gray-800 p-6 relative max-h-[200px] group">
                    <div class="circle max-w-[230px]">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="uppercase text-orange   mb-4 text-sequel group-hover:text-white transition-color">
                            visual <br /> graphic design</h2>
                        <p class="text-white text-sm max-w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="card bg-gray-800 p-6 relative max-h-[200px] group">
                    <div class="circle max-w-[230px]">
                    </div>
                    <div class="relative lg:pr-44">
                        <h2 class="uppercase text-orange   mb-4 text-sequel group-hover:text-white transition-color4">
                            strategy & <br />digital marketing
                        </h2>
                        <p class="text-white text-sm max-w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="card bg-gray-800 p-6 relative max-h-[200px] group">
                    <div class="circle max-w-[230px]">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="uppercase text-orange   mb-4 text-sequel group-hover:text-white transition-color4">
                            effective<br /> business growth</h2>
                        <p class="text-white text-sm max-w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@mixin mQ($rem) {
    @media screen and (min-width: $rem) {
        @content;
    }
}

h2 {
    /* font-family: "Playfair Display", serif; */
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.card {
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        transition: 0.6s;
        z-index: 0;
    }

    @include mQ(1024px) {
        &:nth-child(1)::before {
            bottom: 0;
            right: 0;
            clip-path: circle(calc(2.25rem + 7.5vw) at 100% 100%);
            background: linear-gradient(308deg, #ff2e00 8.89%, rgba(255, 46, 0, 0) 67.92%);
        }

        &:nth-child(2)::before {
            bottom: 0;
            left: 0;
            clip-path: circle(calc(2.25rem + 7.5vw) at 0% 100%);
            background: linear-gradient(35deg, #ff2e00 8.89%, rgba(255, 46, 0, 0) 67.92%);
        }

        &:nth-child(3)::before {
            top: 0;
            right: 0;
            clip-path: circle(calc(2.25rem + 7.5vw) at 100% 0%);
            background: linear-gradient(215deg, #ff2e00 8.89%, rgba(255, 46, 0, 0) 67.92%);
        }

        &:nth-child(4)::before {
            top: 0;
            left: 0;
            clip-path: circle(calc(2.25rem + 7.5vw) at 0% 0%);
            background: linear-gradient(148deg, #ff2e00 8.89%, rgba(255, 46, 0, 0) 67.92%);

        }

    }


    p {
        transition: 0.8s;
    }
}

.card:hover::before {
    clip-path: circle(110vw at 100% 100%);
}

.card:hover p {
    color: #fff;
}

.circle {
    @include mQ(62.5rem) {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
}

.card:nth-child(1) .circle {
    background: url('/images/services/1.jpg') no-repeat 50% 50% / cover;
    bottom: 0;
    right: 0;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
}

.card:nth-child(2) .circle {
    background: url('/images/services/2.jpg') no-repeat 50% 50% / cover;
    bottom: 0;
    left: 0;
    clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
}

.card:nth-child(3) .circle {
    background: url('/images/services/3.jpg') no-repeat 50% 50% / cover;
    top: 0;
    right: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
}

.card:nth-child(4) .circle {
    background: url('/images/services/4.jpg') no-repeat 50% 50% / cover;
    top: 0;
    left: 0;
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
}
</style>
