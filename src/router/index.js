import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, left: 0 }
        }
    },

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('../views/TermsView.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../views/PrivacyView.vue')
        },
        {
            path: '/ourstory',
            name: 'ourstory',
            component: () => import('../views/OurstoryView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/security',
            name: 'security',
            component: () => import('../views/SecurityView.vue')
        },
        {
            path: '/careers',
            name: 'careers',
            component: () => import('../views/CareersView.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('../views/FaqView.vue')
        },

        {
            path: '/download',
            name: 'download',
            component: () => import('../views/DownloadView.vue')
        }
    ]
})

export default router