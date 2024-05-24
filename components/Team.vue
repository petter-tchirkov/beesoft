<script setup lang="ts">

</script>
<template>
  <div class="min-h-screen relative flex flex-col justify-center page pt-10">
    <PageTitle title="TEAM" class="mb-3" />
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <div class="mb-9 pr-24 lg:pr-0">
          <p class="text-sequel text-white team__feat">PROFESSIONALISM</p>
          <p class="pl-12 lg:pl-[200px] text-white max-w-[472px]">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do
            eiusmod tempor
            incididunt
            ut labore et dolore
            magna aliqua.</p>
        </div>
        <div class="pr-20 lg:pr-0 mb-9 lg:mb-0">
          <p class="text-sequel text-white team__feat">COLLABORATION</p>
          <p class="pl-12 lg:pl-[200px] text-white max-w-[472px]">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do
            eiusmod tempor
            incididunt
            ut labore et dolore
            magna aliqua.</p>
        </div>
      </div>
      <TeamPortraits class="hidden lg:grid" />
      <div class="w-full lg:w-auto">
        <div class="mb-9 pr-24 lg:pr-0">
          <p class="text-sequel text-white team__feat-right">PROFESSIONALISM</p>
          <p class="pl-10 text-white max-w-[322px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            incididunt
            ut labore et dolore
            magna aliqua.</p>
        </div>
        <div class="mb-9 lg:mb-0 pr-24 lg:pr-0">
          <p class="text-sequel text-white team__feat-right">COLLABORATION</p>
          <p class="pl-10 text-white max-w-[322px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            incididunt
            ut labore et dolore
            magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team__feat {
  border: 2px solid #ff2e00;
  border-top-right-radius: 37px;
  border-bottom-right-radius: 37px;
  padding-block: 24px;
  padding-right: 65px;
  padding-left: 170px;
  box-shadow: 0px 0px 20px #ff2f01;
  margin-bottom: 20px;
}

.team__feat-right {
  padding-left: 65px;
  padding-right: 170px;
  box-shadow: 0px 0px 20px #ff2f01;
  border: 2px solid #ff2e00;
  border-top-left-radius: 37px;
  border-bottom-left-radius: 37px;
  padding-block: 24px;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .team__feat {
    padding-left: 48px;
  }

  .team__feat-right {
    padding-right: 48px;
    border-top-right-radius: 37px;
    border-bottom-right-radius: 37px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
