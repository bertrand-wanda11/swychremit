import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const messages = {
    en: {
        nav: { about: 'About Us', help: 'Help', download: 'Download App' },
        hero: {
            badge: '⚡ Real-time secure financial network transfers',
            title: 'Send money globally for less',
            subtitle: 'Send your love where it matters most. Save on regular family support, emergency care, or school fees with guaranteed low rates.',
            metrics: { countries: 'Supported Countries', rating: 'App Store Rating' },
            calc: { send: 'You send exactly', receive: 'Recipient gets', btn: 'Download the App to get started' }
        },
        features: {
            title: 'Why thousands trust Swychremit',
            subtitle: 'Free Wallet to wallet transfer, hold multicurrency balances and avail a range of digital products.',
            saveTitle: 'Save on global fees',
            saveDesc: 'Send more money back home to anyone at a guaranteed fraction of the cost of traditional banks.',
            instantTitle: 'Near instant delivery',
            instantDesc: 'Enjoy blazing-fast financial routing ecosystems. Most corridor transfers arrive in minutes.'
        },
        footer: {
            legal: 'LEGAL',
            terms: 'Terms & Conditions',
            privacy: 'Privacy Policy',
            company: 'COMPANY',
            ourStory: 'Our Story',
            blog: 'Blog',
            security: 'Security',
            careers: 'Careers',
            support: 'SUPPORT',
            faqs: 'FAQs',
            contact: 'Contact Us',
            disclaimerTitle: 'Legal Disclaimer:',
            disclaimerText: 'Swychremit is an online platform owned and operated by Swychr Technology USA LLC. Swychr Technology USA LLC is a technology company and software provider; it is not a licensed bank, money transmitter, or financial institution. Swychremit does not accept, hold, custody, or transmit fiat currency or customer funds. All financial transactions, foreign exchange executions, on-ramping, custody, and regional payout (off-ramping) services are provided exclusively by independent, third-party regulated and licensed financial institutions and payment service providers in their respective jurisdictions. Swychremit utilizes blockchain technology and stablecoin (USDC) architecture strictly for backend cross-border routing efficiency. Availability of services is subject to local regulatory restrictions and successful compliance screening by our licensed partners.'
        }
    },
    fr: {
        nav: { about: 'À Propos', help: 'Aide', download: 'Télécharger App' },
        hero: {
            badge: '⚡ Transferts sécurisés en temps réel',
            title: 'Envoyez de l’argent dans le monde à moindre coût',
            subtitle: 'Envoyez votre amour là où il compte le plus. Économisez sur le soutien familial, les urgences ou la scolarité.',
            metrics: { countries: 'Pays pris en charge', rating: 'Évaluation App Store' },
            calc: { send: 'Vous envoyez exactement', receive: 'Le destinataire reçoit', btn: 'Téléchargez l’application pour commencer' }
        },
        features: {
            title: 'Pourquoi des millions de personnes font confiance à Swychremit',
            subtitle: 'Transfert gratuit de portefeuille à portefeuille et soldes multi-devises.',
            saveTitle: 'Économisez sur les frais',
            saveDesc: 'Envoyez plus d’argent au pays à une fraction du coût des banques traditionnelles.',
            instantTitle: 'Livraison presque instantanée',
            instantDesc: 'Profitez de réseaux de routage ultra-rapides. La plupart des transferts arrivent en quelques minutes.'
        },
        footer: {
            legal: 'JURIDIQUE',
            terms: 'Conditions Générales',
            privacy: 'Politique de Confidentialité',
            company: 'ENTREPRISE',
            ourStory: 'Notre Histoire',
            blog: 'Blog',
            security: 'Sécurité',
            careers: 'Carrières',
            support: 'SUPPORT',
            faqs: 'FAQ',
            contact: 'Contactez-nous',
            disclaimerTitle: 'Avertissement Légal:',
            disclaimerText: 'Swychremit est une plateforme en ligne appartenant à Swychr Technology USA LLC et exploitée par celle-ci. Swychr Technology USA LLC est une entreprise technologique et un fournisseur de logiciels ; ce n’est pas une banque agréée, un émetteur de monnaie ni une institution financière. Swychremit n’accepte, ne détient, ne garde ni ne transmet de monnaie fiduciaire ou de fonds de clients. Toutes les transactions financières, exécutions de change, intégrations (on-ramping), garde et paiements régionaux (off-ramping) sont assurés exclusivement par des institutions financières et prestataires de services de paiement tiers indépendants, réglementés et agréés dans leurs juridictions respectives. Swychremit utilise la technologie blockchain et l’architecture des stablecoins (USDC) strictement pour l’efficacité du routage transfrontalier interne. La disponibilité des services est soumise aux restrictions réglementaires locales et au contrôle de conformité par nos partenaires agréés.'
        }
    },
    es: {
        nav: { about: 'Sobre Nosotros', help: 'Ayuda', download: 'Descargar App' },
        hero: {
            badge: '⚡ Transferencias de red financiera seguras en tiempo real',
            title: 'Envía dinero a todo el mundo por menos',
            subtitle: 'Envía tu amor a donde más importa. Ahorra en apoyo familiar regular, emergencias o matrículas escolares.',
            metrics: { countries: 'Países admitidos', rating: 'Calificación de App Store' },
            calc: { send: 'Envías exactamente', receive: 'El destinatario recibe', btn: 'Descarga la app para comenzar' }
        },
        features: {
            title: 'Por qué millones confían en Swychremit',
            subtitle: 'Transferencia gratuita de billetera a billetera y saldos multidivisa.',
            saveTitle: 'Ahorra en tarifas globales',
            saveDesc: 'Envía más dinero a casa a una fracción del costo de los bancos tradicionales.',
            instantTitle: 'Entrega casi instantánea',
            instantDesc: 'Disfruta de ecosistemas de enrutamiento súper rápidos. La mayoría de las transferencias llegan en minutos.'
        },
        footer: {
            legal: 'LEGAL',
            terms: 'Términos y Condiciones',
            privacy: 'Política de Privacidad',
            company: 'COMPAÑÍA',
            ourStory: 'Nuestra Historia',
            blog: 'Blog',
            security: 'Seguridad',
            careers: 'Carreras',
            support: 'SOPORTE',
            faqs: 'Preguntas Frecuentes',
            contact: 'Contáctenos',
            disclaimerTitle: 'Aviso Legal:',
            disclaimerText: 'Swychremit es una plataforma en línea propiedad y operada por Swychr Technology USA LLC. Swychr Technology USA LLC es una empresa de tecnología y proveedor de software; no es un banco con licencia, transmisor de dinero ni institución financiera. Swychremit no acepta, mantiene, custodia ni transmite moneda fiduciaria o fondos de clientes. Todas las transacciones financieras, ejecuciones de divisas, rampa de entrada (on-ramping), custodia y servicios de pago regional (off-ramping) son proporcionados exclusivamente por instituciones financieras y proveedores de servicios de pago independientes, regulados y con licencia en sus respectivas jurisdicciones. Swychremit utiliza tecnología blockchain y arquitectura de stablecoins (USDC) estrictamente para la eficiencia del enrutamiento transfronterizo en el backend. La disponibilidad de los servicios está sujeta a las restricciones regulatorias locales y al análisis de cumplimiento por parte de nuestros socios autorizados.'
        }
    },
    pt: {
        nav: { about: 'Sobre Nós', help: 'Ajuda', download: 'Baixar App' },
        hero: {
            badge: '⚡ Transferências de rede financeira seguras em tempo real',
            title: 'Envie dinheiro globalmente por menos',
            subtitle: 'Envie o seu amor para onde mais importa. Poupe no apoio familiar regular, emergências ou propinas.',
            metrics: { countries: 'Países Suportados', rating: 'Avaliação da App Store' },
            calc: { send: 'Você envia exatamente', receive: 'O destinatário recebe', btn: 'Baixe o aplicativo para começar' }
        },
        features: {
            title: 'Porque é que milhões confiam na Swychremit',
            subtitle: 'Transferência gratuita de carteira para carteira e saldos multimoeda.',
            saveTitle: 'Poupe nas taxas globais',
            saveDesc: 'Envie mais dinheiro para casa por uma fração do custo dos bancos tradicionais.',
            instantTitle: 'Entrega quase instantânea',
            instantDesc: 'Desfrute de ecossistemas de roteamento ultra-rápidos. A maioria das transferências chega em minutos.'
        },
        footer: {
            legal: 'LEGAL',
            terms: 'Termos e Condições',
            privacy: 'Política de Privacidade',
            company: 'EMPRESA',
            ourStory: 'Nossa História',
            blog: 'Blog',
            security: 'Segurança',
            careers: 'Carreiras',
            support: 'SUPORTE',
            faqs: 'Perguntas Frecuentes',
            contact: 'Fale Conosco',
            disclaimerTitle: 'Aviso Legal:',
            disclaimerText: 'Swychremit é uma plataforma online de propriedade e operada pela Swychr Technology USA LLC. A Swychr Technology USA LLC é uma empresa de tecnologia e provedora de software; não é um banco licenciado, transmissor de dinheiro ou instituição financeira. A Swychremit não aceita, detém, custodia ou transmite moeda fiduciária ou fundos de clientes. Todas as transações financeiras, execuções de câmbio, integração (on-ramping), custódia e serviços de pagamento regional (off-ramping) são fornecidos exclusivamente por instituições financeiras e provedores de serviços de pagamento independentes, regulamentados e licenciados em suas respectivas jurisdições. A Swychremit utiliza tecnologia blockchain e arquitetura de stablecoin (USDC) estritamente para eficiência de roteamento transfronteiriço no backend. A disponibilidade dos serviços está sujeita a restrições regulatórias locais e à verificação de conformidade por nossos parceiros licenciados.'
        }
    }
}

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