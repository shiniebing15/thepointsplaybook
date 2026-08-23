/**
 * THE POINTS PLAYBOOK • IIChE AU-SC 2026–27
 * Interactive Digital Booklet Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Clear any legacy custom session overrides
  try {
    localStorage.removeItem('iiche_custom_playbook_data');
  } catch (e) {}

  // =========================================================================
  // 1. DATA DEFINITIONS (10 Exact Domains & Task Specifications)
  // =========================================================================
  // Master Domain & Task Reference Data (Synced with Playbook 2026-27)
  const DOMAIN_DATA = [
    {
      id: 1,
      num: '01',
      title: 'ONLINE SERIES & QUIZZES',
      teaser: 'Participation • Competition • Recognition',
      category: 'quizzes',
      tasks: [
        { name: 'Quiz Participation', points: 10, type: 'base' },
        { name: '1st Place', points: 30, type: 'high', badge: 'CHAMPION' },
        { name: '2nd Place', points: 20, type: 'bonus', badge: 'PODIUM BONUS' },
        { name: '3rd Place', points: 10, type: 'bonus', badge: 'PODIUM BONUS' }
      ]
    },
    {
      id: 2,
      num: '02',
      title: 'ONLINE SERIES PRODUCTION',
      teaser: 'Content • Design • Question Curation',
      category: 'media',
      tasks: [
        { name: 'Content Production', points: 20, type: 'base' },
        { name: 'Design', points: 20, type: 'base' },
        { name: 'Quiz Question Preparation', points: 30, type: 'high', badge: 'TECHNICAL CURATION' }
      ]
    },
    {
      id: 3,
      num: '03',
      title: 'WORKSHOPS / LECTURES',
      teaser: 'Attendance • Active Engagement • Q&A Insight',
      category: 'quizzes',
      tasks: [
        { name: 'Attending', points: 10, type: 'base' },
        { name: 'Answering a Speaker’s Question', points: 15, type: 'base' },
        { name: 'Asking a Question During Q&A', points: 20, type: 'high' }
      ]
    },
    {
      id: 4,
      num: '04',
      title: 'EVENT ORGANISATION',
      teaser: 'Coordination • Hosting • Ceremony & Protocol',
      category: 'events',
      tasks: [
        { name: 'Decoration', points: 15, type: 'base' },
        { name: 'Emcee / Host', points: 20, type: 'high' },
        { name: 'Tamil Thaai Vaazhthu', points: 10, type: 'base' },
        { name: 'Vote of Thanks', points: 10, type: 'base' }
      ]
    },
    {
      id: 5,
      num: '05',
      title: 'LOGISTICS',
      teaser: 'Supplies • Catering • Major Purchases & Materials',
      category: 'events',
      tasks: [
        { name: 'Basic Stationery / Small Supplies', points: 10, type: 'base' },
        { name: 'Refreshments / Snacks', points: 20, type: 'base' },
        { name: 'Badges / Certificates / Event Materials', points: 25, type: 'base' },
        { name: 'Mementos / Gifts / Prizes', points: 30, type: 'high' },
        { name: 'Invitations / Banners / Major Printing', points: 30, type: 'high' },
        { name: 'Multiple Purchases Bonus', points: 10, type: 'bonus', badge: 'LOGISTICS BONUS' }
      ]
    },
    {
      id: 6,
      num: '06',
      title: 'MARKETING & DIGITAL MEDIA',
      teaser: 'Campaigns • Video Production • Reel Concepts & Teasers',
      category: 'media',
      tasks: [
        { name: 'Approved Marketing Idea', points: 15, type: 'base' },
        { name: 'Executing an Approved Marketing Idea', points: 20, type: 'base' },
        { name: 'Reel Editing', points: 30, type: 'high' },
        { name: 'Reel Concept / Script', points: 20, type: 'base' },
        { name: 'Reel Shooting / Acting / Voice-Over', points: 30, type: 'high' },
        { name: 'Event Teaser', points: 40, type: 'high', badge: 'HIGH IMPACT' }
      ]
    },
    {
      id: 7,
      num: '07',
      title: 'PUBLIC RELATIONS',
      teaser: 'Guest Outreach • Corporate Sponsorship • Partnerships',
      category: 'editorial',
      tasks: [
        { name: 'Chief Guest / Speaker Lead', points: 20, type: 'base' },
        { name: 'Confirming a Guest / Speaker', points: 40, type: 'high' },
        { name: 'Funding / Sponsorship Lead', points: 30, type: 'base' },
        { name: 'Securing Funding / Sponsorship', points: 60, type: 'pinnacle', badge: 'PINNACLE IMPACT' },
        { name: 'Partnership / Collaboration', points: 50, type: 'pinnacle', badge: 'STRATEGIC ALLIANCE' }
      ]
    },
    {
      id: 8,
      num: '08',
      title: 'EDITORIAL',
      teaser: 'Writing • Scriptwriting • Articles & Official Comms',
      category: 'editorial',
      tasks: [
        { name: 'WhatsApp Message Draft', points: 10, type: 'base' },
        { name: 'Caption Writing', points: 10, type: 'base' },
        { name: 'Invitation Content', points: 15, type: 'base' },
        { name: 'Emcee Script', points: 30, type: 'high' },
        { name: 'Welcome Address / Vote of Thanks Script', points: 20, type: 'base' },
        { name: 'Newsletter / Magazine Article', points: 40, type: 'high', badge: 'MAJOR FEATURE' },
        { name: 'Website / LinkedIn Content', points: 30, type: 'high' },
        { name: 'Official Email Draft', points: 20, type: 'base' },
        { name: 'Interview Questionnaire', points: 20, type: 'base' },
        { name: 'Interview / Content Compilation', points: 25, type: 'high' }
      ]
    },
    {
      id: 9,
      num: '09',
      title: 'DESIGN',
      teaser: 'Visual Identity • Posters • Carousels & Banners',
      category: 'design',
      tasks: [
        { name: 'Poster Design', points: 20, type: 'base' },
        { name: 'Carousel Design', points: 25, type: 'high' },
        { name: 'Story Design', points: 15, type: 'base' },
        { name: 'Invitation Design', points: 25, type: 'high' },
        { name: 'Certificate Design', points: 10, type: 'base' },
        { name: 'Event Banner / Standee Design', points: 30, type: 'high', badge: 'LARGE FORMAT' },
        { name: 'Presentation / Slide Deck Design', points: 25, type: 'high' }
      ]
    },
    {
      id: 10,
      num: '10',
      title: 'SPOTIFY PODCAST / SOCIAL MEDIA',
      teaser: 'Audio Engineering • Hosting • Episode Concept',
      category: 'media',
      tasks: [
        { name: 'Episode Concept', points: 15, type: 'base' },
        { name: 'Script / Episode Outline', points: 25, type: 'high' },
        { name: 'Host / Interviewer', points: 35, type: 'high' },
        { name: 'Guest Arrangement', points: 30, type: 'high' },
        { name: 'Audio Editing / Mastering', points: 40, type: 'high' },
        { name: 'Episode Description / Show Notes', points: 15, type: 'base' }
      ]
    }
  ];

  // Dynamic 7-League Rank Progression System
  const LEAGUE_TIERS = [
    { 
      id: 'initiator', 
      min: 0, 
      max: 50, 
      name: 'INITIATOR LEAGUE', 
      badge: '🧪', 
      division: 'TIER 01 • SPARK', 
      reward: 'Verified Chapter Contributor Status',
      next: 'KINETIC LEAGUE at 51 pts',
      colorClass: 'league-initiator'
    },
    { 
      id: 'kinetic', 
      min: 51, 
      max: 120, 
      name: 'KINETIC LEAGUE', 
      badge: '⚡', 
      division: 'TIER 02 • FLOW', 
      reward: 'Event Entry Privileges',
      next: 'EQUILIBRIUM LEAGUE at 121 pts',
      colorClass: 'league-kinetic'
    },
    { 
      id: 'equilibrium', 
      min: 121, 
      max: 220, 
      name: 'EQUILIBRIUM LEAGUE', 
      badge: '⚖️', 
      division: 'TIER 03 • CATALYST', 
      reward: 'Media Spotlight',
      next: 'DISTILLATION LEAGUE at 221 pts',
      colorClass: 'league-equilibrium'
    },
    { 
      id: 'distillation', 
      min: 221, 
      max: 360, 
      name: 'DISTILLATION LEAGUE', 
      badge: '🌀', 
      division: 'TIER 04 • PURITY', 
      reward: 'Priority Workshop Passes',
      next: 'SYNTHESIS LEAGUE at 361 pts',
      colorClass: 'league-distillation'
    },
    { 
      id: 'synthesis', 
      min: 361, 
      max: 520, 
      name: 'SYNTHESIS LEAGUE', 
      badge: '💎', 
      division: 'TIER 05 • REACTOR', 
      reward: 'Official IIChE AU-SC Certificates & Annual Award Contender',
      next: 'QUANTUM LEAGUE at 521 pts',
      colorClass: 'league-synthesis'
    },
    { 
      id: 'quantum', 
      min: 521, 
      max: 750, 
      name: 'QUANTUM LEAGUE', 
      badge: '⚛️', 
      division: 'TIER 06 • VANGUARD', 
      reward: 'Guaranteed Podium Contender & Premium Category Prizes',
      next: 'GRANDMASTER TITAN at 751 pts',
      colorClass: 'league-quantum'
    },
    { 
      id: 'titan', 
      min: 751, 
      max: 9999, 
      name: 'GRANDMASTER TITAN', 
      badge: '👑🏆', 
      division: 'TIER 07 • PINNACLE', 
      reward: 'Annual Champion Award & Win Exciting Grand Prizes at the End of the Year! 🎁✨',
      next: 'MAX CHAPTER TIER ACHIEVED 🏆✨',
      colorClass: 'league-titan'
    }
  ];

  // App State
  let soundEnabled = true;
  let taskQuantities = new Map(); // taskId -> quantity count

  // =========================================================================
  // 2. AUDIO SYNTHESIZER (Pure Web Audio API)
  // =========================================================================
  let audioCtx = null;
  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playSound(type = 'click') {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'expand') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'point') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(980, now + 0.12);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'rankup') {
        // Level-up celebratory chord
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const noteOsc = audioCtx.createOscillator();
          const noteGain = audioCtx.createGain();
          noteOsc.type = 'sine';
          noteOsc.frequency.setValueAtTime(freq, now + i * 0.06);
          noteGain.gain.setValueAtTime(0.1, now + i * 0.06);
          noteGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
          noteOsc.connect(noteGain);
          noteGain.connect(audioCtx.destination);
          noteOsc.start(now + i * 0.06);
          noteOsc.stop(now + i * 0.06 + 0.26);
        });
      }
    } catch (e) {
      console.warn('Audio feedback failed', e);
    }
  }

  // Toast Helper
  function showToast(message) {
    const toast = document.getElementById('app-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // =========================================================================
  // 3. AMBIENT CHEMICAL ENGINEERING CANVAS (Benzene rings, bonds, nodes)
  // =========================================================================
  const canvas = document.getElementById('chem-bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let molecules = [];

    function resizeCanvas() {
      width = canvas.width = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0, 1200);
      height = canvas.height = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0, 800);
      initMolecules();
    }

    function initMolecules() {
      particles = [];
      molecules = [];
      const count = Math.floor((width * height) / 35000);
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.35 + 0.15
        });
      }

      // Hexagonal Benzene Ring Nodes
      const hexCount = Math.floor(width / 320);
      for (let i = 0; i < hexCount; i++) {
        molecules.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 16 + 20,
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.003
        });
      }
    }

    function drawHexagon(cx, cy, r, angle) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = angle + (i * Math.PI) / 3;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner aromatic ring
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 183, 3, 0.06)';
      ctx.stroke();
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Draw molecules
      molecules.forEach(m => {
        m.x += m.vx;
        m.y += m.vy;
        m.angle += m.rotSpeed;

        if (m.x < -50) m.x = width + 50;
        if (m.x > width + 50) m.x = -50;
        if (m.y < -50) m.y = height + 50;
        if (m.y > height + 50) m.y = -50;

        drawHexagon(m.x, m.y, m.radius, m.angle);
      });

      // Draw particles & connect nearest
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateCanvas);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateCanvas();
  }

  // =========================================================================
  // 4. ACCORDION EXPANSION & INTERACTION
  // =========================================================================
  const domainCards = document.querySelectorAll('.domain-card');

  function toggleDomainCard(card, shouldOpen = null) {
    const isExpanded = card.classList.contains('expanded');
    const targetState = shouldOpen !== null ? shouldOpen : !isExpanded;
    const body = card.querySelector('.domain-body');
    const header = card.querySelector('.domain-header');

    if (targetState) {
      card.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
      playSound('expand');
    } else {
      card.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
      body.style.maxHeight = '0px';
      playSound('click');
    }
  }

  domainCards.forEach(card => {
    const header = card.querySelector('.domain-header');
    header.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDomainCard(card);
    });
  });

  // Expand All / Collapse All
  const expandAllBtn = document.getElementById('expand-all-btn');
  const collapseAllBtn = document.getElementById('collapse-all-btn');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      domainCards.forEach(card => {
        if (!card.classList.contains('hidden')) {
          toggleDomainCard(card, true);
        }
      });
      showToast('All visible domains expanded');
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      domainCards.forEach(card => toggleDomainCard(card, false));
      showToast('All domains collapsed');
    });
  }

  // =========================================================================
  // 5. SEARCH & FILTER LOGIC
  // =========================================================================
  const searchInput = document.getElementById('task-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const noResultsEl = document.getElementById('no-results-message');
  const resetSearchBtn = document.getElementById('reset-search-btn');

  let currentCategory = 'all';

  function applyFilterAndSearch() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;

    domainCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const domainId = parseInt(card.getAttribute('data-domain'), 10);
      const domainInfo = DOMAIN_DATA.find(d => d.id === domainId);

      const matchesCategory = (currentCategory === 'all') || (cardCategory === currentCategory);
      
      let matchesSearch = true;
      if (query && domainInfo) {
        const titleMatch = domainInfo.title.toLowerCase().includes(query);
        const teaserMatch = domainInfo.teaser.toLowerCase().includes(query);
        const taskMatch = domainInfo.tasks.some(t => 
          t.name.toLowerCase().includes(query) || 
          (t.badge && t.badge.toLowerCase().includes(query)) ||
          `${t.points}`.includes(query)
        );
        matchesSearch = titleMatch || teaserMatch || taskMatch;
      }

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
        // If there's an active text search, auto-expand matching cards
        if (query.length > 1) {
          toggleDomainCard(card, true);
        }
      } else {
        card.classList.add('hidden');
      }
    });

    if (noResultsEl) {
      if (visibleCount === 0) {
        noResultsEl.classList.remove('hidden');
      } else {
        noResultsEl.classList.add('hidden');
      }
    }

    if (clearSearchBtn) {
      if (query.length > 0) {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilterAndSearch);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      applyFilterAndSearch();
      searchInput.focus();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentCategory = 'all';
      filterChips.forEach(chip => chip.classList.toggle('active', chip.dataset.filter === 'all'));
      applyFilterAndSearch();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.filter;
      playSound('click');
      applyFilterAndSearch();
    });
  });

  // =========================================================================
  // 6. INTERACTIVE POINT CALCULATOR / SIMULATOR
  // =========================================================================
  const calcToggleBtn = document.getElementById('calc-toggle-btn');
  const calcDrawer = document.getElementById('calculator-drawer');
  const closeCalcBtn = document.getElementById('close-calc-btn');
  const calcBackdrop = document.getElementById('calc-backdrop');
  const calcApplyBtn = document.getElementById('calc-apply-btn');
  const calcChecklistContainer = document.getElementById('calc-checklist-container');
  const calcTotalPointsEl = document.getElementById('calc-total-points');
  const calcRankTierEl = document.getElementById('calc-rank-tier');
  const calcProgressBarEl = document.getElementById('calc-progress-bar');
  const calcNextRankTextEl = document.getElementById('calc-next-rank-text');
  const calcItemsCountEl = document.getElementById('calc-items-count');
  const calcSelectedCountBadge = document.getElementById('calc-selected-count');
  const calcClearAllBtn = document.getElementById('calc-clear-all-btn');

  // Populate Calculator Checklist dynamically with quantity multiplier controls
  function renderCalculatorChecklist() {
    if (!calcChecklistContainer) return;
    calcChecklistContainer.innerHTML = '';

    DOMAIN_DATA.forEach(domain => {
      const groupEl = document.createElement('div');
      groupEl.className = 'calc-domain-group';

      const titleEl = document.createElement('div');
      titleEl.className = 'calc-group-title';
      titleEl.textContent = `${domain.num} • ${domain.title}`;
      groupEl.appendChild(titleEl);

      domain.tasks.forEach((task, tIndex) => {
        const taskId = `d${domain.id}_t${tIndex}`;
        const count = taskQuantities.get(taskId) || 0;
        const itemEl = document.createElement('div');
        itemEl.className = `calc-item-checkbox ${count > 0 ? 'checked' : ''}`;
        itemEl.setAttribute('data-task-id', taskId);
        itemEl.setAttribute('data-points', task.points);

        itemEl.innerHTML = `
          <div class="calc-item-left">
            <div class="calc-custom-check">${count > 0 ? '✓' : ''}</div>
            <span class="calc-item-name">${task.name}</span>
          </div>
          <div class="calc-item-right">
            <div class="calc-qty-control" onclick="event.stopPropagation();">
              <button class="qty-btn qty-minus" aria-label="Decrease quantity" data-task-id="${taskId}">-</button>
              <span class="qty-count" id="qty_${taskId}">${count}</span>
              <button class="qty-btn qty-plus" aria-label="Increase quantity" data-task-id="${taskId}">+</button>
            </div>
            <span class="calc-item-pts">+${task.points} pts</span>
          </div>
        `;

        // Click row to toggle 0 or 1
        itemEl.addEventListener('click', (e) => {
          if (e.target.closest('.qty-btn')) return;
          const current = taskQuantities.get(taskId) || 0;
          if (current > 0) {
            taskQuantities.set(taskId, 0);
            playSound('click');
          } else {
            taskQuantities.set(taskId, 1);
            playSound('point');
          }
          renderCalculatorChecklist();
          updateCalculatorScore();
        });

        // Plus button
        const plusBtn = itemEl.querySelector('.qty-plus');
        if (plusBtn) {
          plusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = taskQuantities.get(taskId) || 0;
            taskQuantities.set(taskId, current + 1);
            playSound('point');
            renderCalculatorChecklist();
            updateCalculatorScore();
          });
        }

        // Minus button
        const minusBtn = itemEl.querySelector('.qty-minus');
        if (minusBtn) {
          minusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = taskQuantities.get(taskId) || 0;
            if (current > 0) {
              taskQuantities.set(taskId, current - 1);
              playSound('click');
              renderCalculatorChecklist();
              updateCalculatorScore();
            }
          });
        }

        groupEl.appendChild(itemEl);
      });

      calcChecklistContainer.appendChild(groupEl);
    });
  }

  let previousTierIndex = 0;

  function updateCalculatorScore() {
    let totalScore = 0;
    let totalItems = 0;
    
    taskQuantities.forEach((count, taskId) => {
      if (count > 0) {
        const [dPart, tPart] = taskId.split('_');
        const dId = parseInt(dPart.replace('d', ''), 10);
        const tIdx = parseInt(tPart.replace('t', ''), 10);
        const domain = DOMAIN_DATA.find(d => d.id === dId);
        if (domain && domain.tasks[tIdx]) {
          totalScore += domain.tasks[tIdx].points * count;
          totalItems += count;
        }
      }
    });

    // Update numbers
    if (calcTotalPointsEl) calcTotalPointsEl.textContent = totalScore;
    if (calcItemsCountEl) calcItemsCountEl.textContent = totalItems;
    if (calcSelectedCountBadge) calcSelectedCountBadge.textContent = totalItems;

    // Calculate Dynamic League Tier
    let currentTier = LEAGUE_TIERS[0];
    let tierIndex = 0;
    for (let i = 0; i < LEAGUE_TIERS.length; i++) {
      if (totalScore >= LEAGUE_TIERS[i].min) {
        currentTier = LEAGUE_TIERS[i];
        tierIndex = i;
      }
    }

    // Dynamic Rank Card Styling
    const rankCard = document.querySelector('.score-rank-card');
    if (rankCard) {
      // Remove previous league classes
      LEAGUE_TIERS.forEach(t => rankCard.classList.remove(t.colorClass));
      rankCard.classList.add(currentTier.colorClass);
    }

    // Rank up celebration sound & toast if progressed to a higher tier
    if (tierIndex > previousTierIndex) {
      playSound('rankup');
      showToast(`🎉 LEAGUE UNLOCKED: ${currentTier.badge} ${currentTier.name}!`);
    }
    previousTierIndex = tierIndex;

    if (calcRankTierEl) calcRankTierEl.textContent = `${currentTier.badge} ${currentTier.name}`;
    if (calcNextRankTextEl) calcNextRankTextEl.textContent = currentTier.next;

    // Progress bar calculate (Dynamic calibrated to 800 PTS ceiling)
    if (calcProgressBarEl) {
      let percent = Math.min(100, Math.round((totalScore / 750) * 100));
      calcProgressBarEl.style.width = `${percent}%`;
    }
  }

  function openCalculator() {
    if (!calcDrawer) return;
    calcDrawer.classList.add('open');
    calcDrawer.setAttribute('aria-hidden', 'false');
    playSound('expand');
  }

  function closeCalculator() {
    if (!calcDrawer) return;
    calcDrawer.classList.remove('open');
    calcDrawer.setAttribute('aria-hidden', 'true');
    playSound('click');
  }

  if (calcToggleBtn) calcToggleBtn.addEventListener('click', openCalculator);
  if (closeCalcBtn) closeCalcBtn.addEventListener('click', closeCalculator);
  if (calcBackdrop) calcBackdrop.addEventListener('click', closeCalculator);
  if (calcApplyBtn) calcApplyBtn.addEventListener('click', closeCalculator);

  if (calcClearAllBtn) {
    calcClearAllBtn.addEventListener('click', () => {
      taskQuantities.clear();
      renderCalculatorChecklist();
      updateCalculatorScore();
      playSound('click');
      showToast('Calculator reset');
    });
  }

  // Initialize checklist items
  renderCalculatorChecklist();

  // League Tier Cards interactive preview
  const leagueCards = document.querySelectorAll('.league-tier-card');
  leagueCards.forEach(card => {
    card.addEventListener('click', () => {
      const leagueName = card.querySelector('.tier-name')?.textContent || '';
      const ptsPill = card.querySelector('.tier-pts-pill')?.textContent || '';
      showToast(`🏆 ${leagueName} (${ptsPill}) — Open simulator to test your score!`);
      playSound('point');
    });
  });

  // Allow clicking task rows in Page 3 to preview points in simulator
  const pageTaskRows = document.querySelectorAll('.page-system .task-row');
  pageTaskRows.forEach(row => {
    row.addEventListener('click', () => {
      const taskTitle = row.querySelector('.task-title')?.textContent || '';
      const ptsBadge = row.querySelector('.task-points')?.textContent || '';
      showToast(`Selected: ${taskTitle} (${ptsBadge})`);
      playSound('point');
    });
  });

  // =========================================================================
  // 7. NAVIGATION & SCROLL TRACKING
  // =========================================================================
  const navTabs = document.querySelectorAll('.nav-tab');
  const pages = document.querySelectorAll('.booklet-page');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.scrollIntoView({ behavior: 'smooth' });
        playSound('click');
      }
    });
  });

  // Quick jump CTA buttons
  const startReadingBtn = document.getElementById('start-reading-btn');
  if (startReadingBtn) {
    startReadingBtn.addEventListener('click', () => {
      document.getElementById('page-2')?.scrollIntoView({ behavior: 'smooth' });
      playSound('click');
    });
  }

  const jumpToDomainsBtn = document.getElementById('jump-to-domains-btn');
  if (jumpToDomainsBtn) {
    jumpToDomainsBtn.addEventListener('click', () => {
      document.getElementById('page-3')?.scrollIntoView({ behavior: 'smooth' });
      playSound('click');
    });
  }

  // ScrollSpy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pageId = entry.target.id;
        navTabs.forEach(tab => {
          tab.classList.toggle('active', tab.getAttribute('data-target') === pageId);
        });
      }
    });
  }, observerOptions);

  pages.forEach(page => observer.observe(page));

  // =========================================================================
  // 8. HEADER CONTROLS (Sound, Theme, Print)
  // =========================================================================
  // Sound Toggle
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.style.opacity = soundEnabled ? '1' : '0.4';
      showToast(soundEnabled ? '🔊 Sound effects enabled' : '🔇 Sound effects muted');
      if (soundEnabled) playSound('click');
    });
  }

  // Theme Toggle (Dark / Light Editorial)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem('iiche_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('iiche_theme', newTheme);
      playSound('click');
      showToast(`Switched to ${newTheme === 'dark' ? 'Midnight Slate' : 'Editorial Crisp'} theme`);
    });
  }

  // Print / PDF Button
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      // Expand all cards first for printing
      domainCards.forEach(card => toggleDomainCard(card, true));
      playSound('click');
      setTimeout(() => {
        window.print();
      }, 250);
    });
  }

  // Keyboard shortcut: Escape closes drawer, / focuses search
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && calcDrawer?.classList.contains('open')) {
      closeCalculator();
    }
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
      document.getElementById('page-3')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Default: Open all domain cards for full static publication layout
  domainCards.forEach(card => toggleDomainCard(card, true));
});
