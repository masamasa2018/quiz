
<template>
<div>

<p class="common_title2">れとろクイズとは？</p>

<p class="site_concept_body">当サイトでは、70年代や80年代のレトロなカルチャー（音楽やドラマ）、時事ネタなどを題材にしたクイズを配信しています。</p>
<p class="site_concept_body">ただのクイズではなく、ユニークなエピソードやストーリーを盛り込んで、読み物としても楽しめるクイズを目指しています。</p>
<p class="site_concept_body">もしクイズの中で、事実と違うと感じる点があれば、遠慮なくご指摘ください。ご意見をお待ちしております。</p>
<p class="site_concept_body"></p>
<p class="site_concept_body">問い合わせは以下からお願いいたします。</p>

<RouterLink v-bind:to="{ path: '/inquiry' }">
    <h4 class="link">お問い合わせ</h4>
</RouterLink>
</div>
</template>

<style lang="scss">
.link{
  text-align: center;
}
.site_concept_body {
 font-size: 1em;
 padding: 0.1em;
 margin: 0.1em;
}

</style>
    