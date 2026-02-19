// ========================================
// COUNTRIES DATA — COMBINED INDEX
// Loads all country files and merges into one array
// ========================================

// This file is loaded AFTER all country data files in index.html
// It combines all partial arrays into one global `countriesData`

const countriesData = [
    ...countries_1_6,
    ...countries_7_13,
    ...countries_14_19,
    ...countries_20_25,
    ...countries_26_29,
    ...countries_30_35,
    ...countries_36_39,
    ...countries_40_45,
    ...countries_46_51,
    ...countries_52_58,
    ...countries_59_64,
    ...countries_65_80,
    ...countries_81_100,
    ...countries_101_120,
    ...countries_121_140,
    ...countries_141_160,
    ...countries_161_190
];

// Build lookup maps for quick access
const countriesByISO = {};
const countriesByNumericId = {};
countriesData.forEach(c => {
    countriesByISO[c.iso] = c;
    countriesByNumericId[c.numericId] = c;
});

console.log(`[Data] Loaded ${countriesData.length} countries with extended info`);
