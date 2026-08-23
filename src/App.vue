<template>
  <div id="app" @click="closeAllMenus">
    <div class="scroll-progress-track" aria-hidden="true">
      <div class="scroll-progress-bar" :style="{ transform: `scaleX(${scrollProgress})` }"></div>
    </div>

    <header class="navbar" :class="{ 'is-scrolled': isScrolled }" @click.stop>
      <div class="nav-container">

        <div class="nav-left">
          <router-link to="/" class="logo">Swychremit</router-link>
        </div>

        <div class="nav-right">
          <div class="desktop-menu-links">
            <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
            <router-link to="/help" class="nav-link">{{ $t('nav.help') }}</router-link>
          </div>

          <div class="auth-actions-cluster">
            <router-link to="/download" class="download-pill-btn" v-magnetic="10">
              <span class="dl-icon">↓</span> Download
            </router-link>
          </div>

          <button class="hamburger-toggle-btn" :class="{ 'is-active': isMobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle Navigation Menu">
            <span class="bar-line"></span>
            <span class="bar-line"></span>
            <span class="bar-line"></span>
          </button>
        </div>

      </div>
    </header>

    <div class="mobile-drawer-backdrop" :class="{ 'is-open': isMobileMenuOpen }" @click="closeMobileMenu"></div>

    <div class="mobile-navigation-drawer" :class="{ 'is-open': isMobileMenuOpen }" @click.stop>
      <div class="drawer-inner-content">

        <router-link
          to="/about"
          class="drawer-plain-link"
          style="--i: 0"
          @click="closeMobileMenu"
        >
          {{ $t('nav.about') }}
        </router-link>

        <router-link
          to="/help"
          class="drawer-plain-link"
          style="--i: 1"
          @click="closeMobileMenu"
        >
          {{ $t('nav.help') }}
        </router-link>

        <div class="drawer-action-wrapper" style="--i: 2">
          <router-link
            to="/download"
            class="download-pill-btn full-width-btn"
            @click="closeMobileMenu"
          >
            <span class="dl-icon">↓</span> {{ $t('nav.download') }}
          </router-link>
        </div>

      </div>
    </div>

    <main class="app-body-surface">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <FooterView />

    <button
      class="back-to-top-btn"
      :class="{ 'is-visible': showBackToTop }"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24"><path d="M12 5l-7 7h4v7h6v-7h4z"/></svg>
    </button>
  </div>
</template>


<script>

import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    FooterView
  },
  data() {
    return {
      activeDropdown: null,
      isMobileMenuOpen: false,
      activeMobileAccordion: null,
      isScrolled: false,
      showBackToTop: false,
      scrollProgress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 12
      this.showBackToTop = window.scrollY > 500
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      this.scrollProgress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    toggleDropdown(menuName) {
      this.activeDropdown = this.activeDropdown === menuName ? null : menuName
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : ''
    },
    toggleMobileAccordion(sectionName) {
      this.activeMobileAccordion = this.activeMobileAccordion === sectionName ? null : sectionName
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      document.body.style.overflow = ''
    },
    closeAllMenus() {
      this.activeDropdown = null
      this.isMobileMenuOpen = false
      this.activeMobileAccordion = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --clr-purple-900: #2f0a4e;
  --clr-purple-800: #3b1565;
  --clr-purple-700: #5c1791;
  --clr-purple-600: #7B1FA2;
  --clr-purple-500: #8c1bc1;
  --clr-purple-400: #a855d9;
  --clr-purple-100: #f3e8ff;
  --clr-purple-50: #faf5ff;

  --clr-mint-500: #00d09c;
  --clr-mint-600: #00b386;

  --clr-ink-900: #0f172a;
  --clr-ink-700: #1e293b;
  --clr-ink-500: #475569;
  --clr-ink-400: #64748b;
  --clr-ink-300: #94a3b8;

  --clr-surface-0: #ffffff;
  --clr-surface-50: #f8fafc;
  --clr-surface-100: #f1f5f9;
  --clr-border: #e2e8f0;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 999px;

  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 12px 30px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 25px 50px -12px rgba(15, 23, 42, 0.12);
  --shadow-purple: 0 12px 28px rgba(123, 31, 162, 0.28);
  --shadow-purple-lg: 0 20px 45px rgba(123, 31, 162, 0.35);

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  --dur-fast: 160ms;
  --dur-base: 320ms;
  --dur-slow: 600ms;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif !important;
}

html {
  scroll-behavior: smooth;
}

::selection {
  background: var(--clr-purple-600);
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--clr-surface-50);
}

::-webkit-scrollbar-thumb {
  background: var(--clr-purple-400);
  border-radius: var(--radius-full);
  border: 2px solid var(--clr-surface-50);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--clr-purple-600);
}

#app {
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  display: block !important;
  background-color: #ffffff;
  position: relative;
}

#app::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  pointer-events: none;
  opacity: 0.025;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@media (prefers-reduced-motion: reduce) {
  #app::after {
    display: none;
  }
}

.magnetic-el {
  transition: transform 220ms var(--ease-out-expo);
}

.tilt-el {
  transition: transform 320ms var(--ease-out-expo);
  transform-style: preserve-3d;
}

.scroll-progress-track {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1100;
  background: transparent;
  pointer-events: none;
}

.scroll-progress-bar {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--clr-purple-600), var(--clr-mint-500));
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 80ms linear;
  box-shadow: 0 0 8px rgba(0, 208, 156, 0.5);
}

body {
  background-color: #ffffff;
  color: #1e293b;
  overflow-x: hidden;
}

/* -------------------- Scroll reveal utility -------------------- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--dur-slow) var(--ease-out-expo), transform var(--dur-slow) var(--ease-out-expo);
  will-change: opacity, transform;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

/* -------------------- Page transition -------------------- */
.page-fade-enter-active {
  transition: opacity var(--dur-base) var(--ease-out-expo), transform var(--dur-base) var(--ease-out-expo);
}
.page-fade-leave-active {
  transition: opacity 180ms ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.page-fade-leave-to {
  opacity: 0;
}

/* -------------------- Navbar -------------------- */
.navbar {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border-bottom: 1px solid transparent;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), background-color var(--dur-base) var(--ease-standard);
}

.navbar.is-scrolled {
  border-bottom-color: var(--clr-border);
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.nav-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding var(--dur-base) var(--ease-standard);
}

.navbar.is-scrolled .nav-container {
  padding: 0.85rem 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-standard);
  display: inline-block;
  background: linear-gradient(120deg, var(--clr-ink-900), var(--clr-purple-600) 55%, var(--clr-mint-500));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: logoSheen 6s ease-in-out infinite;
}

.logo:hover {
  transform: translateY(-1px);
}

@keyframes logoSheen {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.desktop-menu-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link, .drop-trigger-btn {
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--clr-purple-600), var(--clr-mint-500));
  border-radius: var(--radius-full);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out-expo);
}

.nav-link:hover, .drop-trigger-btn:hover {
  color: #1e293b;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.chevron-arrow {
  font-size: 0.65rem;
  color: #94a3b8;
}

.download-pill-btn {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--clr-purple-600), var(--clr-purple-500));
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform var(--dur-fast) var(--ease-out-expo), box-shadow var(--dur-fast) var(--ease-out-expo);
  text-decoration: none !important;
  box-shadow: 0 6px 16px rgba(123, 31, 162, 0.22);
}

.download-pill-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent);
  transform: skewX(-20deg);
  transition: left 600ms var(--ease-out-expo);
}

.download-pill-btn:hover {
  box-shadow: var(--shadow-purple-lg);
}

.download-pill-btn:hover::before {
  left: 130%;
}

.dl-icon {
  display: inline-flex;
  transition: transform var(--dur-fast) var(--ease-standard);
}

.download-pill-btn:hover .dl-icon {
  transform: translateY(2px);
}

.hamburger-toggle-btn, .mobile-navigation-drawer, .mobile-drawer-backdrop {
  display: none !important;
}

/* -------------------- Back to top -------------------- */
.back-to-top-btn {
  position: fixed;
  right: 1.75rem;
  bottom: 1.75rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--clr-purple-600), var(--clr-purple-500));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-purple);
  z-index: 900;
  opacity: 0;
  transform: translateY(16px) scale(0.9);
  pointer-events: none;
  transition: opacity var(--dur-base) var(--ease-out-expo), transform var(--dur-base) var(--ease-out-expo), box-shadow var(--dur-fast) ease;
}

.back-to-top-btn.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.back-to-top-btn:hover {
  box-shadow: var(--shadow-purple-lg);
  transform: translateY(-3px) scale(1.04);
}

.back-to-top-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

@media (max-width: 992px) {
  .desktop-menu-links, .auth-actions-cluster {
    display: none !important;
  }

  .nav-container {
    padding: 1rem 1.2rem;
  }

  .hamburger-toggle-btn {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2000;
    padding: 0;
  }

  .bar-line {
    width: 100%;
    height: 2.5px;
    background-color: #1e293b;
    border-radius: 2px;
    transition: all var(--dur-fast) ease;
  }

  .hamburger-toggle-btn.is-active .bar-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger-toggle-btn.is-active .bar-line:nth-child(2) {
    opacity: 0;
  }
  .hamburger-toggle-btn.is-active .bar-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-drawer-backdrop {
    display: block !important;
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.35);
    backdrop-filter: blur(2px);
    z-index: 998;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--dur-base) ease;
  }

  .mobile-drawer-backdrop.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-navigation-drawer {
    display: block !important;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #ffffff;
    z-index: 999;
    padding: 2rem 1.5rem;
    transform: translateX(-100%);
    transition: transform 360ms var(--ease-out-expo);
    overflow-y: auto;
  }

  .mobile-navigation-drawer.is-open {
    transform: translateX(0) !important;
  }

  .drawer-plain-link,
  .drawer-action-wrapper {
    opacity: 0;
    transform: translateX(-14px);
  }

  .mobile-navigation-drawer.is-open .drawer-plain-link,
  .mobile-navigation-drawer.is-open .drawer-action-wrapper {
    animation: drawerItemIn 420ms var(--ease-out-expo) forwards;
    animation-delay: calc(var(--i, 0) * 70ms + 80ms);
  }

  @keyframes drawerItemIn {
    to { opacity: 1; transform: translateX(0); }
  }

  .drawer-accordion-item {
    border-bottom: 1px solid #f1f5f9;
    padding: 0.2rem 0;
  }

  .drawer-link-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0;
    background: transparent;
    border: none;
    font-size: 1.05rem;
    font-weight: 700;
    color: #1e293b;
  }

  .drawer-sub-links-box {
    display: none;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0 0 1.2rem 1rem;
  }

  .drawer-sub-links-box.is-expanded {
    display: flex !important;
  }

  .drawer-sub-links-box a {
    font-size: 0.95rem;
    font-weight: 600;
    color: #64748b;
    text-decoration: none;
  }

  .drawer-plain-link {
    display: block;
    padding: 1.2rem 0;
    font-size: 1.05rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
    border-bottom: 1px solid #f1f5f9;
    transition: color var(--dur-fast) ease, padding-left var(--dur-fast) ease;
  }

  .drawer-plain-link:active {
    color: var(--clr-purple-600);
  }

  .drawer-action-wrapper {
    margin-top: 3rem;
  }

  .full-width-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }

  .back-to-top-btn {
    right: 1.1rem;
    bottom: 1.1rem;
    width: 44px;
    height: 44px;
  }
}
</style>
