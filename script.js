// Configuration des joueurs League of Legends prédéfinis avec leurs IDs Riot
const PREDEFINED_PLAYERS = [
    {
        id: 'player1',
        name: 'IceBreaker',
        tag: '#EZG001',
        riotId: 'IceBreaker#4567',
        game: 'lol',
        avatar: '❄️',
        rank: 'Grandmaster',
        stats: {
            kda: '3.2',
            winrate: '61%',
            lp: '487',
            cspm: '8.4'
        },
        detailedStats: {
            'Parties jouées': '567',
            'Victoires': '346',
            'Défaites': '221',
            'Champion principal': 'Azir',
            'KDA moyen': '8.2/4.1/12.6',
            'Or par minute': '425'
        }
    },
    {
        id: 'player2',
        name: 'Phoenix',
        tag: '#EZG002',
        riotId: 'Phoenix#1234',
        game: 'lol',
        avatar: '🔥',
        rank: 'Challenger',
        stats: {
            kda: '4.1',
            winrate: '69%',
            lp: '1247',
            cspm: '9.2'
        },
        detailedStats: {
            'Parties jouées': '423',
            'Victoires': '292',
            'Défaites': '131',
            'Champion principal': 'Yasuo',
            'KDA moyen': '12.4/3.8/14.2',
            'Or par minute': '467'
        }
    },
    {
        id: 'player3',
        name: 'ShadowMage',
        tag: '#EZG003',
        riotId: 'ShadowMage#7890',
        game: 'lol',
        avatar: '🌙',
        rank: 'Master',
        stats: {
            kda: '2.8',
            winrate: '64%',
            lp: '289',
            cspm: '7.9'
        },
        detailedStats: {
            'Parties jouées': '398',
            'Victoires': '255',
            'Défaites': '143',
            'Champion principal': 'Syndra',
            'KDA moyen': '9.1/5.2/11.8',
            'Or par minute': '398'
        }
    },
    {
        id: 'player4',
        name: 'DragonSlayer',
        tag: '#EZG004',
        riotId: 'DragonSlayer#1337',
        game: 'lol',
        avatar: '🐉',
        rank: 'Diamond I',
        stats: {
            kda: '2.5',
            winrate: '58%',
            lp: '1891',
            cspm: '8.1'
        },
        detailedStats: {
            'Parties jouées': '612',
            'Victoires': '355',
            'Défaites': '257',
            'Champion principal': 'Graves',
            'KDA moyen': '7.3/4.8/9.6',
            'Or par minute': '412'
        }
    }
];

// Configuration du jeu
const GAME_CONFIG = {
    lol: {
        name: 'League of Legends',
        color: '#0596aa',
        statLabels: { kda: 'KDA', winrate: 'Winrate', lp: 'LP', cspm: 'CS/min' }
    }
};

// Variables globales
let currentFilter = 'all';
let playersLoaded = false;

// Initialisation du site
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    
    // Spécifique à la page teammates
    if (window.location.pathname.includes('teammates') || document.getElementById('playersContainer')) {
        loadTeammates();
        setupFilters();
        setupModal();
    }
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background sur scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        }
    });
}

// Animations au scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
}

// Chargement des teammates
function loadTeammates() {
    const loadingElement = document.getElementById('loading');
    const playersContainer = document.getElementById('playersContainer');
    
    if (!playersContainer) return;

    // Simuler un délai de chargement
    setTimeout(() => {
        if (loadingElement) loadingElement.style.display = 'none';
        renderPlayers(PREDEFINED_PLAYERS);
        playersLoaded = true;
    }, 1500);
}

// Rendu des joueurs
function renderPlayers(players) {
    const playersContainer = document.getElementById('playersContainer');
    if (!playersContainer) return;

    playersContainer.innerHTML = '';

    players.forEach(player => {
        const gameConfig = GAME_CONFIG[player.game];
        const playerCard = document.createElement('div');
        playerCard.className = `player-card animate-on-scroll ${player.game}`;
        playerCard.setAttribute('data-game', player.game);

        const statsHtml = Object.entries(player.stats).map(([key, value]) => {
            const label = gameConfig.statLabels[key] || key.toUpperCase();
            return `
                <div class="stat">
                    <span class="stat-value">${value}</span>
                    <span class="stat-label">${label}</span>
                </div>
            `;
        }).join('');

        playerCard.innerHTML = `
            <div class="player-avatar">${player.avatar}</div>
            <h3>${player.name}</h3>
            <p class="player-tag">${player.tag}</p>
            <span class="player-game" style="background-color: ${gameConfig.color}">
                ${gameConfig.name}
            </span>
            <p class="player-rank">${player.rank}</p>
            <div class="player-stats">
                ${statsHtml}
            </div>
        `;

        playerCard.addEventListener('click', () => openPlayerModal(player));
        playersContainer.appendChild(playerCard);
    });

    // Réinitialiser les animations
    initScrollAnimations();
}

// Configuration des filtres (désactivé car un seul jeu)
function setupFilters() {
    // Plus de filtres nécessaires car nous n'avons que League of Legends
    return;
}

// Filtrage des joueurs (désactivé car un seul jeu)
function filterPlayers() {
    // Plus de filtrage nécessaire car nous n'avons que League of Legends
    if (!playersLoaded) return;
    renderPlayers(PREDEFINED_PLAYERS);
}

// Configuration de la modale
function setupModal() {
    const modal = document.getElementById('playerModal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', closePlayerModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePlayerModal();
            }
        });
    }

    // Fermeture avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlayerModal();
        }
    });
}

// Ouverture de la modale joueur
function openPlayerModal(player) {
    const modal = document.getElementById('playerModal');
    const modalName = document.getElementById('modalName');
    const modalTag = document.getElementById('modalTag');
    const modalGame = document.getElementById('modalGame');
    const modalAvatar = document.getElementById('modalAvatar');
    const modalStats = document.getElementById('modalStats');

    if (!modal) return;

    const gameConfig = GAME_CONFIG[player.game];

    modalName.textContent = player.name;
    modalTag.textContent = `${player.tag} • ${player.riotId}`;
    modalGame.textContent = `${gameConfig.name} • ${player.rank}`;
    modalAvatar.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" x="50" text-anchor="middle" font-size="40" dy="0.35em">' + player.avatar + '</text></svg>';

    // Statistiques détaillées
    const detailedStatsHtml = Object.entries(player.detailedStats).map(([key, value]) => `
        <div class="stat">
            <span class="stat-value">${value}</span>
            <span class="stat-label">${key}</span>
        </div>
    `).join('');

    modalStats.innerHTML = detailedStatsHtml;
    modal.style.display = 'block';
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

// Fermeture de la modale
function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    if (modal) {
        modal.style.display = 'none';
        // Re-permettre le scroll du body
        document.body.style.overflow = 'auto';
    }
}

// Simulation d'API Riot (pour démonstration)
function simulateRiotAPI(riotId) {
    // Dans un vrai projet, ici on ferait un appel à l'API Riot Games
    // Pour la démonstration, on retourne des données simulées
    return new Promise((resolve) => {
        setTimeout(() => {
            const player = PREDEFINED_PLAYERS.find(p => p.riotId === riotId);
            resolve(player || null);
        }, 1000);
    });
}

// Fonction utilitaire pour formater les nombres
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Animation des compteurs
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.textContent.replace(/[^\d.-]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
            } else {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    });
}

// Fonction d'initialisation pour la page d'accueil
function initHomePage() {
    // Animation des statistiques au scroll
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
}

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Fonction utilitaire pour débugger
function debugPlayerData() {
    console.table(PREDEFINED_PLAYERS.map(p => ({
        Name: p.name,
        Game: p.game,
        Rank: p.rank,
        RiotID: p.riotId
    })));
}

// Exposer certaines fonctions globalement pour le debug
window.EZG = {
    players: PREDEFINED_PLAYERS,
    debugPlayerData,
    filterPlayers,
    currentFilter: () => currentFilter
};

// Performance tracking
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log(`Page loaded in ${entry.loadEventEnd - entry.fetchStart}ms`);
        }
    }
});

try {
    performanceObserver.observe({ entryTypes: ['navigation'] });
} catch (e) {
    // PerformanceObserver non supporté
}

// Initialisation finale
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
} else {
    initHomePage();
}