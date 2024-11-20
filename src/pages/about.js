let loadStartTime;

// Track initial module load
const moduleLoadTime = performance.now();
localStorage.setItem('aboutModuleLoadTime', moduleLoadTime);

// Track when module is loaded/executed
const moduleExecutionTime = performance.now();
localStorage.setItem('aboutExecutionTime', moduleExecutionTime);

export function renderAbout() {
    const timing = JSON.parse(localStorage.getItem('aboutResourceTiming') || '{}');
    const executionTime = localStorage.getItem('aboutExecutionTime');
    
    const content = document.getElementById('content');
    content.innerHTML = `
        <div style="padding: 20px; background-color: #fff3e0; border-radius: 8px;">
            <h1>About Page (PREFETCHED)</h1>
            <div style="border: 1px solid #f57c00; padding: 10px; margin-top: 10px;">
                ${timing.startTime ? `
                    <p>🔄 Prefetch Started: ${new Date(performance.timeOrigin + timing.startTime).toLocaleTimeString()}</p>
                    <p>✅ Prefetch Completed: ${new Date(performance.timeOrigin + timing.responseEnd).toLocaleTimeString()}</p>
                    <p>⚡ Prefetch Duration: ${timing.duration.toFixed(2)}ms</p>
                    <p>🚀 Module Execution: ${new Date(Number(executionTime)).toLocaleTimeString()}</p>
                    <p>⏱️ Time between prefetch and execution: 
                        ${(Number(executionTime) - (performance.timeOrigin + timing.responseEnd)).toFixed(2)}ms
                    </p>
                ` : '<p>Timing not available</p>'}
            </div>
        </div>
    `;
} 