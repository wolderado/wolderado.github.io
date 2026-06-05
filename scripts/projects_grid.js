fetch('games.json')
    .then(res => res.json())
    .then(games => {
        const visible    = games.filter(g => g.show);
        let activeTag    = null;

        const allTags    = [...new Set(visible.flatMap(g => g.tags || []))].sort();
        const tagBar     = document.getElementById('tag-bar');
        const grid       = document.getElementById('projects-grid');
        const countEl    = document.getElementById('game-count');
        const gridLoader = document.getElementById('grid-loader');

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });

        function renderTagBar() {
            tagBar.innerHTML = '';
            const allBtn = document.createElement('button');
            allBtn.className = `btn btn-sm ${activeTag === null ? 'btn-active-tag' : 'btn-outline-tag'}`;
            allBtn.textContent = 'All';
            allBtn.onclick = () => selectTag(null);
            tagBar.appendChild(allBtn);

            allTags.forEach(tag => {
                const btn = document.createElement('button');
                btn.className = `btn btn-sm ${activeTag === tag ? 'btn-active-tag' : 'btn-outline-tag'}`;
                btn.textContent = tag;
                btn.onclick = () => selectTag(tag);
                tagBar.appendChild(btn);
            });
        }

        function selectTag(tag) {
            if (tag === activeTag) return;
            activeTag = tag;
            renderTagBar();
            grid.style.opacity = '0';
            gridLoader.classList.add('active');
            setTimeout(() => {
                renderGrid();
                gridLoader.classList.remove('active');
                grid.style.transition = 'opacity 0.3s ease';
                grid.style.opacity = '1';
            }, 400);
        }

        function renderGrid() {
            grid.innerHTML = '';
            const filtered = activeTag
                ? visible.filter(g => (g.tags || []).includes(activeTag))
                : visible;

            countEl.textContent = `${filtered.length} game${filtered.length !== 1 ? 's' : ''}`;

            filtered.forEach(game => {
                const col = document.createElement('div');
                col.className = 'col';
                col.innerHTML = `
                    <div class="card h-100">
                        <div class="ratio ratio-16x9">
                            <img data-src="${game.cover}" class="card-img-top" style="object-fit: cover;" alt="${game.title}">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title mb-1">${game.title}</h5>
                            <p class="card-text small flex-grow-1">${game.description}</p>
                            ${(game.link || game.download || game.play) ? `
                            <div class="d-flex gap-2 mt-auto">
                                ${game.link ? `<a href="${game.link}" class="btn btn-sm flex-grow-1" target="_blank" rel="noopener">View</a>` : ''}
                                ${game.play ? `<a href="play.html#${encodeURIComponent(game.play)}" class="btn btn-sm px-2" target="_blank" rel="noopener" title="Play"><i class="bi bi-play-fill" style="font-size:1.25rem"></i></a>` : ''}
                                ${game.download ? `<a href="games/${game.download}" class="btn btn-sm px-2" download title="Download"><i class="bi bi-download"></i></a>` : ''}
                            </div>` : ''}
                        </div>
                    </div>`;
                grid.appendChild(col);
                observer.observe(col.querySelector('img'));
            });
        }

        renderTagBar();

        // Show spinner in grid area for 1 second on initial load
        gridLoader.classList.add('active');
        grid.style.opacity = '0';
        setTimeout(() => {
            renderGrid();
            gridLoader.classList.remove('active');
            grid.style.transition = 'opacity 0.3s ease';
            grid.style.opacity = '1';
        }, 300);
    });
