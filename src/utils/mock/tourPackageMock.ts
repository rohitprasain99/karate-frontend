const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    'https://www.thirdrockadventures.com/assets-back/images/trip/mardi-himal-trek.jpggTW.jpg',
    'https://www.nepaltrekkinginfo.com/wp-content/uploads/2018/07/annapurna-mardi-himal-trek.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeqNpuP2zfV5-FJ8seBi0L2npZ316PeD2GQ&usqp=CAU',
];
const tourNames = [
    'Mardi Himal Base Camp Trekking',
    'Annapurna Base Camp Trekking',
    'Mount Everest Base Camp Trekking',
];
const difficulty = ['easy', 'medium', 'high'];

const tourPackageMock = (size: number) => {
    const mockData = Array.from(Array(size).keys()).map(() => {
        return {
            id: Math.floor(Math.random() * (500 - 1 + 1) + 1),
            duration: `${Math.floor(Math.random() * (10 - 2 + 1) + 2)} days`,
            primaryImg: images[Math.floor(Math.random() * (images.length - 1 - 0 + 1) + 0)],
            packageName: tourNames[Math.floor(Math.random() * (tourNames.length - 1 - 1 + 1) + 1)],
            packageSlug: tourNames[Math.floor(Math.random() * (tourNames.length - 1 - 1 + 1) + 1)].split(' ').join('-'),

            difficulty: difficulty[Math.floor(Math.random() * (difficulty.length - 1 - 1 + 1) + 1)],
            elevation: Math.floor(Math.random() * (10000 - 2000 + 1) + 2000),
            groupSize: `${Math.floor(Math.random() * (images.length - 1 - 1 + 1) + 1)} - 5`,
        };
    });
    return mockData;
};

export default tourPackageMock;