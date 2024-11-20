let loadStartTime;

// Record when module starts loading
loadStartTime = performance.now();

// Track initial module load
const moduleLoadTime = performance.now();
localStorage.setItem('contactModuleLoadTime', moduleLoadTime);

export function renderContact() {
    const timing = JSON.parse(localStorage.getItem('contactResourceTiming') || '{}');
    
    const content = document.getElementById('content');
    content.innerHTML = `
        <div style="padding: 20px; background-color: #fce4ec; border-radius: 8px;">
            <h1>Contact Page (DYNAMIC)</h1>
            <div style="border: 1px solid #c2185b; padding: 10px; margin-top: 10px;">
                ${timing.startTime ? `
                    <p>🔄 Resource Load Start: ${new Date(performance.timeOrigin + timing.startTime).toLocaleTimeString()}</p>
                    <p>✅ Resource Load End: ${new Date(performance.timeOrigin + timing.responseEnd).toLocaleTimeString()}</p>
                    <p>⚡ Load Duration: ${timing.duration.toFixed(2)}ms</p>
                ` : '<p>Timing not available</p>'}
            </div>
        </div>
    `;
} 