<template><div><p>Cockpit</p>
<h1 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dnf search cockpit 
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> password <span class="token keyword">for</span> user: 
Última comprobación de caducidad de metadatos hecha hace <span class="token number">2</span>:08:31, el mar <span class="token number">20</span> sep <span class="token number">2022</span> <span class="token number">22</span>:50:56.
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Coincidencia exacta en Nombre: cockpit <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
cockpit.x86_64 <span class="token builtin class-name">:</span> Web Console <span class="token keyword">for</span> Linux servers
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> Coincidencia en Nombre , Resumen: cockpit <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
cockpit-389-ds.noarch <span class="token builtin class-name">:</span> Cockpit UI Plugin <span class="token keyword">for</span> configuring and administering
                      <span class="token builtin class-name">:</span> the <span class="token number">389</span> Directory Server

cockpit-composer.noarch <span class="token builtin class-name">:</span> Composer GUI <span class="token keyword">for</span> use with Cockpit
cockpit-doc.noarch <span class="token builtin class-name">:</span> Cockpit deployment and developer guide
cockpit-file-sharing.noarch <span class="token builtin class-name">:</span> Cockpit user interface <span class="token keyword">for</span> managing SMB and
                            <span class="token builtin class-name">:</span> NFS <span class="token function">file</span> sharing.
cockpit-kdump.noarch <span class="token builtin class-name">:</span> Cockpit user interface <span class="token keyword">for</span> kernel crash dumping
cockpit-machines.noarch <span class="token builtin class-name">:</span> Cockpit user interface <span class="token keyword">for</span> virtual machines
cockpit-navigator.noarch <span class="token builtin class-name">:</span> A File System Browser <span class="token keyword">for</span> Cockpit
cockpit-ostree.noarch <span class="token builtin class-name">:</span> Cockpit user interface <span class="token keyword">for</span> rpm-ostree
cockpit-pcp.x86_64 <span class="token builtin class-name">:</span> Cockpit PCP integration
cockpit-podman.noarch <span class="token builtin class-name">:</span> Cockpit component <span class="token keyword">for</span> Podman containers
cockpit-selinux.noarch <span class="token builtin class-name">:</span> Cockpit SELinux package
cockpit-session-recording.noarch <span class="token builtin class-name">:</span> Cockpit Session Recording
cockpit-sosreport.noarch <span class="token builtin class-name">:</span> Cockpit user interface <span class="token keyword">for</span> diagnostic reports
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> Coincidencia en Resumen: cockpit <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
polarsys-b612-fonts.noarch <span class="token builtin class-name">:</span> Sans-serif fonts designed <span class="token keyword">for</span> reading comfort
                           <span class="token builtin class-name">:</span> and safety <span class="token keyword">in</span> aeroplane cockpits
polarsys-b612-mono-fonts.noarch <span class="token builtin class-name">:</span> Monospace fonts designed <span class="token keyword">for</span> reading
                                <span class="token builtin class-name">:</span> comfort and safety <span class="token keyword">in</span> aeroplane cockpits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Instalamos el servicio cockpit</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>dnf <span class="token function">install</span> cockpit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Arrancamos el servicio</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start cockpit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
