const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        tab.classList.add('active');
        target.classList.add('active');
    });
});

// Set initial state - Hide all tab contents except the Home page
tabContents.forEach(tabContent => {
    if (!tabContent.classList.contains('active')) {
        tabContent.classList.add('hidden');
    }
});

const homeTab = document.querySelector('[data-tab-target="#home"]');
homeTab.classList.add('active');

// Display Home page content by default
const homeContent = document.querySelector(homeTab.dataset.tabTarget);
homeContent.classList.add('active');