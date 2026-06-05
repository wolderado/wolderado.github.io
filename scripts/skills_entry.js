function createSkillEntry({ title, items }) {
    const list = document.getElementById('skills-list');

    const li = items.map(item => `<li>${item}</li>`).join('\n                        ');

    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4';
    col.innerHTML = `
        <h4>${title}</h4>
        <ul class="skill-list">
            ${li}
        </ul>`;

    list.appendChild(col);
}

createSkillEntry({
    title: 'Programming 🧑‍💻',
    items: ['Game AI', 'Procedural Generation', 'Prototyping', 'Shaders', 'Multiplayer']
});

createSkillEntry({
    title: 'Languages 💾',
    items: ['C#', 'C++', 'C', 'Javascript', 'HTML', 'Python']
});

createSkillEntry({
    title: 'Engines 🛠️',
    items: ['Unity', 'Unreal Engine', 'Godot', 'Raylib', 'Custom Engines']
});

createSkillEntry({
    title: 'Tools 🛠️',
    items: ['Git', 'GitHub', 'Trello', 'Jira', 'Slack', 'Photoshop']
});

createSkillEntry({
    title: 'Design 🎮',
    items: ['Game Design', 'Systems Design', 'Technical Art', 'Shaders', 'Pixel Art', 'Sound Design', 'Game Trailers']
});

createSkillEntry({
    title: 'Management 📅',
    items: ['Project Management', 'Team Leadership', 'Problem Solving', 'Delivery Schedule', 'Full Stack Game Development']
});
