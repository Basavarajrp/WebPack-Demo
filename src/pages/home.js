let loadStartTime;

// Track initial module load
const moduleLoadTime = performance.now();
localStorage.setItem('homeModuleLoadTime', moduleLoadTime);

export function renderHome() {
    const timing = JSON.parse(localStorage.getItem('homeResourceTiming') || '{}');
    
    const content = document.getElementById('content');
    content.innerHTML = `
        <div style="padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
            <h1>Home Page (PRELOADED)</h1>
            <div style="border: 1px solid #1976d2; padding: 10px; margin-top: 10px;">
                ${timing.startTime ? `
                    <p>🔄 Resource Load Start: ${new Date(performance.timeOrigin + timing.startTime).toLocaleTimeString()}</p>
                    <p>✅ Resource Load End: ${new Date(performance.timeOrigin + timing.responseEnd).toLocaleTimeString()}</p>
                    <p>⚡ Load Duration: ${timing.duration.toFixed(2)}ms</p>
                ` : '<p>Timing not available</p>'}
            </div>
        </div>
    `;
} 