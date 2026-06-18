const HORROR_CARDS = [
    {
        id: 'power-outage',
        name: '突然停电',
        emoji: '🌑',
        type: 'tension',
        intensity: 'medium',
        desc: '灯光骤灭，只剩手机微光。远处传来未知的声响。',
        defaultRhythm: 'slow-heavy',
        tensionValue: 65,
        fatigueValue: 15,
        expectationValue: 70,
        amusementValue: 5
    },
    {
        id: 'distant-nursery',
        name: '远处童谣',
        emoji: '🎵',
        type: 'tension',
        intensity: 'low',
        desc: '空荡走廊里飘来走调的童谣，越来越近，又越来越远。',
        defaultRhythm: 'flutter',
        tensionValue: 55,
        fatigueValue: 10,
        expectationValue: 80,
        amusementValue: 10
    },
    {
        id: 'mirror-figure',
        name: '镜中人影',
        emoji: '🪞',
        type: 'build',
        intensity: 'medium',
        desc: '镜中的你站在原地，但真实的你已经转过了身。',
        defaultRhythm: 'steady-build',
        tensionValue: 75,
        fatigueValue: 20,
        expectationValue: 60,
        amusementValue: 0
    },
    {
        id: 'sudden-chase',
        name: '突然追逐',
        emoji: '🏃',
        type: 'peak',
        intensity: 'high',
        desc: '身后传来急促的脚步声，你拼命奔跑却看不清前路。',
        defaultRhythm: 'fast-chaotic',
        tensionValue: 95,
        fatigueValue: 70,
        expectationValue: 30,
        amusementValue: 15
    },
    {
        id: 'false-safe',
        name: '假安全屋',
        emoji: '🏠',
        type: 'relief',
        intensity: 'low',
        desc: '终于找到一个锁着的房间，你靠在门上喘气——门却从里面被敲响了。',
        defaultRhythm: 'sudden-silence',
        tensionValue: 40,
        fatigueValue: 25,
        expectationValue: 90,
        amusementValue: 25
    },
    {
        id: 'whisper-name',
        name: '耳畔低语',
        emoji: '👂',
        type: 'tension',
        intensity: 'medium',
        desc: '有人在你耳边轻声念出你的名字，但房间里只有你一个人。',
        defaultRhythm: 'slow-heavy',
        tensionValue: 80,
        fatigueValue: 15,
        expectationValue: 50,
        amusementValue: 0
    },
    {
        id: 'footsteps-upstairs',
        name: '楼上脚步',
        emoji: '👣',
        type: 'build',
        intensity: 'medium',
        desc: '你住在顶楼，但天花板上方传来沉重的脚步声，一步一步。',
        defaultRhythm: 'steady-build',
        tensionValue: 70,
        fatigueValue: 30,
        expectationValue: 75,
        amusementValue: 5
    },
    {
        id: 'face-in-window',
        name: '窗外脸孔',
        emoji: '🪟',
        type: 'peak',
        intensity: 'high',
        desc: '闪电照亮的瞬间，窗外有一张脸正盯着你——而你住在23楼。',
        defaultRhythm: 'fast-chaotic',
        tensionValue: 90,
        fatigueValue: 50,
        expectationValue: 40,
        amusementValue: 5
    },
    {
        id: 'fake-jump',
        name: '虚惊一场',
        emoji: '🐈',
        type: 'relief',
        intensity: 'low',
        desc: '原来是只猫！你松了口气——但猫为什么在发抖？它在看你身后。',
        defaultRhythm: 'sudden-silence',
        tensionValue: 35,
        fatigueValue: 40,
        expectationValue: 85,
        amusementValue: 40
    },
    {
        id: 'phone-message',
        name: '未知短信',
        emoji: '📱',
        type: 'tension',
        intensity: 'low',
        desc: '"我看到你了。" 陌生号码发来的消息，配了一张你现在的照片。',
        defaultRhythm: 'flutter',
        tensionValue: 60,
        fatigueValue: 10,
        expectationValue: 85,
        amusementValue: 0
    },
    {
        id: 'doorknob-turning',
        name: '门把手转动',
        emoji: '🚪',
        type: 'build',
        intensity: 'medium',
        desc: '你确定锁好了门，但门把手正在缓慢地、一下一下地转动。',
        defaultRhythm: 'steady-build',
        tensionValue: 75,
        fatigueValue: 35,
        expectationValue: 70,
        amusementValue: 0
    },
    {
        id: 'crawling-on-ceiling',
        name: '天花板爬行',
        emoji: '🕷️',
        type: 'peak',
        intensity: 'high',
        desc: '什么东西在天花板上爬，你不敢抬头看，但声音越来越近。',
        defaultRhythm: 'fast-chaotic',
        tensionValue: 92,
        fatigueValue: 65,
        expectationValue: 35,
        amusementValue: 10
    },
    {
        id: 'normal-day',
        name: '平静日常',
        emoji: '☕',
        type: 'relief',
        intensity: 'low',
        desc: '阳光明媚，一切都很正常。好得有点过头了，不是吗？',
        defaultRhythm: 'normal-calm',
        tensionValue: 10,
        fatigueValue: 0,
        expectationValue: 95,
        amusementValue: 5
    },
    {
        id: 'old-photo',
        name: '诡异旧照',
        emoji: '📷',
        type: 'tension',
        intensity: 'medium',
        desc: '在祖母的旧相册里，你看到一张照片——角落里站着现在的你。',
        defaultRhythm: 'slow-heavy',
        tensionValue: 70,
        fatigueValue: 20,
        expectationValue: 65,
        amusementValue: 0
    },
    {
        id: 'under-bed',
        name: '床下视线',
        emoji: '🛏️',
        type: 'build',
        intensity: 'medium',
        desc: '弯腰捡东西时，你和一双眼睛对视了——它们在床底下。',
        defaultRhythm: 'flutter',
        tensionValue: 82,
        fatigueValue: 30,
        expectationValue: 55,
        amusementValue: 5
    }
];

const RHYTHM_PRESETS = {
    'slow-heavy': {
        name: '缓慢重击',
        bpm: 50,
        bpmRange: [40, 60],
        waveform: 'heavy',
        multiplier: { tension: 1.2, fatigue: 0.8, expectation: 1.0, amusement: 0.8 }
    },
    'steady-build': {
        name: '稳步加速',
        bpm: 85,
        bpmRange: [70, 100],
        waveform: 'build',
        multiplier: { tension: 1.1, fatigue: 1.2, expectation: 1.3, amusement: 0.9 }
    },
    'fast-chaotic': {
        name: '快速乱跳',
        bpm: 160,
        bpmRange: [140, 180],
        waveform: 'chaotic',
        multiplier: { tension: 1.4, fatigue: 1.6, expectation: 0.5, amusement: 1.2 }
    },
    'sudden-silence': {
        name: '突然静音',
        bpm: 0,
        bpmRange: [0, 0],
        waveform: 'silence',
        multiplier: { tension: 1.3, fatigue: 0.5, expectation: 1.5, amusement: 1.5 }
    },
    'flutter': {
        name: '忐忑颤动',
        bpm: 100,
        bpmRange: [90, 110],
        waveform: 'flutter',
        multiplier: { tension: 1.0, fatigue: 1.0, expectation: 1.2, amusement: 0.7 }
    },
    'normal-calm': {
        name: '正常平缓',
        bpm: 70,
        bpmRange: [60, 80],
        waveform: 'calm',
        multiplier: { tension: 0.6, fatigue: 0.3, expectation: 1.4, amusement: 1.0 }
    }
};

const MAX_CARDS_ON_TIMELINE = 10;
const TIMELINE_DURATION = 300;

let state = {
    timelineCards: [],
    isPlaying: false,
    playStartTime: 0,
    selectedTimelineCardId: null,
    nextId: 1
};

const $ = (id) => document.getElementById(id);

function init() {
    renderCardLibrary();
    setupDragAndDrop();
    setupEventListeners();
    setupCanvas();
    updateTrackCount();
}

function renderCardLibrary() {
    const library = $('cardLibrary');
    library.innerHTML = '';
    
    HORROR_CARDS.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'horror-card';
        cardEl.draggable = true;
        cardEl.dataset.cardId = card.id;
        
        const intensityWidth = card.intensity === 'low' ? '33%' 
            : card.intensity === 'medium' ? '66%' : '100%';
        
        cardEl.innerHTML = `
            <div class="card-header">
                <span class="card-emoji">${card.emoji}</span>
                <span class="card-name">${card.name}</span>
                <span class="card-type ${card.type}">${getTypeLabel(card.type)}</span>
            </div>
            <p class="card-desc">${card.desc}</p>
            <div class="card-intensity">
                <div class="intensity-bar">
                    <div class="intensity-fill ${card.intensity}" style="width: ${intensityWidth}"></div>
                </div>
            </div>
        `;
        
        library.appendChild(cardEl);
    });
}

function getTypeLabel(type) {
    const labels = {
        tension: '铺垫',
        build: '爬升',
        peak: '高潮',
        relief: '释放'
    };
    return labels[type] || type;
}

function setupDragAndDrop() {
    const library = $('cardLibrary');
    const track = $('timelineTrack');
    
    library.addEventListener('dragstart', (e) => {
        const card = e.target.closest('.horror-card');
        if (!card) return;
        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain', card.dataset.cardId);
        e.dataTransfer.effectAllowed = 'copy';
    });
    
    library.addEventListener('dragend', (e) => {
        const card = e.target.closest('.horror-card');
        if (card) card.classList.remove('dragging');
    });
    
    track.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        track.classList.add('drag-over');
    });
    
    track.addEventListener('dragleave', (e) => {
        if (!track.contains(e.relatedTarget)) {
            track.classList.remove('drag-over');
        }
    });
    
    track.addEventListener('drop', (e) => {
        e.preventDefault();
        track.classList.remove('drag-over');
        
        if (state.timelineCards.length >= MAX_CARDS_ON_TIMELINE) {
            showToast('时间轴已满，最多放置 ' + MAX_CARDS_ON_TIMELINE + ' 个片段');
            return;
        }
        
        const cardId = e.dataTransfer.getData('text/plain');
        if (!cardId) return;
        
        const rect = track.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        
        addCardToTimeline(cardId, percent);
    });
}

function addCardToTimeline(cardId, percent) {
    const cardData = HORROR_CARDS.find(c => c.id === cardId);
    if (!cardData) return;
    
    const widthPercent = 15;
    const maxStartPercent = 100 - widthPercent;
    const safeStartPercent = Math.max(0, Math.min(maxStartPercent, percent));
    
    const timelineCard = {
        uid: 'card-' + (state.nextId++),
        cardId: cardId,
        startPercent: safeStartPercent,
        widthPercent: widthPercent,
        rhythm: null,
        ...cardData
    };
    
    state.timelineCards.push(timelineCard);
    state.timelineCards.sort((a, b) => a.startPercent - b.startPercent);
    
    renderTimeline();
    updateTrackCount();
}

function renderTimeline() {
    const track = $('timelineTrack');
    const existingCards = track.querySelectorAll('.timeline-card');
    existingCards.forEach(c => c.remove());
    
    state.timelineCards.forEach((tc, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = `timeline-card ${tc.type}`;
        cardEl.dataset.uid = tc.uid;
        cardEl.style.left = tc.startPercent + '%';
        cardEl.style.width = tc.widthPercent + '%';
        
        const rhythmLabel = tc.rhythm 
            ? RHYTHM_PRESETS[tc.rhythm].name 
            : '未设置';
        const rhythmClass = tc.rhythm ? '' : 'missing';
        
        cardEl.innerHTML = `
            <button class="remove-btn" title="移除">×</button>
            <div class="timeline-card-emoji">${tc.emoji}</div>
            <div class="timeline-card-name">${tc.name}</div>
            <div class="timeline-card-rhythm ${rhythmClass}">${rhythmLabel}</div>
        `;
        
        track.appendChild(cardEl);
        
        cardEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) return;
            openRhythmSelector(tc.uid);
        });
        
        cardEl.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            removeTimelineCard(tc.uid);
        });
    });
}

function removeTimelineCard(uid) {
    state.timelineCards = state.timelineCards.filter(c => c.uid !== uid);
    if (state.selectedTimelineCardId === uid) {
        closeRhythmSelector();
    }
    renderTimeline();
    updateTrackCount();
}

function updateTrackCount() {
    $('trackCount').textContent = `${state.timelineCards.length} / ${MAX_CARDS_ON_TIMELINE} 片段`;
}

function openRhythmSelector(uid) {
    state.selectedTimelineCardId = uid;
    const tc = state.timelineCards.find(c => c.uid === uid);
    if (!tc) return;
    
    $('selectedCardName').textContent = `为「${tc.name}」选择心跳节奏`;
    $('rhythmSelector').classList.remove('hidden');
    
    document.querySelectorAll('.rhythm-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.rhythm === tc.rhythm);
    });
}

function closeRhythmSelector() {
    state.selectedTimelineCardId = null;
    $('rhythmSelector').classList.add('hidden');
}

function setupEventListeners() {
    $('closeSelector').addEventListener('click', closeRhythmSelector);
    
    document.querySelectorAll('.rhythm-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const rhythm = opt.dataset.rhythm;
            const tc = state.timelineCards.find(c => c.uid === state.selectedTimelineCardId);
            if (tc) {
                tc.rhythm = rhythm;
                renderTimeline();
                openRhythmSelector(tc.uid);
            }
        });
    });
    
    $('playBtn').addEventListener('click', togglePlay);
    $('resetBtn').addEventListener('click', resetAll);
    $('analyzeBtn').addEventListener('click', analyzeAudienceReaction);
    
    document.addEventListener('click', (e) => {
        const selector = $('rhythmSelector');
        if (!selector.classList.contains('hidden') 
            && !selector.contains(e.target)
            && !e.target.closest('.timeline-card')) {
            closeRhythmSelector();
        }
    });
}

let animationFrameId = null;
let lastHeartbeatTime = 0;

function togglePlay() {
    if (state.isPlaying) {
        stopPlayback();
    } else {
        startPlayback();
    }
}

function startPlayback() {
    if (state.timelineCards.length === 0) {
        showToast('请先在时间轴上放置一些恐怖片段');
        return;
    }
    
    state.isPlaying = true;
    state.playStartTime = performance.now();
    $('playBtn').innerHTML = '<span class="btn-icon">⏸</span> 暂停播放';
    $('playhead').classList.add('active');
    
    animatePlayback();
}

function stopPlayback() {
    state.isPlaying = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    $('playBtn').innerHTML = '<span class="btn-icon">▶</span> 播放节奏';
    $('playhead').classList.remove('active');
    $('bpmDisplay').textContent = '-- BPM';
}

function animatePlayback() {
    if (!state.isPlaying) return;
    
    const elapsed = (performance.now() - state.playStartTime) / 1000;
    const playSpeed = 30;
    const simTime = elapsed * playSpeed;
    const percent = (simTime / TIMELINE_DURATION) * 100;
    
    if (percent >= 100) {
        stopPlayback();
        $('playhead').style.left = '0%';
        if (state.timelineCards.length > 0) {
            try {
                const analysis = calculateAudienceReaction();
                renderReactionAnalysis(analysis);
                showToast('播放完成！已自动生成观众反馈');
            } catch (err) {
                console.error('自动分析出错:', err);
            }
        }
        return;
    }
    
    $('playhead').style.left = percent + '%';
    
    const currentCard = state.timelineCards.find(tc => {
        return percent >= tc.startPercent && percent <= (tc.startPercent + tc.widthPercent);
    });
    
    let bpm = 70;
    let waveformType = 'calm';
    
    if (currentCard && currentCard.rhythm) {
        const preset = RHYTHM_PRESETS[currentCard.rhythm];
        bpm = preset.bpm;
        waveformType = preset.waveform;
    } else if (currentCard) {
        const preset = RHYTHM_PRESETS[currentCard.defaultRhythm];
        bpm = preset.bpm;
        waveformType = preset.waveform;
    }
    
    $('bpmDisplay').textContent = bpm > 0 ? `${bpm} BPM` : '静音';
    
    const now = performance.now();
    const beatInterval = bpm > 0 ? (60000 / bpm) : 2000;
    if (now - lastHeartbeatTime > beatInterval) {
        triggerHeartbeat();
        lastHeartbeatTime = now;
    }
    
    drawWaveform(waveformType, elapsed);
    
    animationFrameId = requestAnimationFrame(animatePlayback);
}

function triggerHeartbeat() {
    const heart = $('heartAnim');
    heart.classList.remove('beating');
    void heart.offsetWidth;
    heart.classList.add('beating');
}

let canvasCtx = null;

function setupCanvas() {
    const canvas = $('waveCanvas');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvasCtx = canvas.getContext('2d');
    canvasCtx.scale(dpr, dpr);
    canvasCtx.width = rect.width;
    canvasCtx.height = rect.height;
    
    drawWaveform('calm', 0);
}

function drawWaveform(type, time) {
    if (!canvasCtx) return;
    
    const w = canvasCtx.width;
    const h = canvasCtx.height;
    const midY = h / 2;
    
    canvasCtx.fillStyle = '#0a0a0f';
    canvasCtx.fillRect(0, 0, w, h);
    
    const color = type === 'chaotic' ? '#c9334c' 
        : type === 'heavy' ? '#8b1e30'
        : type === 'build' ? '#7b3fa0'
        : type === 'silence' ? '#3a3a4a'
        : type === 'flutter' ? '#c9a233'
        : '#4a6fb0';
    
    canvasCtx.strokeStyle = color;
    canvasCtx.lineWidth = 2;
    canvasCtx.shadowColor = color;
    canvasCtx.shadowBlur = 8;
    
    canvasCtx.beginPath();
    
    if (type === 'silence') {
        canvasCtx.moveTo(0, midY);
        canvasCtx.lineTo(w, midY);
    } else if (type === 'chaotic') {
        for (let x = 0; x < w; x++) {
            const noise = (Math.sin(x * 0.15 + time * 0.01) * 0.4 
                + Math.sin(x * 0.3 + time * 0.02) * 0.3
                + (Math.random() - 0.5) * 0.6);
            const y = midY + noise * (h * 0.4);
            if (x === 0) canvasCtx.moveTo(x, y);
            else canvasCtx.lineTo(x, y);
        }
    } else if (type === 'heavy') {
        for (let x = 0; x < w; x++) {
            const phase = (x * 0.02 + time * 0.003) % (Math.PI * 2);
            let amp = 0;
            if (phase < Math.PI * 0.3) {
                amp = Math.sin(phase / 0.3 * Math.PI / 2) * 0.8;
            } else if (phase < Math.PI * 0.6) {
                amp = Math.sin((phase - Math.PI * 0.3) / 0.3 * Math.PI) * 0.4;
            } else {
                amp = 0;
            }
            const y = midY - Math.sign(Math.sin(phase)) * amp * (h * 0.4);
            if (x === 0) canvasCtx.moveTo(x, y);
            else canvasCtx.lineTo(x, y);
        }
    } else if (type === 'build') {
        for (let x = 0; x < w; x++) {
            const progress = x / w;
            const freq = 0.05 + progress * 0.1;
            const amp = 0.15 + progress * 0.4;
            const y = midY + Math.sin(x * freq + time * 0.008) * amp * (h * 0.4);
            if (x === 0) canvasCtx.moveTo(x, y);
            else canvasCtx.lineTo(x, y);
        }
    } else if (type === 'flutter') {
        for (let x = 0; x < w; x++) {
            const base = Math.sin(x * 0.08 + time * 0.01) * 0.3;
            const flutter = Math.sin(x * 0.4 + time * 0.03) * 0.15 * (0.5 + Math.random() * 0.5);
            const y = midY + (base + flutter) * (h * 0.4);
            if (x === 0) canvasCtx.moveTo(x, y);
            else canvasCtx.lineTo(x, y);
        }
    } else {
        for (let x = 0; x < w; x++) {
            const y = midY + Math.sin(x * 0.05 + time * 0.005) * 0.2 * (h * 0.4);
            if (x === 0) canvasCtx.moveTo(x, y);
            else canvasCtx.lineTo(x, y);
        }
    }
    
    canvasCtx.stroke();
    canvasCtx.shadowBlur = 0;
}

function resetAll() {
    state.timelineCards = [];
    state.isPlaying = false;
    state.selectedTimelineCardId = null;
    stopPlayback();
    $('playhead').style.left = '0%';
    closeRhythmSelector();
    renderTimeline();
    updateTrackCount();
    resetReactionDisplay();
    drawWaveform('calm', 0);
}

function resetReactionDisplay() {
    $('reactionContent').innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">🎬</div>
            <p>布置好恐怖片段，点击"观众反馈"<br>看看你的叙事节奏效果如何</p>
        </div>
    `;
}

function analyzeAudienceReaction() {
    if (state.timelineCards.length === 0) {
        showToast('请先在时间轴上放置恐怖片段');
        return;
    }
    
    const missingRhythm = state.timelineCards.filter(c => !c.rhythm);
    if (missingRhythm.length > 0) {
        showToast(`还有 ${missingRhythm.length} 个片段未设置心跳节奏，点击片段进行设置`);
    }
    
    const analysis = calculateAudienceReaction();
    renderReactionAnalysis(analysis);
}

function calculateAudienceReaction() {
    try {
        const cardCount = state.timelineCards.length;
        if (cardCount === 0) {
            return {
                scores: { tension: 0, fatigue: 0, expectation: 0, amusement: 0 },
                tags: [],
                positives: [],
                negatives: [{ title: '时间轴为空', detail: '请至少放置 1 个恐怖片段来分析节奏效果。' }],
                suggestions: [],
                overallRating: 0,
                ratingDesc: '时间轴上还没有片段，拖拽几张卡牌开始设计吧！'
            };
        }
        
        let totalTension = 0;
        let totalFatigue = 0;
        let totalExpectation = 0;
        let totalAmusement = 0;
        let weightedCount = 0;
        
        const peaks = [];
        const tensions = [];
        const reliefs = [];
        const missingRhythm = [];
        
        state.timelineCards.forEach((tc, idx) => {
            if (!tc.rhythm) missingRhythm.push(tc);
            const rhythm = tc.rhythm || tc.defaultRhythm;
            const preset = RHYTHM_PRESETS[rhythm] || RHYTHM_PRESETS['normal-calm'];
            const mult = preset.multiplier;
            
            const weight = 1;
            weightedCount += weight;
            
            totalTension += (tc.tensionValue || 50) * mult.tension * weight;
            totalFatigue += (tc.fatigueValue || 20) * mult.fatigue * weight;
            totalExpectation += (tc.expectationValue || 50) * mult.expectation * weight;
            totalAmusement += (tc.amusementValue || 5) * mult.amusement * weight;
            
            if (tc.type === 'peak') peaks.push({ ...tc, index: idx });
            if (tc.type === 'tension') tensions.push({ ...tc, index: idx });
            if (tc.type === 'relief') reliefs.push({ ...tc, index: idx });
        });
        
        if (weightedCount === 0) weightedCount = 1;
        
        const avgTension = Math.min(100, Math.max(0, Math.round(totalTension / weightedCount)));
        const avgFatigue = Math.min(100, Math.max(0, Math.round(totalFatigue / weightedCount)));
        const avgExpectation = Math.min(100, Math.max(0, Math.round(totalExpectation / weightedCount)));
        const avgAmusement = Math.min(100, Math.max(0, Math.round(totalAmusement / weightedCount)));
        
        const positives = [];
        const negatives = [];
        const suggestions = [];
        const tags = [];
        
        const firstCard = state.timelineCards[0] || null;
        const lastCard = state.timelineCards[cardCount - 1] || null;
        
        let alternatingCount = 0;
        if (cardCount >= 2) {
            for (let i = 1; i < cardCount; i++) {
                const prev = state.timelineCards[i - 1];
                const curr = state.timelineCards[i];
                if ((prev.type === 'peak' && (curr.type === 'relief' || curr.type === 'tension')) ||
                    ((prev.type === 'relief' || prev.type === 'tension') && curr.type === 'build')) {
                    alternatingCount++;
                }
            }
        }
        
        if (cardCount === 1) {
            suggestions.push({
                title: '片段较少，节奏单一',
                detail: `目前只有 1 个片段「${firstCard ? firstCard.name : ''}」，建议增加 3-6 个片段来体验完整的张弛节奏。`
            });
            tags.push({ text: '可增加片段', type: 'neutral' });
        }
        
        if (firstCard && (firstCard.type === 'tension' || firstCard.type === 'relief')) {
            positives.push({
                title: '开场节奏得当',
                detail: `以「${firstCard.name}」作为开场，给了观众进入情绪的缓冲空间。`
            });
            tags.push({ text: '开场稳健', type: 'positive' });
        } else if (firstCard && firstCard.type === 'peak') {
            negatives.push({
                title: '开场高潮过早',
                detail: `一上来就是「${firstCard.name}」这样的强刺激，后续很难再突破观众的耐受阈值。`
            });
            tags.push({ text: '高潮过早', type: 'negative' });
        }
        
        if (cardCount >= 3 && alternatingCount >= cardCount * 0.5) {
            positives.push({
                title: '张弛节奏良好',
                detail: '高潮与铺垫交替出现，观众的神经有松有紧，符合恐怖叙事的经典节奏。'
            });
            tags.push({ text: '张弛有度', type: 'positive' });
        } else if (cardCount >= 3) {
            suggestions.push({
                title: '节奏可更有起伏',
                detail: `当前有 ${alternatingCount} 次明显的节奏转换，尝试在高潮后安排释放段落，观众会更容易被下一波惊吓吓到。`
            });
        }
        
        const peakCount = peaks.length;
        if (peakCount >= 2 && peakCount <= 4) {
            positives.push({
                title: '高潮密度合理',
                detail: `${peakCount} 个高潮点分布在 5 分钟内，观众有足够的情绪消化时间。`
            });
            tags.push({ text: '高潮得当', type: 'positive' });
        } else if (peakCount > 4) {
            negatives.push({
                title: '高潮过于密集',
                detail: `${peakCount} 个高潮点可能导致观众情绪疲劳，吓多了就麻木了。`
            });
            tags.push({ text: '惊吓疲劳', type: 'negative' });
        } else if (peakCount === 0) {
            negatives.push({
                title: '缺少明确高潮',
                detail: '没有高潮段落，观众的紧张情绪得不到释放，容易感到无聊。'
            });
            tags.push({ text: '缺少爆点', type: 'negative' });
        } else if (peakCount === 1) {
            suggestions.push({
                title: '高潮点可以更多',
                detail: `目前只有 1 个高潮，可以考虑再安排 1-2 个小高潮，形成节奏波浪。`
            });
        }
        
        if (peakCount >= 1) {
            const lastPeak = peaks[peaks.length - 1];
            if (lastPeak.index === cardCount - 1) {
                positives.push({
                    title: '结尾有力',
                    detail: `以「${lastPeak.name}」收尾，给观众留下深刻印象。`
                });
                tags.push({ text: '余味悠长', type: 'positive' });
            } else if (lastCard && lastCard.type === 'relief') {
                suggestions.push({
                    title: '可以考虑反转结尾',
                    detail: `当前以「${lastCard.name}」收尾，如果在最后加一个小反转，效果会更加难忘。`
                });
                tags.push({ text: '可留悬念', type: 'neutral' });
            }
        }
        
        if (tensions.length >= 2) {
            positives.push({
                title: '注重氛围铺垫',
                detail: `${tensions.length} 个铺垫段落，说明你重视"让观众自己吓自己"的心理恐怖。`
            });
            tags.push({ text: '心理恐怖', type: 'positive' });
        }
        
        if (reliefs.length >= 1 && reliefs.length <= 3) {
            positives.push({
                title: '善用假安全',
                detail: `${reliefs.length} 个释放段落，用放松来反衬随后的恐惧，这是高明的手法。`
            });
            tags.push({ text: '善用反差', type: 'positive' });
        }
        
        if (avgFatigue > 60) {
            negatives.push({
                title: '观众容易疲劳',
                detail: `疲劳指数 ${avgFatigue}/100，持续的高强度刺激可能导致观众脱敏。建议增加一些平静段落。`
            });
            tags.push({ text: '节奏偏累', type: 'negative' });
        }
        
        if (avgExpectation > 70) {
            positives.push({
                title: '悬念感十足',
                detail: `期待指数 ${avgExpectation}/100，观众会一直想知道"接下来会发生什么"。`
            });
            tags.push({ text: '悬念优秀', type: 'positive' });
        }
        
        if (avgAmusement > 30) {
            suggestions.push({
                title: '带点黑色幽默',
                detail: `失笑指数 ${avgAmusement}/100，你的设计中有些幽默元素，这能在某些场景增强反差感。`
            });
            tags.push({ text: '黑色幽默', type: 'neutral' });
        }
        
        if (missingRhythm.length > 0) {
            suggestions.push({
                title: '完善心跳节奏',
                detail: `还有 ${missingRhythm.length} 个片段未设置心跳节奏，点击时间轴上的片段选择节奏，体验会更完整。`
            });
        }
        
        let pacingScore = 0;
        pacingScore += Math.min(avgTension, 80) * 0.25;
        pacingScore += Math.min(avgExpectation, 85) * 0.25;
        pacingScore += Math.max(0, 100 - avgFatigue) * 0.25;
        if (alternatingCount >= 2) pacingScore += 15;
        else if (alternatingCount === 1) pacingScore += 7;
        if (peakCount >= 2 && peakCount <= 4) pacingScore += 10;
        else if (peakCount === 1) pacingScore += 5;
        if (cardCount >= 3) pacingScore += 5;
        if (cardCount >= 5) pacingScore += 5;
        pacingScore = Math.min(100, Math.max(0, Math.round(pacingScore)));
        
        let ratingDesc = '';
        if (pacingScore >= 85) {
            ratingDesc = '教科书级的恐怖叙事节奏，观众会全程攥紧拳头！';
        } else if (pacingScore >= 70) {
            ratingDesc = '节奏把握得相当不错，有张有弛，有恐怖有回味。';
        } else if (pacingScore >= 55) {
            ratingDesc = '中规中矩，有亮点但整体节奏还有优化空间。';
        } else if (pacingScore >= 40) {
            ratingDesc = '节奏存在一些问题，观众可能会感到疲劳或不够投入。';
        } else {
            ratingDesc = '需要重新调整节奏，恐怖不是一直吓，而是让心悬起来。';
        }
        
        return {
            scores: {
                tension: avgTension,
                fatigue: avgFatigue,
                expectation: avgExpectation,
                amusement: avgAmusement
            },
            tags,
            positives,
            negatives,
            suggestions,
            overallRating: pacingScore,
            ratingDesc
        };
    } catch (err) {
        console.error('calculateAudienceReaction error:', err);
        return {
            scores: { tension: 50, fatigue: 30, expectation: 50, amusement: 10 },
            tags: [{ text: '分析中出现异常', type: 'neutral' }],
            positives: [],
            negatives: [],
            suggestions: [{ title: '系统提示', detail: '分析过程中出现小问题，但结果仍可参考。' }],
            overallRating: 50,
            ratingDesc: '可以继续调整编排，再次点击观众反馈查看。'
        };
    }
}

function renderReactionAnalysis(analysis) {
    const content = $('reactionContent');
    
    let tagsHtml = analysis.tags.map((tag, i) => 
        `<span class="reaction-tag ${tag.type}" style="animation-delay: ${i * 0.08}s">${tag.text}</span>`
    ).join('');
    
    let positivesHtml = analysis.positives.length > 0 
        ? `<div class="feedback-section positive">
            <h4>✅ 做得好的地方</h4>
            <div class="feedback-list">
                ${analysis.positives.map(p => 
                    `<div class="feedback-item"><strong>${p.title}</strong><br>${p.detail}</div>`
                ).join('')}
            </div>
        </div>` : '';
    
    let negativesHtml = analysis.negatives.length > 0
        ? `<div class="feedback-section negative">
            <h4>⚠️ 需要注意</h4>
            <div class="feedback-list">
                ${analysis.negatives.map(n => 
                    `<div class="feedback-item"><strong>${n.title}</strong><br>${n.detail}</div>`
                ).join('')}
            </div>
        </div>` : '';
    
    let suggestionsHtml = analysis.suggestions.length > 0
        ? `<div class="feedback-section suggestion">
            <h4>💡 改进建议</h4>
            <div class="feedback-list">
                ${analysis.suggestions.map(s => 
                    `<div class="feedback-item"><strong>${s.title}</strong><br>${s.detail}</div>`
                ).join('')}
            </div>
        </div>` : '';
    
    content.innerHTML = `
        <div class="overall-rating">
            <div class="rating-label">整体节奏评分</div>
            <div class="rating-value">${analysis.overallRating}</div>
            <div class="rating-desc">${analysis.ratingDesc}</div>
        </div>
        
        <div class="reaction-scores" style="margin-top: 20px;">
            <div class="score-item tension">
                <div class="score-label">紧张度</div>
                <div class="score-value">${analysis.scores.tension}</div>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${analysis.scores.tension}%"></div>
                </div>
            </div>
            <div class="score-item fatigue">
                <div class="score-label">疲劳度</div>
                <div class="score-value">${analysis.scores.fatigue}</div>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${analysis.scores.fatigue}%"></div>
                </div>
            </div>
            <div class="score-item expectation">
                <div class="score-label">期待感</div>
                <div class="score-value">${analysis.scores.expectation}</div>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${analysis.scores.expectation}%"></div>
                </div>
            </div>
            <div class="score-item amusement">
                <div class="score-label">失笑率</div>
                <div class="score-value">${analysis.scores.amusement}</div>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${analysis.scores.amusement}%"></div>
                </div>
            </div>
        </div>
        
        <div class="reaction-tags">
            ${tagsHtml}
        </div>
        
        ${positivesHtml}
        ${negativesHtml}
        ${suggestionsHtml}
    `;
    
    setTimeout(() => {
        document.querySelectorAll('.score-bar-fill').forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }, 50);
}

function showToast(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #c9334c, #8b1e30);
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            z-index: 9999;
            box-shadow: 0 4px 20px rgba(201, 51, 76, 0.4);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
        `;
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
    
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 2500);
}

document.addEventListener('DOMContentLoaded', init);
