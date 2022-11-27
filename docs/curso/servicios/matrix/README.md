---
title: ¿Que es Matrix?
index: false
icon: creative
category:
  - Network
  - Servicios
---

Matrix

# Instalación SYNAPSE

```bash

sudo dnf search cockpit 
[sudo] password for user: 
Última comprobación de caducidad de metadatos hecha hace 2:08:31, el mar 20 sep 2022 22:50:56.
================= Coincidencia exacta en Nombre: cockpit ==================
cockpit.x86_64 : Web Console for Linux servers
================ Coincidencia en Nombre , Resumen: cockpit ================
cockpit-389-ds.noarch : Cockpit UI Plugin for configuring and administering
                      : the 389 Directory Server

cockpit-composer.noarch : Composer GUI for use with Cockpit
cockpit-doc.noarch : Cockpit deployment and developer guide
cockpit-file-sharing.noarch : Cockpit user interface for managing SMB and
                            : NFS file sharing.
cockpit-kdump.noarch : Cockpit user interface for kernel crash dumping
cockpit-machines.noarch : Cockpit user interface for virtual machines
cockpit-navigator.noarch : A File System Browser for Cockpit
cockpit-ostree.noarch : Cockpit user interface for rpm-ostree
cockpit-pcp.x86_64 : Cockpit PCP integration
cockpit-podman.noarch : Cockpit component for Podman containers
cockpit-selinux.noarch : Cockpit SELinux package
cockpit-session-recording.noarch : Cockpit Session Recording
cockpit-sosreport.noarch : Cockpit user interface for diagnostic reports
==================== Coincidencia en Resumen: cockpit =====================
polarsys-b612-fonts.noarch : Sans-serif fonts designed for reading comfort
                           : and safety in aeroplane cockpits
polarsys-b612-mono-fonts.noarch : Monospace fonts designed for reading
                                : comfort and safety in aeroplane cockpits
```

- Instalamos el servicio cockpit

```bash
dnf install cockpit
```

- Arrancamos el servicio

```bash
systemctl start cockpit
```
