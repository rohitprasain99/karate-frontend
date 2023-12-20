export const bookingDetailsMock = {
    id: '5747c4f3-98cd-4557-adcd-97736331d2db',
    traveller_type: 'SOLO',
    no_of_children: 0,
    no_of_adults: 1,
    travel_type: 'EXACT',
    arrival_date: '2023-01-01T18:15:00.000Z',
    departure_date: '2023-01-09T18:15:00.000Z',
    pickup_detail: 'pickupdetails',
    status: 'CANCELLED',
    guide_id: 'ddc554fa-c9ce-4614-af74-fd6e11850565',
    tourist_id: '403f0973-fcb8-48eb-a720-1fe224a1ce19',
    package_id: 'ee03c451-87fc-46da-99d8-ac8758439e23',
    guide: {
        id: 'ddc554fa-c9ce-4614-af74-fd6e11850565',
        username: 'rohit prasain guide13',
        email: '984956181833',
        phone_number: '984956181833',
        kyc_status: 'ACTIVE',
        is_deleted: false,
        nationality: 'nepali',
        provider_id: '',
        refresh_token: '',
        role: 'guide',
    },
    tourist: {
        id: '403f0973-fcb8-48eb-a720-1fe224a1ce19',
        username: 'sagar',
        email: 'sagar@ktmbees.com',
        phone_number: 'sagar@ktmbees.com',
        kyc_status: 'INACTIVE',
        is_deleted: false,
        nationality: 'nepali',
        provider_id: '',
        refresh_token: '',
        role: 'tourist',
    },
    package: {
        id: 'ee03c451-87fc-46da-99d8-ac8758439e23',
        package_name: 'Mardi Himal',
        package_slug: 'mardi-himal',
        package_type: 'trekking',
        duration: '4 hours',
        difficulty: 'low',
        elevation: 2000,
        food: 'good food',
        accommodation_type: 'hotel',
        shower: 'hotShower',
        group_size: 12,
        best_time_visit: 'nov-dec',
        highlights:
            '<ol><li>qwqwe</li><li>asdasd</li><li>asd</li><li>asd</li></ol><p>asd</p><p><br></p>',
        description: 'asda',
        disclaimer: 'disclaimer',
        package_primary_imgUrl:
            'https://damipasal.s3.ap-south-1.amazonaws.com/1/LEGALDOCUMENTS/1bfb7ad60ccdce4c6cbb892e02037768.svg%2Bxml',
        is_active: true,
        itinerary: [
            {
                id: '443fd695-0860-45f9-888d-7ffe5c367fe2',
                itinerary_title: 'tw2',
                itinerary_duration: 'fgfhj',
                itinerary_accommodation: 'homeStay',
                itinerary_meals: 'dhindo',
                itinerary_altitude: 123123,
                itinerary_description: 'iti desc 2',
            },
            {
                id: 'acb936f7-cdad-4a01-9c90-a75ae6685f26',
                itinerary_title: 'it1',
                itinerary_duration: 't1dddd',
                itinerary_accommodation: 'hotel',
                itinerary_meals: 't1be',
                itinerary_altitude: 21345,
                itinerary_description: 'it1 desc',
            },
        ],
        packageSpeciality: [
            {
                id: '4a94bf85-216e-4d85-9d12-b1b4f64923a4',
                title: 'sightSeeing',
            },
        ],
        packageSecondaryImage: [
            {
                id: 'eadb8f33-921f-4e7d-9670-5bda6d196926',
                package_secondary_imgUrl:
                    'https://damipasal.s3.ap-south-1.amazonaws.com/1/LEGALDOCUMENTS/82488d3bb1b015bf079aafdfb45aed0a.jpeg',
            },
            {
                id: '9c1726d0-7ef9-4132-b973-44b453072231',
                package_secondary_imgUrl:
                    'https://damipasal.s3.ap-south-1.amazonaws.com/1/LEGALDOCUMENTS/cc0ae2dfe5e5054ac08e5c25696dc43f.svg%2Bxml',
            },
            {
                id: '3895bc67-2356-4981-85a7-1158d39cfe4c',
                package_secondary_imgUrl:
                    'https://damipasal.s3.ap-south-1.amazonaws.com/1/LEGALDOCUMENTS/363230817b726eefc70f4f469bea1ed8.svg%2Bxml',
            },
        ],
    },
};