import { heroesHealth } from "../matchers";

test('heroesHealth', () => {
    const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
    ];

    const charactersSorted = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    expect(heroesHealth(characters)).toEqual(charactersSorted);
})