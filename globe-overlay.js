// ========================================
// GLOBE OVERLAY: Country flag texture on polygons
// ========================================

const GlobeOverlay = {
    flagTextureCache: {},
    loader: new THREE.TextureLoader(),

    /**
     * Load flag texture from flagcdn.com
     * Returns a THREE.MeshBasicMaterial with the flag as texture
     */
    getFlagMaterial(iso2) {
        if (!iso2) return null;

        const key = iso2.toLowerCase();
        if (this.flagTextureCache[key]) {
            return this.flagTextureCache[key];
        }

        const url = `https://flagcdn.com/w320/${key}.png`;
        
        try {
            const texture = this.loader.load(url, 
                // onLoad
                (tex) => {
                    tex.minFilter = THREE.LinearFilter;
                    tex.magFilter = THREE.LinearFilter;
                    tex.wrapS = THREE.ClampToEdgeWrapping;
                    tex.wrapT = THREE.ClampToEdgeWrapping;
                },
                undefined,
                // onError — use a cyan fallback
                () => {
                    console.warn(`Flag texture failed: ${url}`);
                }
            );

            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0.85,
                side: THREE.DoubleSide
            });

            this.flagTextureCache[key] = material;
            return material;
        } catch (e) {
            console.warn('Flag texture load error:', e);
            return null;
        }
    },

    /**
     * Get a glowing cyan material for highlighted (non-flag) countries
     */
    getHighlightMaterial() {
        return new THREE.MeshBasicMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.55,
            side: THREE.DoubleSide
        });
    },

    /**
     * Apply flag texture as polygon cap material for the highlighted country
     * Called from World.highlightCountryBorders()
     */
    applyFlagOverlay(globe, geoFeatures, highlightedId, iso2) {
        if (!globe || !geoFeatures.length) return;

        const flagMat = iso2 ? this.getFlagMaterial(iso2) : null;
        const highlightMat = this.getHighlightMaterial();
        const defaultColor = 'rgba(35, 45, 65, 0.75)';

        // Use polygonCapMaterial to set materials per polygon
        globe
            .polygonCapMaterial(d => {
                if (d.id === highlightedId) {
                    return flagMat || highlightMat;
                }
                return new THREE.MeshBasicMaterial({
                    color: new THREE.Color(0x232d41),
                    transparent: true,
                    opacity: 0.75,
                    side: THREE.DoubleSide
                });
            })
            .polygonAltitude(d => d.id === highlightedId ? 0.025 : 0.008)
            .polygonSideColor(d => d.id === highlightedId ? 'rgba(0, 212, 255, 0.4)' : 'rgba(20, 30, 50, 0.35)')
            .polygonStrokeColor(d => d.id === highlightedId ? 'rgba(0, 212, 255, 0.8)' : 'rgba(100, 150, 255, 0.15)')
            .polygonLabel(() => '')
            .polygonsData(geoFeatures);
    },

    /**
     * Reset all polygons to default appearance
     */
    resetOverlay(globe, geoFeatures) {
        if (!globe || !geoFeatures.length) return;

        globe
            .polygonCapMaterial(() => 
                new THREE.MeshBasicMaterial({
                    color: new THREE.Color(0x232d41),
                    transparent: true,
                    opacity: 0.75,
                    side: THREE.DoubleSide
                })
            )
            .polygonAltitude(0.008)
            .polygonSideColor(() => 'rgba(20, 30, 50, 0.35)')
            .polygonStrokeColor(() => 'rgba(100, 150, 255, 0.15)')
            .polygonLabel(() => '')
            .polygonsData(geoFeatures);
    }
};
