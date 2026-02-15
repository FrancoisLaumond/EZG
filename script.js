// Configuration des joueurs prédéfinis avec leurs IDs Riot
const PREDEFINED_PLAYERS = [
    {
        id: 'player1',
        name: 'ShadowStrike',
        tag: '#EZG001',
        riotId: 'ShadowStrike#1337',
        game: 'valorant',
        avatar: '🔥',
        rank: 'Immortal 3',
        stats: {
            kd: '1.85',
            winrate: '68%',
            acs: '267',
            headshot: '24%'
        },
        detailedStats: {
            'Parties jouées': '1,247',
            'Victoires': '847',
            'Défaites': '400',
            'Temps de jeu': '342h',
            'Agent principal': 'Jett',
            'Meilleur score': '40/12/8'
        }
    },
    {
        id: 'player2', 
        name: 'ThunderBolt',
        tag: '#EZG002',
        riotId: 'ThunderBolt#7890',
        game: 'valorant',
        avatar: '⚡',
        rank: 'Radiant',
        stats: {
            kd: '2.12',
            winrate: '74%',
            acs: '289',
            headshot: '28%'
        },
        detailedStats: {
            'Parties jouées': '892',
            'Victoires': '660',
            'Défaites': '232',
            'Temps de jeu': '267h',
            'Agent principal': 'Reyna',
            'Meilleur score': '43/8/12'
        }
    },
    {
        id: 'player3',
        name: 'IceBreaker',
        tag: '#EZG003',
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
        id: 'player4',
        name: 'Phoenix',
        tag: '#EZG004',
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
        id: 'player5',
        name: 'VoidWalker',
        tag: '#EZG005',
        riotId: 'VoidWalker#9999',
        game: 'cs2',
        avatar: '💀',
        rank: 'Global Elite',
        stats: {
            kd: '1.94',
            winrate: '72%',
            adr: '89.2',
            rating: '1.43'
        },
        detailedStats: {
            'Parties jouées': '1,124',
            'Victoires': '809',
            'Défaites': '315',
            'Temps de jeu': '478h',
            'Arme favorite': 'AK-47',
            'Headshot %': '31%'
        }
    },
    {
        id: 'player6',
        name: 'CyberNinja',
        tag: '#EZG006',
        riotId: 'CyberNinja#0001',
        game: 'cs2',
        avatar: '🥷',
        rank: 'Supreme Master',
        stats: {
            kd: '1.67',
            winrate: '65%',
            adr: '78.4',
            rating: '1.28'
        },
        detailedStats: {
            'Parties jouées': '876',
            'Victoires': '569',
            'Défaites': '307',
            'Temps de jeu': '342h',
            'Arme favorite': 'M4A4',
            'Headshot %': '28%'
        }
    },
    {
        id: 'player7',
        name: 'RocketMaster',
        tag: '#EZG007',
        riotId: 'RocketMaster#5555',
        game: 'rl',
        avatar: '🚀',
        rank: 'Grand Champion III',
        stats: {
            mmr: '1834',
            winrate: '58%',
            goals: '2.1',
            saves: '1.8'
        },
        detailedStats: {
            'Parties jouées': '2,341',
            'Victoires': '1,358',
            'Défaites': '983',
            'Temps de jeu': '567h',
            'Buts marqués': '4,916',
            'Arrêts': '4,213'
        }
    },
    {
        id: 'player8',
        name: 'AerialAce',
        tag: '#EZG008',
        riotId: 'AerialAce#7777',
        game: 'rl',
        avatar: '✈️',
        rank: 'Champion I',
        stats: {
            mmr: '1245',
            winrate: '62%',
            goals: '1.9',
            saves: '2.2'
        },
        detailedStats: {
            'Parties jouées': '1,876',
            'Victoires': '1,163',
            'Défaites': '713',
            'Temps de jeu': '423h',
            'Buts marqués': '3,563',
            'Arrêts': '4,127'
        }
    }
];

// Configuration des jeux
const GAME_CONFIG = {
    valorant: {
        name: 'Valorant',
        color: '#ff4655',
        statLabels: { kd: 'K/D', winrate: 'Winrate', acs: 'ACS', headshot: 'HS%' }
    },
    lol: {
        name: 'League of Legends',
        color: '#0596aa',
        statLabels: { kda: 'KDA', winrate: 'Winrate', lp: 'LP', cspm: 'CS/min' }
    },
    cs2: {
        name: 'Counter-Strike 2',
        color: '#f59e0b',
        statLabels: { kd: 'K/D', winrate: 'Winrate', adr: 'ADR', rating: 'Rating' }
    },
    rl: {
        name: 'Rocket League',
        color: '#005cb8',
        statLabels: { mmr: 'MMR', winrate: 'Winrate', goals: 'Goals/G', saves: 'Saves/G' }
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

// Configuration des filtres
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Supprimer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-game');
            filterPlayers();
        });
    });
}

// Filtrage des joueurs
function filterPlayers() {
    if (!playersLoaded) return;

    let filteredPlayers = PREDEFINED_PLAYERS;
    
    if (currentFilter !== 'all') {
        filteredPlayers = PREDEFINED_PLAYERS.filter(player => player.game === currentFilter);
    }

    renderPlayers(filteredPlayers);
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