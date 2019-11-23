<template>
    <div class="container">
        <div class="row justify-content-center align-items-center lh-40 links mt-100 mb-100">
<p>Please wait... or <a href="/litepaper.pdf">Click here to continue </a>
</p>
</div>
</div>
</template>

<script>
export default {
  name: "Litepaper",
  head() {
    return {
      title: "Litepaper"
    };
},
mounted()
{
    window.location.replace("https://www.razor.network/litepaper.pdf");
}
}
</script>

<style>
</style>
