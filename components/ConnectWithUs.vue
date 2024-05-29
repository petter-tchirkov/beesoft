<template>
    <div class="min-h-screen relative flex flex-col justify-center page pt-44 lg:pt-10">
        <PageTitle title="CONNECT WITH US" class="mb-3" />
        <div class="flex flex-col lg:flex-row max-w-[1100px] mx-auto mb-40 lg:mb-10">
            <LogoModel />
            <ConnectForm />
        </div>
        <div class="flex flex-col lg:flex-row items-end max-w-[1100px] lg:mx-auto gap-24 pr-20 lg:pr-0 pb-20">
            <div class="relative w-36">
                <img src="/images/connect/2.svg" class="absolute -z-10 -top-8 -left-16" alt="">
                <div class="flex items-center gap-3">
                    <img src="/images/connect/usa.svg" alt="">
                    <span class="text-white text-sequel">USA</span>
                </div>
                <div class="text-white flex flex-col">
                    <span>Address</span>
                    <span>+380 123 45 67</span>
                </div>
            </div>
            <div class="relative w-36">
                <img src="/images/connect/2.svg" class="absolute -z-10 -top-8 -left-16" alt="">
                <div class="flex items-center gap-3">
                    <img src="/images/connect/ua.svg" alt="">
                    <span class="text-white text-sequel">USA</span>
                </div>
                <div class="text-white flex flex-col">
                    <span>Address</span>
                    <span>+380 123 45 67</span>
                </div>
            </div>
            <div class="relative w-36">
                <img src="/images/connect/2.svg" class="absolute -z-10 -top-8 -left-16" alt="">
                <div class="flex items-center gap-3">
                    <img src="/images/connect/pl.svg" alt="">
                    <span class="text-white text-sequel">USA</span>
                </div>
                <div class="text-white flex flex-col">
                    <span>Address</span>
                    <span>+380 123 45 67</span>
                </div>
            </div>
        </div>
    </div>
</template>