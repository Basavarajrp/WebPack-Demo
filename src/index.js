import { renderNavigation } from './components/navigation';

// Function to get resource timing info
function getResourceTiming(chunkName) {
    const entries = performance.getEntriesByType('resource');
    return entries.find(entry => entry.name.includes(chunkName));
}

// Initial render
renderNavigation();

// Home page (PRELOAD) - Loads immediately with high priority
const loadHome = async () => {
    try {
        const module = await import(
            /* webpackPreload: true */
            './pages/home'
        );
        const timing = getResourceTiming('home');
        if (timing) {
            localStorage.setItem('homeResourceTiming', JSON.stringify(timing));
        }
        module.renderHome();
    } catch (error) {
        console.error('Failed to load Home:', error);
    }
};

// About page (PREFETCH) - Downloads during browser idle time
const loadAbout = async () => {
    try {
        const module = await import(
            /* webpackPrefetch: true */
            './pages/about'
        );
        const timing = getResourceTiming('about');
        if (timing) {
            localStorage.setItem('aboutResourceTiming', JSON.stringify(timing));
        }
        module.renderAbout();
    } catch (error) {
        console.error('Failed to load About:', error);
    }
};

// Contact page (DYNAMIC) - Loads only when needed
const loadContact = async () => {
    try {
        const module = await import('./pages/contact');
        const timing = getResourceTiming('contact');
        if (timing) {
            localStorage.setItem('contactResourceTiming', JSON.stringify(timing));
        }
        module.renderContact();
    } catch (error) {
        console.error('Failed to load Contact:', error);
    }
};

window.loadHome = loadHome;
window.loadAbout = loadAbout;
window.loadContact = loadContact;

loadHome();
