<template>
  <div id="app" @click="closeAllMenus">
    <header class="navbar" @click.stop>
      <div class="nav-container">
        
        <div class="nav-left">
          <div class="logo">SwyChr<span>Remit</span></div>
        </div>

        
        <div class="nav-right">
          <div class="desktop-menu-links">
            
         
            <div class="dropdown-wrapper">
              <button class="drop-trigger-btn" @click="toggleDropdown('features')">
                Features <span class="chevron-arrow">▼</span>
              </button>
              <div class="mega-menu-panel" :class="{ 'is-visible': activeDropdown === 'features' }">
                <div class="mega-grid-col">
                  <h4>Global Accounts</h4>
                  <a href="#">Multi-Currency Wallet</a>
                  <a href="#">Receive Money Internationally</a>
                </div>
                <div class="mega-grid-col">
                  <h4>Perks</h4>
                  <a href="#">Zero Fees on First Transfer</a>
                  <a href="#">Refer & Earn Bonus</a>
                </div>
              </div>
            </div>

            <div class="dropdown-wrapper">
              <button class="drop-trigger-btn" @click="toggleDropdown('company')">
                Company <span class="chevron-arrow">▼</span>
              </button>
              <div class="mega-menu-panel single-col" :class="{ 'is-visible': activeDropdown === 'company' }">
                <a href="#">Our Story</a>
                <a href="#">Careers</a>
                <a href="#">Security & Trust</a>
              </div>
            </div>

            <a href="#" class="nav-link">Help</a>
          </div>

      
          <div class="auth-actions-cluster">
            <button class="download-pill-btn">
              <span class="dl-icon">📥</span> Download
            </button>
          </div>


          <button class="hamburger-toggle-btn" :class="{ 'is-active': isMobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle Navigation Menu">
            <span class="bar-line"></span>
            <span class="bar-line"></span>
            <span class="bar-line"></span>
          </button>
        </div>

      </div>
    </header>

   
    <div class="mobile-navigation-drawer" :class="{ 'is-open': isMobileMenuOpen }" @click.stop>
      <div class="drawer-inner-content">
        
      
        <div class="drawer-accordion-item">
          <button class="drawer-link-trigger" @click="toggleMobileAccordion('features')">
            Features <span>{{ activeMobileAccordion === 'features' ? '▲' : '▼' }}</span>
          </button>
          <div class="drawer-sub-links-box" :class="{ 'is-expanded': activeMobileAccordion === 'features' }">
            <a href="#">Multi-Currency Wallet</a>
            <a href="#">Receive Money Internationally</a>
            <a href="#">Zero Fees on First Transfer</a>
            <a href="#">Refer & Earn Bonus</a>
          </div>
        </div>

    
        <div class="drawer-accordion-item">
          <button class="drawer-link-trigger" @click="toggleMobileAccordion('company')">
            Company <span>{{ activeMobileAccordion === 'company' ? '▲' : '▼' }}</span>
          </button>
          <div class="drawer-sub-links-box" :class="{ 'is-expanded': activeMobileAccordion === 'company' }">
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Security & Trust</a>
          </div>
        </div>

        <a href="#" class="drawer-plain-link">Help</a>

        <div class="drawer-action-wrapper">
          <button class="download-pill-btn full-width-btn">
            <span>📥</span> Download SwyChr App
          </button>
        </div>

      </div>
    </div>


    <main class="app-body-surface">
      <HomeView />
    </main>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  },
  data() {
    return {
      activeDropdown: null,
      isMobileMenuOpen: false,
      activeMobileAccordion: null
    }
  },
  methods: {
    toggleDropdown(menuName) {
      this.activeDropdown = this.activeDropdown === menuName ? null : menuName
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    toggleMobileAccordion(sectionName) {
      this.activeMobileAccordion = this.activeMobileAccordion === sectionName ? null : sectionName
    },
    closeAllMenus() {
      this.activeDropdown = null
      this.isMobileMenuOpen = false
      this.activeMobileAccordion = null
    }
  }
}
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif !important;
}


#app {
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh;
  display: block !important; 
  background-color: #ffffff;
  position: relative;
}

body {
  background-color: #ffffff;
  color: #1e293b;
  overflow-x: hidden;
}


.navbar {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #f1f5f9;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.5px;
  cursor: pointer;
}

.logo span {
  color: #7B1FA2;
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
}

.nav-link:hover, .drop-trigger-btn:hover {
  color: #1e293b;
}

.chevron-arrow {
  font-size: 0.65rem;
  color: #94a3b8;
}


.dropdown-wrapper {
  position: relative;
}

.mega-menu-panel {
  display: none;
  position: absolute;
  top: 160%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  border: 1px solid #e2e8f0;
  min-width: 420px;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  z-index: 1100;
}

.mega-menu-panel.single-col {
  min-width: 200px;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.mega-menu-panel.is-visible {
  display: grid !important; 
}

.mega-grid-col h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 0.6rem;
  letter-spacing: 0.5px;
}

.mega-menu-panel a {
  display: block;
  padding: 0.5rem 0;
  color: #334155;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
}

.mega-menu-panel a:hover {
  color: #00d09c;
}

.download-pill-btn {
  background-color: #7B1FA2;
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
  transition: all 0.2s;
}

.download-pill-btn:hover {
  background-color: #00b386;
}

.hamburger-toggle-btn, .mobile-navigation-drawer {
  display: none !important;
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
    transition: all 0.2s ease;
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
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
  }

  .mobile-navigation-drawer.is-open {
    transform: translateX(0) !important;
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
  }

  .drawer-action-wrapper {
    margin-top: 3rem;
  }

  .full-width-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
}
</style>