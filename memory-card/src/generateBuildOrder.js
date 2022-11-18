export default function generateBuildOrder(cardAmount) {
    let results = [];
    for (let i = 1; i <= cardAmount; i++) {
      results.push(`card${i}`);
    }
    return results;
};