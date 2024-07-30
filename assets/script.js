document.getElementById('logoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const shape = document.getElementById('shape').value;

    let svgShape;

    switch (shape) {
        case 'circle':
            svgShape = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
            break;
        case 'square':
            svgShape = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
            break;
        case 'triangle':
            svgShape = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
            break;
    }

    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${svgShape}
                    <text x="150" y="150" font-size="20" text-anchor="middle" fill="white">${text}</text>
                 </svg>`;

    document.getElementById('svgOutput').innerHTML = svg;

});
