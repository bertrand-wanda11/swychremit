import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// 🌍 Global translations dictionary
const messages = {
    en: {
        nav: { home: 'Home', about: 'About Us', download: 'Download', help: 'Help' },
        hero: { title: 'Send Airtime & Bundles Globally', button: 'Continue to Top-up' },
        footer: { disclaimer: 'Swychremit is an online platform owned and operated by Swychr Technology USA LLC.' }
    },
    fr: {
        nav: { home: 'Accueil', about: 'À Propos', download: 'Télécharger', help: 'Aide' },
        hero: { title: 'Envoyez du Crédit et des Forfaits dans le Monde', button: 'Continuer le Rechargement' },
        footer: { disclaimer: 'Swychremit est une plateforme en ligne appartenant à Swychr Technology USA LLC.' }
    },
    es: {
        nav: { home: 'Inicio', about: 'Sobre Nosotros', download: 'Descargar', help: 'Ayuda' },
        hero: { title: 'Envíe Recargas y Paquetes Globalmente', button: 'Continuar Recarga' },
        footer: { disclaimer: 'Swychremit es una plataforma en línea propiedad de Swychr Technology USA LLC.' }
    },
    pt: {
        nav: { home: 'Início', about: 'Sobre Nós', download: 'Baixar', help: 'Ajuda' },
        hero: { title: 'Envie Recargas e Pacotes Globalmente', button: 'Continuar Recarga' },
        footer: { disclaimer: 'Swychremit é uma plataforma online de propriedade da Swychr Technology USA LLC.' }
    }
}

// ⚙️ Initialize i18n
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('swychr_lang') || 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')