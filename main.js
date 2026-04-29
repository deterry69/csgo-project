const myInventory = [
    { category: 'arms', title: 'Knives', subtitle: 'Knife | Fade', year: '2026', desc: 'This legendary butterfly knife features a rare rainbow fade pattern that makes it a true crown jewel for collectors, offering fluid animations and a prestigious look during every single round.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777454476/maxresdefault_tfjqdv.jpg' },
    { category: 'arms', title: 'Guns', subtitle: 'Guns | Contraband', year: '2026', desc: 'As one of the most iconic contraband skins in history, this weapon represents a piece of tactical gaming legacy, featuring high-contrast artwork that remains unmatched in the current market.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777454749/glock-18-shinobu_2_aakbnc.webp' },
    { category: 'arms', title: 'Machine guns', subtitle: 'Machine guns', year: '2026', desc: 'Boasting a detailed dragon motif over a shimmering gold background, this heavy weapon provides immense suppressive fire while maintaining a regal appearance that dominates the entire battlefield.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777454660/webp-522b586feea10be0ad130acb909372cb_g6awoq.webp' },
    { category: 'arms', title: 'Shotguns', subtitle: 'Shotguns', year: '2026', desc: 'A rugged and reliable choice for close-quarters engagements, this tactical shotgun features a sleek matte finish and industrial design elements that ensure high performance in any combat zone.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777454836/nova-caged-steel-1_poreqj.webp' },
    { category: 'arms', title: 'Assault rifles', subtitle: 'Assault rifles', year: '2026', desc: 'This essential main battle rifle is adorned with a striking tiger claw pattern and deep blue hues, providing the perfect balance between aesthetic beauty and lethal precision in high-tier play.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777457036/maxresdefault_zwxh7d.jpg' },
    { category: 'arms', title: 'Snipers', subtitle: 'Snipers', year: '2026', desc: 'Experience total long-range dominance with this precision rifle, featuring a vibrant colorful gradient that shifts beautifully under the new lighting engine of the modern competitive landscape.', img: 'https://res.cloudinary.com/dbadhyp7x/image/upload/v1777454961/20240801144841_1_xqouqd.jpg' },

    { category: 'maps', title: 'Mirage', subtitle: 'Defusal', year: '2026', desc: 'Navigate the intricate desert streets of this iconic urban environment, where executing complex site takes and maintaining mid control are the fundamental keys to securing a team victory here.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'maps', title: 'Dust II', subtitle: 'Iconic', year: '2026', desc: 'Master the most famous layout in gaming history, a sun-drenched landscape where simple but deep strategic lanes allow for pure mechanical skill and tactical intuition to truly shine every time.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'maps', title: 'Inferno', subtitle: 'Tactical', year: '2026', desc: 'Engage in intense tactical battles through the narrow alleyways of this beautiful Italian village, where perfect utility usage and smart rotations are required to conquer the legendary banana.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'maps', title: 'Nuke', subtitle: 'Vertical', year: '2026', desc: 'Test your team coordination within this complex nuclear power plant facility, featuring a unique vertical layout that demands constant communication and quick reactions to enemy site rotations.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'maps', title: 'Overpass', subtitle: 'Strategic', year: '2026', desc: 'Utilize the diverse environmental layers of this strategic park and railway setting, offering a wide variety of tactical approaches for both aggressive pushes and disciplined defensive setups.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'maps', title: 'Vertigo', subtitle: 'Skyscraper', year: '2026', desc: 'Battle for control atop a massive skyscraper construction site where sound cues and verticality play a crucial role, forcing players to adapt their movement to a high-stakes urban environment.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },

    { category: 'modes', title: 'Competitive', subtitle: '5v5 Match', year: '2026', desc: 'Step into the standard five-on-five ranked experience where strategy and individual skill collide, challenging you to climb the skill groups while mastering every aspect of team-based gameplay.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'modes', title: 'Wingman', subtitle: '2v2 Action', year: '2026', desc: 'Experience fast-paced two-on-two action on condensed versions of famous maps, perfect for practicing duo coordination and quick site executes in a more intimate and focused tactical setting.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'modes', title: 'Deathmatch', subtitle: 'FFA', year: '2026', desc: 'Hone your mechanical skills in this frantic free-for-all mode featuring instant respawns and a varied arsenal, making it the ultimate environment for practicing aim and weapon spray patterns.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'modes', title: 'Arms Race', subtitle: 'Progress', year: '2026', desc: 'Adapt to an ever-changing arsenal in this exciting progression mode where each kill grants a new weapon, leading up to the final challenge of securing a kill with the legendary golden knife.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'modes', title: 'Premier', subtitle: 'Elite', year: '2026', desc: 'Participate in the most prestigious matchmaking tier featuring a professional map veto system and global leaderboards, designed specifically for players seeking the highest level of challenge.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' },
    { category: 'modes', title: 'Casual', subtitle: 'Classic', year: '2026', desc: 'Enjoy a more relaxed ten-on-ten gaming experience with body armor provided and no friendly fire, making it the ideal environment for learning the basics or just having fun with your friends.', img: 'https://res.cloudinary.com/dhadbyq7n/image/upload/v1713772846/906352_g6l6g5.png' }
];

function renderApp(section) {
    const container = document.getElementById('cardsWrapper');
    if (!container) return;
    container.innerHTML = '';
    const filtered = myInventory.filter(item => item.category === section);

    filtered.forEach(item => {
        const cardHTML = `
            <div class="cs-card">
                <div class="card-img-area">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="card-info-area">
                    <h3>${item.title}</h3>
                    <p class="small text-white-50">${item.subtitle} | ${item.year}</p>
                    <hr class="border-secondary opacity-25">
                    <p class="small text-white-75">${item.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const currentBtn = document.getElementById('btn-' + section);
    if (currentBtn) currentBtn.classList.add('active');
    container.scrollLeft = 0;
}

renderApp('arms');