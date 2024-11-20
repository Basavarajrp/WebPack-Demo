export function renderNavigation() {
    const nav = document.getElementById('navigation');
    nav.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 10px;">
                <button onclick="loadHome()" style="padding: 10px; margin: 5px; background: #1976d2; color: white; border: none; border-radius: 4px;">Home</button>
                <button onclick="loadAbout()" style="padding: 10px; margin: 5px; background: #f57c00; color: white; border: none; border-radius: 4px;">About</button>
                <button onclick="loadContact()" style="padding: 10px; margin: 5px; background: #c2185b; color: white; border: none; border-radius: 4px;">Contact</button>
            </div>
            <div id="network-monitor" style="font-family: monospace; font-size: 12px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                Network Status: Monitoring...
            </div>
        </div>
    `;
}
