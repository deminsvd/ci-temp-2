export function heroesHealth(healthData) {
    healthData.sort((a, b) => b.health - a.health);
    return healthData;
}