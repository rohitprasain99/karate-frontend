// import moment from 'moment';

export const tripDto = {
    create: (data: any) => {
        return {
            travel_area: data?.tripTitle,
            start_date: data?.tripDuration[0],
            end_date: data?.tripDuration[1],
            is_flexible: data?.isFlexible,
            description: data?.tripDescription,
            tag: data?.tripTag,
            image_url: data?.tripImage,

        };
    },

    receive: (data: any) => {
        return {
            id: data?.id || '',
            tripTitle: data?.travel_area || '',
            tripImage: data?.image_url || '',
            tripDescription: data?.description || '',
            tripTag: data?.tag || '',
            isFlexible:data?.is_flexible || '',
            // start_date: moment(data?.start_date).format('YYYY-MM-DD'),
            // end_date: moment(data?.end_date).format('YYYY-MM-DD'),
        };
    },

    update: (data: any) => {
        return {
            id: data?.id || '',
            tripTitle: data?.travel_area || '',
            tripImage: data?.image_url || '',
            tripDescription: data?.description || '',
            tripTag: data?.tag || '',
            start_date: data?.start_date,
            end_date: data?.end_date,
        };
    },

    receiveActiveTrips: (data: any) => {
        const res = data?.map((val: any) => {
            return {
                id: val?.id || '',
                tripTitle: val?.travel_area || '',
                tripImage: val?.image_url || '',
                tripDescription: val?.description || '',
                tripParticipation: val?.total_participants || '0',
                tripTag: val?.tag || '',
                // start_date: moment(val?.start_date).format('YYYY-MM-DD'),
                // end_date: moment(val?.end_date).format('YYYY-MM-DD'),
            };
        });
        return res;
    },

    receiveFilterTrips: (data: any) => {
        const res = data?.map((val: any) => {
            return {
                id: val?.id || '',
                tripTitle: val?.travel_area || '',
                tripImage: val?.image_url || '',
                tripDescription: val?.description || '',
                tripTag: val?.tag || '',
                tripParticipation: val?.total_participants || '',
                // start_date: moment(val?.start_date).format('YYYY-MM-DD'),
                // end_date: moment(val?.end_date).format('YYYY-MM-DD'),
            };
        });
        return res;
    },
};
