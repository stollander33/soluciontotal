<template><div><div class="custom-container tip"><p class="custom-container-title">Comprobación de integridad en Linux</p>
<ul>
<li>Duración  :  10 minutos</li>
<li>Dificultad:  Fácil</li>
<li>Objetivo:  Utilizar la suma de comprobación de ficheros.</li>
<li>Material. Ordenador con GNU Linux</li>
</ul>
</div>
<ol>
<li>En Linux el comando <strong>sum</strong> permite obtener de un fichero el equivalente al dígito de control de la cuenta bancaria. Si  modificamos el fichero, el valor devuelto por sum cambia.</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> esto es una prueba <span class="token operator">></span> a
<span class="token function">sum</span> a
<span class="token operator">></span>  01578 
<span class="token builtin class-name">echo</span> mas <span class="token operator">>></span>a
<span class="token function">sum</span> a
<span class="token operator">></span>  00204 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
