/* ========================================
   3D TRAVEL ROULETTE — FIXED & ENHANCED
   ======================================== */

// ========================================
// STATE MANAGEMENT
// ========================================
const State = {
    isSpinning: false,
    selectedCountry: null,
    currentSequence: [],

    setSpinning(value) {
        this.isSpinning = value;
        UI.updateStatus(value ? 'spinning' : 'idle');
    },

    setSelectedCountry(country) {
        this.selectedCountry = country;
    }
};

// ========================================
// GEOMETRY HELPERS
// ========================================
const Geom = {
    getVector(lat, lng) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        return {
            x: -(Math.sin(phi) * Math.cos(theta)),
            y: Math.cos(phi),
            z: Math.sin(phi) * Math.sin(theta)
        };
    },

    getDistance(c1, c2) {
        const v1 = this.getVector(c1.coords[0], c1.coords[1]);
        const v2 = this.getVector(c2.coords[0], c2.coords[1]);
        return Math.sqrt(
            (v1.x - v2.x) ** 2 +
            (v1.y - v2.y) ** 2 +
            (v1.z - v2.z) ** 2
        );
    }
};

// countriesData is loaded from data/*.js files
// countriesByISO and countriesByNumericId maps are defined in data/index.js

// ========================================
// PARTICLE BACKGROUND
// ========================================
const Particles = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,

    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticles() {
        this.particles = [];
        const count = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 8000));

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.6 + 0.1,
                pulse: Math.random() * Math.PI * 2
            });
        }
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const p of this.particles) {
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.015;

            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            const flicker = 0.5 + 0.5 * Math.sin(p.pulse);
            const alpha = p.opacity * flicker;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(180, 210, 255, ${alpha})`;
            this.ctx.fill();

            // Tiny glow
            if (p.size > 1.2) {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(100, 180, 255, ${alpha * 0.08})`;
                this.ctx.fill();
            }
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }
};

// ========================================
// CONFETTI EFFECT
// ========================================
const Confetti = {
    canvas: null,
    ctx: null,
    pieces: [],
    animationId: null,

    fire() {
        this.canvas = document.getElementById('confetti-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.classList.add('active');

        this.pieces = [];
        const colors = ['#00d4ff', '#6366f1', '#00ff88', '#ffaa00', '#ef4444', '#f472b6', '#a78bfa'];

        for (let i = 0; i < 80; i++) {
            this.pieces.push({
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
                y: window.innerHeight * 0.4,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 12,
                vy: -(Math.random() * 10 + 4),
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 12,
                gravity: 0.18 + Math.random() * 0.08,
                opacity: 1,
                decay: 0.003 + Math.random() * 0.005
            });
        }

        this.animateConfetti();
    },

    animateConfetti() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let alive = false;

        for (const p of this.pieces) {
            if (p.opacity <= 0) continue;
            alive = true;

            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.99;
            p.rotation += p.rotSpeed;
            p.opacity -= p.decay;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = Math.max(0, p.opacity);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            this.ctx.restore();
        }

        if (alive) {
            this.animationId = requestAnimationFrame(() => this.animateConfetti());
        } else {
            this.canvas.classList.remove('active');
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
};

// ========================================
// WORLD (3D GLOBE)
// ========================================
const World = {
    globe: null,
    scene: null,
    camera: null,
    renderer: null,
    animatedObjects: [],
    currentArcObjects: [],
    geoFeatures: [],
    highlightedCountryId: null,

    async init(container) {
        try {
            console.log('🌍 Initializing globe...');

            this.globe = Globe()
                .globeMaterial(new THREE.MeshPhongMaterial({
                    color: 0x151b2e,
                    emissive: 0x080d15,
                    emissiveIntensity: 0.15,
                    shininess: 20
                }))
                .showAtmosphere(true)
                .atmosphereColor('#4f8ef7')
                .atmosphereAltitude(0.15)
                .backgroundColor('rgba(0, 0, 0, 0)')
                .pointOfView({ altitude: 3.5 })
                .width(window.innerWidth)
                .height(window.innerHeight)
                (container);

            this.scene = this.globe.scene();
            this.camera = this.globe.camera();
            this.renderer = this.globe.renderer();

            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setClearColor(0x06060e, 1);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            this.scene.add(ambientLight);

            const dirLight = new THREE.DirectionalLight(0xbbd4ff, 0.4);
            dirLight.position.set(5, 3, 5);
            this.scene.add(dirLight);

            const rimLight = new THREE.DirectionalLight(0x3b82f6, 0.15);
            rimLight.position.set(-4, -2, -3);
            this.scene.add(rimLight);

            await this.loadWorldData();

            // Controls
            const controls = this.globe.controls();
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.rotateSpeed = 0.3;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.15;
            controls.minDistance = 150;
            controls.maxDistance = 800;

            window.addEventListener('resize', () => {
                this.globe.width(window.innerWidth);
                this.globe.height(window.innerHeight);
            });

            console.log('✅ Globe ready');
            return true;

        } catch (error) {
            console.error('❌ Init failed:', error);
            return false;
        }
    },

    async loadWorldData() {
        try {
            console.log('📥 Loading countries...');
            const response = await fetch('https://unpkg.com/world-atlas@2/countries-110m.json');

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const worldData = await response.json();
            const countries = topojson.feature(worldData, worldData.objects.countries);
            this.geoFeatures = countries.features;

            this.globe
                .polygonsData(countries.features)
                .polygonAltitude(d => d.id === this.highlightedCountryId ? 0.025 : 0.008)
                .polygonCapColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.55)' : 'rgba(35, 45, 65, 0.75)')
                .polygonSideColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.3)' : 'rgba(20, 30, 50, 0.35)')
                .polygonStrokeColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.6)' : 'rgba(100, 150, 255, 0.15)')
                .polygonLabel(() => '');

            console.log('✅ Countries loaded');

        } catch (error) {
            console.warn('⚠️ Countries load failed, retrying...', error);
            // Retry once
            try {
                const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
                if (response.ok) {
                    const worldData = await response.json();
                    const countries = topojson.feature(worldData, worldData.objects.countries);
                    this.geoFeatures = countries.features;
                    this.globe
                        .polygonsData(countries.features)
                        .polygonAltitude(d => d.id === this.highlightedCountryId ? 0.025 : 0.008)
                        .polygonCapColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.55)' : 'rgba(35, 45, 65, 0.75)')
                        .polygonSideColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.3)' : 'rgba(20, 30, 50, 0.35)')
                        .polygonStrokeColor(d => d.id === this.highlightedCountryId ? 'rgba(0, 212, 255, 0.6)' : 'rgba(100, 150, 255, 0.15)')
                        .polygonLabel(() => '');
                    console.log('✅ Countries loaded (fallback)');
                }
            } catch (e) {
                console.error('❌ Countries load failed completely:', e);
            }
        }
    },

    getCoords(lat, lng, relativeAltitude) {
        const { x, y, z } = this.globe.getCoords(lat, lng, relativeAltitude);
        return new THREE.Vector3(x, y, z);
    },

    highlightCountry(iso, color = '#3b82f6') {
        const country = countriesData.find(c => c.iso === iso);
        if (!country) return null;

        const geometry = new THREE.RingGeometry(1, 1.5, 32);
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });
        const marker = new THREE.Mesh(geometry, material);

        const position = this.getCoords(country.coords[0], country.coords[1], 0.015);
        marker.position.copy(position);
        marker.lookAt(0, 0, 0);

        this.scene.add(marker);
        this.animatedObjects.push(marker);

        gsap.to(marker.scale, {
            x: 1.8,
            y: 1.8,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });

        gsap.to(marker.material, {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
                this.scene.remove(marker);
                const idx = this.animatedObjects.indexOf(marker);
                if (idx > -1) this.animatedObjects.splice(idx, 1);
            }
        });

        return marker;
    },

    drawFlightArc(fromISO, toISO, duration) {
        const from = countriesData.find(c => c.iso === fromISO);
        const to = countriesData.find(c => c.iso === toISO);
        if (!from || !to) return;

        this.currentArcObjects.forEach(obj => this.scene.remove(obj));
        this.currentArcObjects = [];

        const startVec = this.getCoords(from.coords[0], from.coords[1], 0);
        const endVec = this.getCoords(to.coords[0], to.coords[1], 0);

        const numPoints = 100;
        const points = [];

        for (let i = 0; i <= numPoints; i++) {
            const t = i / numPoints;
            const interpolated = new THREE.Vector3().lerpVectors(startVec, endVec, t);
            const arcHeight = Math.sin(t * Math.PI) * 0.35;
            const len = interpolated.length();
            interpolated.normalize().multiplyScalar(len + (len * arcHeight));
            points.push(interpolated);
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.8,
            linewidth: 3
        });

        const arcLine = new THREE.Line(geometry, material);
        this.scene.add(arcLine);
        this.currentArcObjects.push(arcLine);

        arcLine.geometry.setDrawRange(0, 0);

        gsap.to(arcLine.geometry.drawRange, {
            count: points.length,
            duration: duration / 1000,
            ease: 'none',
            onUpdate: () => {
                arcLine.geometry.attributes.position.needsUpdate = true;
            }
        });

        gsap.to(arcLine.material, {
            opacity: 0,
            delay: duration / 1000,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                this.scene.remove(arcLine);
                const idx = this.currentArcObjects.indexOf(arcLine);
                if (idx > -1) this.currentArcObjects.splice(idx, 1);
            }
        });
    },

    createDroplet(fromISO, toISO, duration) {
        const from = countriesData.find(c => c.iso === fromISO);
        const to = countriesData.find(c => c.iso === toISO);
        if (!from || !to) return;

        const geometry = new THREE.SphereGeometry(0.7, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x60a5fa,
            transparent: true,
            opacity: 1
        });
        const droplet = new THREE.Mesh(geometry, material);

        // Outer glow ring
        const glowGeometry = new THREE.RingGeometry(0.7, 1.4, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        droplet.add(glow);

        // Trail particles
        const trailGroup = new THREE.Group();
        this.scene.add(trailGroup);

        this.scene.add(droplet);
        this.animatedObjects.push(droplet);

        const startVec = this.getCoords(from.coords[0], from.coords[1], 0);
        const endVec = this.getCoords(to.coords[0], to.coords[1], 0);

        const progress = { t: 0 };
        let lastTrailTime = 0;

        gsap.to(progress, {
            t: 1,
            duration: duration / 1000,
            ease: 'none',
            onUpdate: () => {
                const interpolated = new THREE.Vector3().lerpVectors(startVec, endVec, progress.t);
                const arcHeight = Math.sin(progress.t * Math.PI) * 0.35;
                const len = interpolated.length();
                interpolated.normalize().multiplyScalar(len + (len * arcHeight));

                droplet.position.copy(interpolated);
                glow.lookAt(0, 0, 0);

                const scale = 1 + Math.sin(progress.t * Math.PI * 4) * 0.15;
                droplet.scale.set(scale, scale, scale);

                // Spawn trail particles
                const now = performance.now();
                if (now - lastTrailTime > 40 && progress.t > 0.05 && progress.t < 0.95) {
                    lastTrailTime = now;
                    const trailParticle = new THREE.Mesh(
                        new THREE.SphereGeometry(0.25, 8, 8),
                        new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.6 })
                    );
                    trailParticle.position.copy(interpolated);
                    trailGroup.add(trailParticle);

                    gsap.to(trailParticle.material, {
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                    gsap.to(trailParticle.scale, {
                        x: 0.1, y: 0.1, z: 0.1,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: () => trailGroup.remove(trailParticle)
                    });
                }

                if (progress.t > 0.9) {
                    const fade = 1 - ((progress.t - 0.9) / 0.1);
                    droplet.material.opacity = fade;
                    glow.material.opacity = fade * 0.5;
                }
            },
            onComplete: () => {
                this.createRipple(to.coords[0], to.coords[1]);
                this.scene.remove(droplet);
                this.scene.remove(trailGroup);
                const idx = this.animatedObjects.indexOf(droplet);
                if (idx > -1) this.animatedObjects.splice(idx, 1);
            }
        });
    },

    createRipple(lat, lng) {
        const position = this.getCoords(lat, lng, 0.015);

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const geometry = new THREE.RingGeometry(0.5, 0.9, 32);
                const material = new THREE.MeshBasicMaterial({
                    color: i === 0 ? 0x60a5fa : 0x818cf8,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.DoubleSide
                });
                const ring = new THREE.Mesh(geometry, material);

                ring.position.copy(position);
                ring.lookAt(0, 0, 0);

                this.scene.add(ring);
                this.animatedObjects.push(ring);

                gsap.to(ring.scale, {
                    x: 3.5,
                    y: 3.5,
                    duration: 1,
                    ease: 'power2.out'
                });

                gsap.to(ring.material, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: () => {
                        this.scene.remove(ring);
                        const idx = this.animatedObjects.indexOf(ring);
                        if (idx > -1) this.animatedObjects.splice(idx, 1);
                    }
                });
            }, i * 100);
        }
    },

    flyToCountry(iso, altitude = 1.2, duration = 2000) {
        const country = countriesData.find(c => c.iso === iso);
        if (!country) return;

        const currentPOV = this.globe.pointOfView();

        gsap.to(currentPOV, {
            lat: country.coords[0],
            lng: country.coords[1],
            altitude: altitude,
            duration: duration / 1000,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.globe.pointOfView(currentPOV);
            }
        });
    },

    clearAnimations() {
        this.animatedObjects.forEach(obj => this.scene.remove(obj));
        this.animatedObjects = [];

        this.currentArcObjects.forEach(obj => this.scene.remove(obj));
        this.currentArcObjects = [];

        // Reset highlighted country and flag overlay
        this.highlightedCountryId = null;
        if (this.globe && this.geoFeatures.length) {
            GlobeOverlay.resetOverlay(this.globe, this.geoFeatures);
        }
    },

    highlightCountryBorders(iso) {
        const country = countriesByISO[iso];
        if (!country || !country.numericId) return;

        this.highlightedCountryId = country.numericId;

        // Apply flag overlay on the highlighted country
        if (this.geoFeatures.length) {
            GlobeOverlay.applyFlagOverlay(
                this.globe, 
                this.geoFeatures, 
                country.numericId, 
                country.iso2
            );
        }

        // Create ripple at country center
        this.createRipple(country.coords[0], country.coords[1]);
    }
};

// ========================================
// UI MANAGER
// ========================================
const UI = {
    elements: {},

    init() {
        this.elements = {
            startBtn: document.getElementById('start-btn'),
            status: document.getElementById('status'),
            controlPanel: document.getElementById('control-panel'),
            infoCard: document.getElementById('info-card'),
            closeBtn: document.getElementById('close-btn'),
            retryBtn: document.getElementById('retry-btn'),
            loading: document.getElementById('loading'),
            countryFlag: document.getElementById('country-flag'),
            countryName: document.getElementById('country-name'),
            countryDesc: document.getElementById('country-desc'),
            budget: document.getElementById('budget'),
            visa: document.getElementById('visa'),
            language: document.getElementById('language'),
            localTime: document.getElementById('local-time'),
            currency: document.getElementById('currency'),
            transport: document.getElementById('transport')
        };

        this.elements.startBtn.addEventListener('click', () => this.handleStart());
        this.elements.closeBtn.addEventListener('click', () => this.hideInfoCard());
        this.elements.retryBtn.addEventListener('click', () => this.handleRetry());
        
        // Mobile Details Button
        const detailsBtn = document.getElementById('details-btn');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', () => {
                Panels.showLeftPanel();
            });
        }

        // Init panels module
        Panels.init();

        console.log('\ud83c\udfa8 UI ready');
    },

    updateStatus(status) {
        if (status === 'spinning') {
            this.elements.status.classList.add('spinning');
            this.elements.status.querySelector('.text').textContent = 'Построение маршрута...';
            this.elements.startBtn.disabled = true;
        } else {
            this.elements.status.classList.remove('spinning');
            this.elements.status.querySelector('.text').textContent = 'Готов';
            this.elements.startBtn.disabled = false;
        }
    },

    generateSmartSequence(length) {
        // 1. Pick a random starting country
        let current = countriesData[Math.floor(Math.random() * countriesData.length)];
        const sequence = [current];
        const visitedIso = new Set([current.iso]);

        for (let i = 0; i < length - 1; i++) {
            // 20% chance to take a "Long Haul" flight to a completely random country
            // This prevents getting stuck in one region (e.g. Europe)
            if (Math.random() < 0.25) {
                const unvisited = countriesData.filter(c => !visitedIso.has(c.iso));
                if (unvisited.length === 0) break;
                
                const randomNext = unvisited[Math.floor(Math.random() * unvisited.length)];
                sequence.push(randomNext);
                visitedIso.add(randomNext.iso);
                current = randomNext;
                continue;
            }

            // Otherwise, pick from nearest neighbors but with a wider pool
            const neighbors = countriesData
                .filter(c => !visitedIso.has(c.iso))
                .map(c => ({ country: c, dist: Geom.getDistance(current, c) }))
                .sort((a, b) => a.dist - b.dist);

            // Increased pool size from 5 to 15 to allow further jumps
            const poolSize = Math.min(neighbors.length, 15);
            if (poolSize === 0) break;

            const candidates = neighbors.slice(0, poolSize);
            const nextObj = candidates[Math.floor(Math.random() * candidates.length)];

            sequence.push(nextObj.country);
            visitedIso.add(nextObj.country.iso);
            current = nextObj.country;
        }
        return sequence;
    },

    async handleStart() {
        if (State.isSpinning) return;

        State.setSpinning(true);
        this.elements.controlPanel.classList.add('hidden');
        World.clearAnimations();

        World.globe.controls().autoRotate = false;
        World.globe.controls().enabled = false;

        const sequenceLength = Math.floor(Math.random() * 3) + 7;
        const sequence = this.generateSmartSequence(sequenceLength);

        // Fly to starting point
        World.flyToCountry(sequence[0].iso, 2.0, 1000);
        await new Promise(r => setTimeout(r, 1000));

        State.currentSequence = sequence;
        await this.executeRoulette(sequence);

        const winner = sequence[sequence.length - 1];
        State.setSelectedCountry(winner);

        World.flyToCountry(winner.iso, 1.2, 2000);

        setTimeout(() => {
            World.highlightCountryBorders(winner.iso);
            Confetti.fire();
            this.showInfoCard(winner);
            World.globe.controls().enabled = true;
            World.globe.controls().autoRotate = true;
        }, 2000);

        State.setSpinning(false);
    },

    async executeRoulette(sequence) {
        const baseDelay = 500;
        const maxDelay = 1800;

        for (let i = 0; i < sequence.length - 1; i++) {
            const current = sequence[i];
            const next = sequence[i + 1];

            const k = Math.log(maxDelay / baseDelay) / (sequence.length - 1);
            const stepDuration = baseDelay * Math.exp(k * i);

            World.highlightCountry(current.iso);
            World.flyToCountry(next.iso, 2.2, stepDuration * 0.9);
            World.drawFlightArc(current.iso, next.iso, stepDuration * 0.9);
            World.createDroplet(current.iso, next.iso, stepDuration * 0.85);

            await new Promise(resolve => setTimeout(resolve, stepDuration));
        }

        // Highlight final country
        World.highlightCountry(sequence[sequence.length - 1].iso, '#ef4444');
    },

    showInfoCard(country) {
        // Flag as image from flagcdn.com
        const iso2 = country.iso2 || country.iso.substring(0, 2).toLowerCase();
        this.elements.countryFlag.src = `https://flagcdn.com/w160/${iso2}.png`;
        this.elements.countryFlag.alt = country.name;
        this.elements.countryFlag.onerror = () => {
            this.elements.countryFlag.src = `https://flagcdn.com/w160/${iso2.toLowerCase()}.png`;
        };
        this.elements.countryName.textContent = country.name;
        this.elements.countryDesc.textContent = country.description || '';
        this.elements.budget.textContent = country.budget;
        this.elements.visa.textContent = country.visa_rf;
        this.elements.language.textContent = country.language || '--';
        this.elements.currency.textContent = country.currency || '--';
        this.elements.transport.textContent = country.transport;

        // Render city chips and set country for panels (auto-shows left panel)
        Panels.setCountry(country);

        this.elements.infoCard.classList.add('visible');
    },

    hideInfoCard() {
        this.elements.infoCard.classList.remove('visible');
        Panels.hideLeftPanel(false);
        this.elements.controlPanel.classList.remove('hidden');
        World.globe.controls().autoRotate = true;
        World.clearAnimations();
    },

    handleRetry() {
        this.hideInfoCard();
        setTimeout(() => this.handleStart(), 500);
    },

    hideLoading() {
        this.elements.loading.classList.add('hidden');
    },

    showError(message) {
        this.elements.loading.querySelector('p').textContent = message;
    }
};

// ========================================
// BOOTSTRAP
// ========================================
async function initApp() {
    console.log('🚀 Starting Travel Roulette...');

    try {
        if (document.readyState === 'loading') {
            await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
        }

        // Start particle background immediately
        Particles.init();

        UI.init();

        const container = document.getElementById('globe-container');
        const success = await World.init(container);

        if (!success) {
            UI.showError('Ошибка загрузки глобуса');
            return;
        }

        setTimeout(() => {
            UI.hideLoading();
        }, 1200);

        console.log('✅ Travel Roulette ready!');

    } catch (error) {
        console.error('❌ Critical error:', error);
        UI.showError('Критическая ошибка: ' + error.message);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}