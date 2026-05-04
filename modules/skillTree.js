class SkillTree extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set data(fases) {
        this.render(fases);
    }

    render(fases) {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                padding: 24px;
                background: linear-gradient(180deg, #0a0d15 0%, #0f1119 100%);
                border-right: 1px solid #1e293b;
                overflow-y: auto;
                position: relative;
            }

            :host::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 320px;
                height: 100%;
                background: linear-gradient(180deg, 
                    rgba(99, 102, 241, 0.05) 0%, 
                    transparent 50%, 
                    rgba(236, 72, 153, 0.05) 100%
                );
                pointer-events: none;
                z-index: 0;
            }

            .tree-container {
                position: relative;
                z-index: 1;
            }

            .phase-group { 
                margin-bottom: 40px;
                animation: slideInLeft 0.6s ease-out;
            }

            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .phase-title {
                font-size: 0.65rem;
                text-transform: uppercase;
                background: linear-gradient(135deg, #ec4899, #a855f7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                letter-spacing: 2.5px;
                margin-bottom: 18px;
                font-weight: 700;
                position: relative;
                padding-bottom: 12px;
            }

            .phase-title::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 40px;
                height: 2px;
                background: linear-gradient(90deg, #ec4899, #a855f7);
                border-radius: 1px;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }

            .skill-node {
                aspect-ratio: 1;
                background: linear-gradient(135deg, #1e293b, #0f172a);
                border: 2px solid #334155;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.65rem;
                text-align: center;
                padding: 8px;
                color: #cbd5e1;
                font-weight: 600;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
            }

            .skill-node::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.1), 
                    transparent
                );
                transition: left 0.5s ease;
            }

            .skill-node:hover::before {
                left: 100%;
            }

            .skill-node:hover {
                border-color: #6366f1;
                color: #f1f5f9;
                transform: translateY(-4px);
                background: linear-gradient(135deg, #312e81, #1e1b4b);
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.4),
                            0 8px 16px rgba(0, 0, 0, 0.3);
            }

            .skill-node.active {
                border-color: #ec4899;
                background: linear-gradient(135deg, #831843, #500724);
                color: #f1f5f9;
                box-shadow: 0 0 25px rgba(236, 72, 153, 0.5),
                            0 8px 20px rgba(0, 0, 0, 0.4);
                transform: scale(1.08);
            }

            .skill-node.active::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
                border-radius: 6px;
                animation: pulse 2s ease-in-out infinite;
            }

            @keyframes pulse {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }

            /* Scrollbar */
            ::-webkit-scrollbar {
                width: 8px;
            }

            ::-webkit-scrollbar-track {
                background: transparent;
            }

            ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #6366f1, #ec4899);
                border-radius: 10px;
                border: 2px solid #0a0d15;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #818cf8, #f472b6);
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            }
        </style>
        <div class="tree-container">
            ${fases.map(fase => `
                <div class="phase-group">
                    <div class="phase-title">${fase.nombre}</div>
                    <div class="grid">
                        ${fase.temas.map(tema => `
                            <div class="skill-node" data-id="${tema.id}" title="${tema.titulo}">
                                ${tema.icono || tema.titulo.substring(0,3)}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        `;

        this.shadowRoot.querySelectorAll('.skill-node').forEach(node => {
            node.addEventListener('click', () => {
                this.shadowRoot.querySelectorAll('.skill-node').forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                this.dispatchEvent(new CustomEvent('skill-selected', {
                    detail: node.dataset.id,
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}
customElements.define('skill-tree', SkillTree);