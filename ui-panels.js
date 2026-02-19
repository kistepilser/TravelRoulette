// ========================================
// UI PANELS: Left Panel, City Modal, Photos, Flights
// ========================================

const Panels = {
    currentCountry: null,
    clockInterval: null,
    unsplashAccessKey: 'vwbBBIjOw9VBsbU-wSHGw2GECrtVObvL5ED8aVeStig', // Unsplash Access Key


    init() {
        // City modal close
        const modalClose = document.getElementById('city-modal-close');
        const cityModal = document.getElementById('city-modal');
        if (modalClose) modalClose.addEventListener('click', () => this.closeCityModal());
        if (cityModal) cityModal.addEventListener('click', (e) => { if (e.target === cityModal) this.closeCityModal(); });

        // Left panel close
        const leftPanelClose = document.getElementById('left-panel-close');
        if (leftPanelClose) leftPanelClose.addEventListener('click', () => this.hideLeftPanel());

        // Lightbox init
        this.initLightbox();
    },

    // ======== LIGHTBOX ========
    initLightbox() {
        if (document.getElementById('lightbox-overlay')) return;
        
        const overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <div class="lightbox-content">
                <img id="lightbox-img" src="" alt="Full view">
                <div class="lightbox-caption" id="lightbox-caption"></div>
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        document.body.appendChild(overlay);

        const closeBtn = overlay.querySelector('.lightbox-close');
        
        const close = () => {
            overlay.classList.remove('visible');
            setTimeout(() => { overlay.style.display = 'none'; }, 300);
        };

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target === closeBtn) close();
        });
    },

    openLightbox(imageUrl, caption) {
        const overlay = document.getElementById('lightbox-overlay');
        const img = document.getElementById('lightbox-img');
        const cap = document.getElementById('lightbox-caption');
        
        if (!overlay || !img) return;

        img.src = imageUrl;
        cap.textContent = caption || '';
        
        overlay.style.display = 'flex';
        // Force reflow
        void overlay.offsetWidth; 
        overlay.classList.add('visible');
    },

    setCountry(country) {
        this.currentCountry = country;
        this.startClock(country.timezone);
        this.renderCityChips(country);
        this.renderPhotoGallery(country);
        this.renderFlights(country);
        
        // On mobile, do NOT auto-show left panel
        if (window.innerWidth > 768) {
            this.showLeftPanel();
        }
    },

    showLeftPanel() {
        const panel = document.getElementById('left-panel');
        if (panel) panel.classList.add('visible');

        // On mobile, hide the bottom info-card when opening the full panel
        if (window.innerWidth <= 768) {
            const infoCard = document.getElementById('info-card');
            if (infoCard) infoCard.classList.remove('visible');
        }
    },

    hideLeftPanel() {
        const panel = document.getElementById('left-panel');
        if (panel) panel.classList.remove('visible');

        // On mobile, show the bottom info-card back when closing the full panel
        if (window.innerWidth <= 768 && this.currentCountry) {
            const infoCard = document.getElementById('info-card');
            if (infoCard) infoCard.classList.add('visible');
        }
    },

    // ======== CITY CHIPS ========
    // ======== CITY CHIPS ========
    renderCityChips(country) {
        const container = document.getElementById('city-chips');
        if (!container || !country.cities) return;
        container.innerHTML = '';
        
        country.cities.forEach(async (city) => {
            const chip = document.createElement('button');
            chip.className = 'city-chip';
            
            // Create inner structure for text
            chip.innerHTML = `
               <div class="city-chip-bg"></div>
               <span class="city-chip-text">${city.name}</span>
            `;

            chip.addEventListener('click', () => this.openCityModal(city, country));
            container.appendChild(chip);

            // Fetch and apply background image
            try {
                const query = city.photo || city.name;
                const imageUrl = await this.fetchUnsplashImage(query, 'landscape');
                if (imageUrl) {
                    const bgEntry = chip.querySelector('.city-chip-bg');
                    if(bgEntry) {
                        bgEntry.style.backgroundImage = `url('${imageUrl}')`;
                        bgEntry.style.opacity = '1';
                    }
                }
            } catch (err) {
                console.warn('Failed to load chip image', err);
            }
        });
    },

    // ======== PHOTO GALLERY (in left panel) ========
   async renderPhotoGallery(country) {
        const container = document.getElementById('left-gallery');
        if (!container) return;

        const photos = country.photos || [];
        if (photos.length === 0) {
            container.innerHTML = '<p class="no-data">Нет фото для этой страны</p>';
            return;
        }

        container.innerHTML = '';
        
        // Use a for...of loop to handle async operations sequentially or Promise.all for parallel
        // Here we'll just fire them off and let them load as they come
        photos.forEach(async (photo, i) => {
            const card = document.createElement('div');
            card.className = 'left-gallery-card';
            
            // Placeholder initially
            card.innerHTML = `
                <div class="gallery-loader" style="width:100%;height:100%;background:#eee;animation:pulse 1.5s infinite;"></div>
                <span>${photo.title}</span>
            `;
            container.appendChild(card);

            try {
                const query = photo.query || photo.title; // Use English query if available
                const imageUrl = await this.fetchUnsplashImage(query, 'landscape');
                
                if (imageUrl) {
                     card.innerHTML = `
                        <img src="${imageUrl}" alt="${photo.title}" loading="lazy" 
                             style="opacity:0;transition:opacity 0.5s; cursor: zoom-in;"
                             onload="this.style.opacity='1'">
                        <span>${photo.title}</span>
                    `;
                    // Add Lightbox click handler
                    card.querySelector('img').onclick = () => this.openLightbox(imageUrl, photo.title);
                } else {
                     // Fallback to placeholder if API fails/no image
                    card.querySelector('.gallery-loader').style.display = 'none';
                    card.innerHTML = `
                        <div class="gallery-placeholder">📷</div>
                        <span>${photo.title}</span>
                    `;
                }
            } catch (err) {
                console.error('Error loading gallery image:', err);
                card.innerHTML = `
                    <div class="gallery-placeholder">⚠️</div>
                    <span>${photo.title}</span>
                `;
            }
        });
    },

    async fetchUnsplashImage(query, orientation = 'landscape') {
        try {
            // Add a random sig to prevent aggressive caching if any
            const randomSig = Math.round(Math.random() * 10000); 
            const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}&client_id=${this.unsplashAccessKey}&sig=${randomSig}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Unsplash API Error: ${response.status}`);
            const data = await response.json();
            return data.urls.regular; 
        } catch (error) {
            console.warn('Unsplash fetch failed, falling back to Picsum:', error);
            // Fallback to Picsum if Unsplash fails (limit reached, etc.)
            const seed = query.replace(/\s+/g, '-').toLowerCase() + Math.random(); // Randomize fallback too
            return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/300`;
        }
    },

    // ======== FLIGHTS (in left panel) ========
    renderFlights(country) {
        const container = document.getElementById('left-flights');
        if (!container) return;

        container.innerHTML = '<div class="flights-loading"><div class="spinner"></div><p>Поиск рейсов...</p></div>';

        setTimeout(() => {
            const flights = this.generateFlights(country);
            container.innerHTML = flights.map(f => `
                <div class="flight-card">
                    <div class="flight-route">
                        <span class="flight-city">Москва</span>
                        <span class="flight-arrow">→</span>
                        <span class="flight-city">${f.destination}</span>
                    </div>
                    <div class="flight-details">
                        <span class="flight-airline">${f.airline}</span>
                        <span class="flight-date">${f.date}</span>
                    </div>
                    <div class="flight-price">${f.price}</div>
                </div>
            `).join('');
        }, 600 + Math.random() * 600); // Randomize loading time
    },

    generateFlights(country) {
        const airlines = [
            'Аэрофлот', 'S7 Airlines', 'Turkish Airlines', 'Emirates', 'Qatar Airways', 
            'Победа', 'Etihad', 'FlyDubai', 'Uzbekistan Airways', 'Air Serbia'
        ];
        const budgetStr = country.budget || '200 000 ₽';
        const budgetNum = parseInt(budgetStr.replace(/\D/g, '')) || 200000;
        
        // Dynamic base price based on "budget" but with more variance
        const basePrice = Math.round(budgetNum * 0.35);

        const now = new Date();
        // Generate 3 to 5 flights randomly
        const count = 3 + Math.floor(Math.random() * 3); 
        
        return Array.from({length: count}, (_, i) => {
            const date = new Date(now);
            date.setDate(date.getDate() + 7 + Math.floor(Math.random() * 90)); // Next 3 months
            
            // Randomize price factor (0.6x to 1.5x)
            const variation = 0.6 + Math.random() * 0.9;
            const price = Math.round(basePrice * variation / 100) * 100;
            
            return {
                destination: country.cities?.[Math.floor(Math.random() * country.cities.length)]?.name || country.name,
                airline: airlines[Math.floor(Math.random() * airlines.length)],
                date: date.toLocaleDateString('ru-RU', {day:'numeric',month:'short'}),
                price: price.toLocaleString('ru-RU') + ' ₽'
            };
        }).sort((a,b) => parseInt(a.price.replace(/\D/g,'')) - parseInt(b.price.replace(/\D/g,'')));
    },

    // ======== CITY MODAL ========
    async openCityModal(city, country) {
        const modal = document.getElementById('city-modal');
        document.getElementById('city-name').textContent = city.name;
        document.getElementById('city-description').textContent = city.description || '';

        // Photo — use Unsplash
        const photoEl = document.getElementById('city-photo');
        const placeholder = document.getElementById('city-photo-placeholder');
        
        // Reset state
        photoEl.style.display = 'none';
        photoEl.onclick = null; // Clear previous listeners
        photoEl.style.cursor = 'default';

        if (placeholder) {
             placeholder.style.display = 'flex';
             placeholder.textContent = 'Загрузка...';
        }

        const query = city.photo || city.name;
        
        try {
            // Race between fetch and a 5s timeout
            const fetchPromise = this.fetchUnsplashImage(query, 'landscape');
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000));
            
            const imageUrl = await Promise.race([fetchPromise, timeoutPromise]);

            if (imageUrl) {
                // Set up handlers BEFORE setting src
                const cleanup = () => {
                     // Clear timeout if loaded
                     if (loadTimeout) clearTimeout(loadTimeout);
                };

                photoEl.onload = () => {
                   cleanup();
                   photoEl.style.display = 'block';
                   if (placeholder) placeholder.style.display = 'none';
                };
                
                photoEl.onerror = () => {
                    cleanup();
                    console.error("Image failed to load:", imageUrl);
                    photoEl.style.display = 'none';
                    if (placeholder) {
                        placeholder.style.display = 'flex';
                        placeholder.textContent = `📷 ${city.name}`; 
                    }
                };

                // Safety timeout: if image loads too slowly (3s), just show it (might be partial) or fail
                const loadTimeout = setTimeout(() => {
                    console.warn("Image load timed out, forcing display");
                    photoEl.style.display = 'block';
                    if (placeholder) placeholder.style.display = 'none';
                }, 3000);

                photoEl.src = imageUrl;
                photoEl.alt = city.name;
                
                // Enable lightbox
                photoEl.style.cursor = 'zoom-in';
                photoEl.onclick = () => this.openLightbox(imageUrl, city.name);

                photoEl.src = imageUrl;
                photoEl.alt = city.name;
                
                // Enable lightbox
                photoEl.style.cursor = 'zoom-in';
                photoEl.onclick = () => this.openLightbox(imageUrl, city.name);

            } else {
                 throw new Error("No image returned");
            }
        } catch (err) {
             console.error("Failed to load city image", err);
             if (placeholder) {
                placeholder.style.display = 'flex';
                placeholder.textContent = `📷 ${city.name}`;
            }
        }


        // Time
        this.updateCityTime(country.timezone);
        document.getElementById('city-timezone').textContent = country.timezone || '--';

        // Weather chart
        this.renderWeatherChart(city.weather);

        modal.classList.add('visible');
    },

    closeCityModal() {
        document.getElementById('city-modal').classList.remove('visible');
    },

    updateCityTime(timezone) {
        const el = document.getElementById('city-time');
        if (!el || !timezone) return;
        try {
            el.textContent = new Date().toLocaleTimeString('ru-RU', {
                timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        } catch { el.textContent = '--'; }
    },

    startClock(timezone) {
        if (this.clockInterval) clearInterval(this.clockInterval);
        const localTimeEl = document.getElementById('local-time');
        const updateTime = () => {
            try {
                if (localTimeEl) {
                    localTimeEl.textContent = new Date().toLocaleTimeString('ru-RU', {
                        timeZone: timezone, hour: '2-digit', minute: '2-digit'
                    });
                }
            } catch { if (localTimeEl) localTimeEl.textContent = '--'; }
        };
        updateTime();
        this.clockInterval = setInterval(updateTime, 30000);
    },

    // ======== WEATHER CHART ========
    renderWeatherChart(weatherData) {
        const container = document.getElementById('weather-chart');
        if (!container || !weatherData || weatherData.length < 12) return;

        const months = ['Я','Ф','М','А','М','И','И','А','С','О','Н','Д'];
        const min = Math.min(...weatherData);
        const max = Math.max(...weatherData);
        const range = max - min || 1;

        container.innerHTML = weatherData.map((temp, i) => {
            const height = 20 + ((temp - min) / range) * 60;
            const hue = temp < 0 ? 210 : temp < 15 ? 200 : temp < 25 ? 45 : 15;
            return `<div class="weather-bar-col">
                <span class="weather-temp">${temp}°</span>
                <div class="weather-bar" style="height:${height}%;background:hsl(${hue},80%,55%);animation-delay:${i*0.05}s"></div>
                <span class="weather-month">${months[i]}</span>
            </div>`;
        }).join('');
    }
};
