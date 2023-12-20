interface IExperience {
    packageSlug: string;
    primaryImg: string;
    elevation: string;
    duration: string;
    difficulty: string;
    packageName: string;
}
export const setRecentExperience = (experience: IExperience) => {
    const previousExperience: any = getRecentExperiences() || [];

    let isAlready = previousExperience.filter(
        (prev: IExperience) => prev.packageName === experience.packageName,
    );

    if (previousExperience?.length < 3) {
        if (!isAlready.length) {
            previousExperience.unshift(experience);
        }
    } else {
        if (!isAlready.length) {
            previousExperience.pop();
            previousExperience.unshift(experience);
        }
    }

    localStorage.setItem('tn-recents', JSON.stringify(previousExperience));
};

export const getRecentExperiences = () => {
    const tnRecents: any = localStorage.getItem('tn-recents');
    return JSON.parse(tnRecents);
};
