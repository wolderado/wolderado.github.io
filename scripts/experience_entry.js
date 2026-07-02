let entryCount = 0;

function createEntry({ youtubeId, image, title, role, company, year, description, responsibilities, link }) {
    entryCount++;

    const media = youtubeId
        ? `<div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/${youtubeId}" allowfullscreen></iframe>
           </div>`
        : `<div class="ratio ratio-16x9">
                <img src="${image}" style="object-fit: cover; width: 100%; height: 100%;">
           </div>`;

    const video = `
        <div class="col-md-6 order-md-1">
            ${media}
        </div>`;

    const info = `
        <div class="col-md-6 order-md-2 text-start">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <h2 class="d-inline-flex align-items-center gap-2 mb-0 entry-title">
                    ${title}
                    ${link ? `<a href="${link}" target="_blank" rel="noopener" class="icon-link"><i class="bi-arrow-up-right-square-fill"></i></a>` : ''}
                </h2>
                ${role ? `<span class="entry-role">${role}</span>` : ''}
            </div>
            ${(company || year) ? `
            <div class="d-flex justify-content-between">
                ${company ? `<p class="text-muted mb-0">${company}</p>` : '<span></span>'}
                ${year ? `<p class="text-muted mb-0">${year}</p>` : ''}
            </div>` : ''}
            <br>
            <p>${description}</p>
            ${responsibilities?.length ? `
            <p class="mb-1"><strong>My Responsibilities</strong></p>
            <ul class="text-muted">
                ${responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>` : ''}
        </div>`;

    const list = document.getElementById('experience-list');

    if (entryCount > 0) {
        const divider = document.createElement('hr');
        divider.className = 'my-5';
        list.appendChild(divider);
    }

    const entry = document.createElement('div');
    entry.className = 'row align-items-start mb-5 g-4';
    entry.innerHTML = video + info;
    list.appendChild(entry);
}


//EXPERIENCE LIST

createEntry({
    link: 'https://store.steampowered.com/app/2506530/It_Has_My_Face/',
    youtubeId: 'VwLKS-6fnK4',
    image: '',
    title: 'It Has My Face',
    role: 'Lead Developer',
    company: 'NightByte Games',
    year: 'Jan 2022 - Apr 2026',
    description: 'IT HAS YOUR FACE. Now it wants your life. Hide, seek, and try to kill your clone in this deceptively simple first-person horror roguelite. This project is published by <a href="https://www.bhvr.com" target="_blank" rel="noopener">Behaviour Interactive</a> (Creators behind Dead By Daylight).',
    responsibilities: [
        'Personally programmed the majority of gameplay systems and also worked on game design, level design, environment art, UI, pixel art, and sound effects.',
        'Led full development lifecycle: Pre-production, Early Access, 1.0 launch, and singleplayer, multiplayer and post-launch updates.',
        'Managed a team of 4 and oversaw all publisher relations and project coordination.'
    ]
});

createEntry({
    link: 'https://store.steampowered.com/app/2317960/Samurai_Survivors',
    youtubeId: 'EcJuEqdML8o',
    image: '',
    title: 'Samurai Survivors',
    role: 'Lead Developer',
    company: 'NightByte Games',
    year: 'Feb 2023 - Apr 2023',
    description: 'Slash through hordes of enemies and become the ultimate swordmaster! In this action rogue-lite, choose from variety of weapons and upgrades to create game-breaking synergies. Survive against unique types of enemies as you get older and suffer from the curse of undying.',
    responsibilities: [
        'Developed the game solo, from game jam prototype to full release and post-launch updates',
        'Scoped as a small project to help finance It Has My Face.',
        'Built a localization system and coordinated external collaborators for music and localization.',
    ]
});

createEntry({
    link: 'https://store.steampowered.com/app/2506530/Clonizer/',
    youtubeId: 'oktz2SU4JMY',
    image: '',
    title: 'Clonizer',
    role: 'Game Feel Programmer',
    company: 'Juicy Plume',
    year: 'Nov 2024 - Jan 2025',
    description: 'Clonizer combines Hex-based tactics and roguelike deckbuilding! (Published by <a href="https://store.steampowered.com/publisher/rogueduck" target="_blank" rel="noopener">RogueDuck Interactive</a>).<br> I\'ve worked specifically as a Game Juice/Game Feel programmer to improve the general feel of the game. Dove straight into development after we identified the areas lacking in feel and polish.',
    responsibilities: [
        'Hired specifically to improve game feel across the project.',
        'Reworked many UI panels, gameplay mechanics, VFX, and shaders to make them more responsive, alive and fun.',
        'Made a significant impact within a two-month freelance scope.'
    ]
});

createEntry({
    link: '',
    youtubeId: 'a83rIHmZy9Q',
    image: '',
    title: 'Ak Ana Prototype',
    company: 'VR Future',
    year: 'Feb 2022 - May 2022',
    role: 'Technical Director',
    description: 'A 15 minute 6 DOF VR interactable animation freelance project where I worked as the <b>Technical Director / Main Developer</b>.<br> Ak Ana Memory of the Shell is an ecological fable inspired by the Turkish cosmonogy: "a dreamlike dive into the ocean depths reveals a future in which humanity has disappeared."',
    responsibilities: [
        'Developed game systems for an interactive VR animation, including VR-specific swimming and grab mechanics.',
        'Managed a team of 6 while bringing the vision of the director to life.',
        'Worked with animators to integrate their work into the game engine.'
    ]
});

createEntry({
    link: 'https://store.steampowered.com/app/261550',
    youtubeId: '',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/261550/header.jpg?t=1764252300',
    title: 'Mount & Blade II: Bannerlord',
    company: 'TaleWorlds Entertainment',
    year: 'Aug 2021 - Sep 2021',
    role: 'Programmer Intern',
    description: '',
    responsibilities: [
        'Designed and implemented in-game quests and gameplay systems using the Mount & Blade engine.',
        'Quickly adapted to a large, existing C# codebase, contributing functional features immediately.'
    ]
});