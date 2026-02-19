
// Wrapper to log state changes
const logState = (step) => {
    const infoCard = document.getElementById('info-card');
    const leftPanel = document.getElementById('left-panel');
    console.log(`[${step}] InfoCard Visible: ${infoCard?.classList.contains('visible')}, LeftPanel Visible: ${leftPanel?.classList.contains('visible')}`);
};

// Simulate Close Action
console.log('--- START DEBUG ---');
logState('Initial');

// Mock UI object if needed, or use existing
if (window.UI && window.Panels) {
    console.log('Calling hideInfoCard()...');
    UI.hideInfoCard();
    logState('After hideInfoCard');
    
    setTimeout(() => {
        logState('100ms After');
    }, 100);
} else {
    console.error('UI or Panels not found');
}
