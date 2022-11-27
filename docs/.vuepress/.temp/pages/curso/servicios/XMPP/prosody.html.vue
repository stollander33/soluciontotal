<template><div><h1 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h1>
<Tabs :data='[{"title":"debian"},{"title":"centos"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<p>todo</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>Es necesario que epel-release este instalado:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
<span class="token function">sudo</span> yum update <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Instalamos el paquete:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> prosody <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>
