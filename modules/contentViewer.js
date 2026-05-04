class ContentViewer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    update(tema) {
        if (!tema) return;
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                padding: 0;
                overflow-y: auto;
                background: linear-gradient(135deg, #06070e 0%, #0f1119 100%);
                position: relative;
            }

            .content {
                padding: 50px;
                max-width: 100%;
                animation: fadeIn 0.6s ease-out;
                position: relative;
                z-index: 1;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .video-container {
                position: relative;
                padding-bottom: 56.25%;
                background: linear-gradient(135deg, #000 0%, #0f172a 100%);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1);
                border: 1px solid #1e293b;
                animation: scaleIn 0.6s ease-out;
            }

            @keyframes scaleIn {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            .video-container::before {
                content: '';
                position: absolute;
                inset: 0;
                background: radial-gradient(circle at 30% 30%, 
                    rgba(99, 102, 241, 0.1) 0%, 
                    transparent 50%
                );
                z-index: 2;
                pointer-events: none;
                border-radius: 16px;
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 16px;
            }

            .info-header {
                margin-top: 45px;
                border-bottom: 2px solid #334155;
                padding-bottom: 30px;
                animation: slideUp 0.6s ease-out 0.2s both;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            h1 {
                background: linear-gradient(135deg, #ec4899, #a855f7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin: 0;
                font-size: 2.5rem;
                font-weight: 800;
                letter-spacing: -1px;
                line-height: 1.1;
            }

            .info-header p {
                color: #cbd5e1;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-top: 15px;
                font-weight: 300;
            }

            .section-title {
                background: linear-gradient(90deg, #6366f1, #06b6d4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-transform: uppercase;
                font-size: 0.85rem;
                margin: 45px 0 25px;
                font-weight: 700;
                letter-spacing: 2px;
                position: relative;
                padding-left: 15px;
            }

            .section-title::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 4px;
                background: linear-gradient(135deg, #6366f1, #06b6d4);
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);
            }

            .highlight-list {
                display: grid;
                gap: 15px;
            }

            .item {
                background: linear-gradient(135deg, #1e293b, #0f172a);
                padding: 20px;
                border-left: 4px solid #6366f1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                border-radius: 8px;
                position: relative;
                overflow: hidden;
                border: 1px solid #334155;
            }

            .item::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(99, 102, 241, 0.1), 
                    transparent
                );
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .item:hover {
                background: linear-gradient(135deg, #334155, #1e293b);
                border-left-color: #ec4899;
                transform: translateX(8px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
                            0 0 15px rgba(99, 102, 241, 0.2);
                border-color: #475569;
            }

            .item:hover::before {
                opacity: 1;
            }

            .item span:first-child {
                color: #f1f5f9;
                font-weight: 500;
                flex: 1;
                font-size: 1rem;
            }

            .time {
                color: #ec4899;
                font-family: 'Monaco', 'Courier New', monospace;
                font-weight: 700;
                font-size: 0.9rem;
                letter-spacing: 0.5px;
                background: rgba(236, 72, 153, 0.1);
                padding: 4px 12px;
                border-radius: 6px;
                border: 1px solid rgba(236, 72, 153, 0.3);
                transition: all 0.3s ease;
            }

            .item:hover .time {
                background: rgba(236, 72, 153, 0.2);
                border-color: rgba(236, 72, 153, 0.5);
                box-shadow: 0 0 12px rgba(236, 72, 153, 0.3);
            }

            /* Scrollbar */
            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-track {
                background: transparent;
            }

            ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #6366f1, #ec4899);
                border-radius: 10px;
                border: 2px solid #06070e;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #818cf8, #f472b6);
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            }

            @media (max-width: 768px) {
                .content {
                    padding: 30px;
                }

                h1 {
                    font-size: 1.8rem;
                }

                .item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                }

                .time {
                    align-self: flex-end;
                }
            }
        </style>
        <div class="content">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${tema.youtubeId}" allowfullscreen></iframe>
            </div>
            <div class="info-header">
                <h1>${tema.titulo}</h1>
                <p>${tema.descripcion || ''}</p>
            </div>
            
            ${tema.capitulos ? `
                <div class="section-title">📚 Capítulos (Resúmenes)</div>
                <div class="highlight-list">
                    ${tema.capitulos.map(cap => `<div class="item"><span>${cap.titulo}</span></div>`).join('')}
                </div>
            ` : ''}

            <div class="section-title">⭐ Highlights (Momentos Clave)</div>
            <div class="highlight-list">
                ${tema.highlights.map((h, idx) => `
                    <div class="item">
                        <span>${h.descripcion}</span>
                        <span class="time">${h.tiempo}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    }
}
customElements.define('content-viewer', ContentViewer);