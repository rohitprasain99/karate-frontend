export type TItineraryList = {
    id: string;
    title: string;
    travelDuration: string;
    accomodation: string;
    meals: string;
    maxAltitute: string;
    desc: string;
};

export type IPackageTags = {
    id: string;
    title: string;
};

export type TBookingTableList = {
    id: string;
    packageName: string;
    duration: string;
    groupSize: number;
    packageSlug: string;
    arrivalData: string;
    departureDate: string;
    pickupDetails: string;
    touristName: string;
    packageImg: string;
    status: string;
};

export type TBookingDetailsDTO = {
    tourist: {
        id: string;
        name: string;
        country: string;
        status: string;
        contact: string;
        profileImg: string;
        email: string;
        tripDate: string;
        noOfTravellers: number;
        tourPrice: string;
        paidAmt: string;
        pickupDetails: string;
    };
    guide: {
        bookingId: string;
        id: string;
        arrival_date: string;
        departure_date: string;
        name: string;
        language: string;
        contact: string;
        perDayCharge: string;
        age: string;
        ratings: string;
        status: string;
        profileImg: string;
        email: string;
        packageId: string;
    };
    package: {
        bookingId: string;
        id: string;
        packageImg: string;
        name: string;
        food: string;
        tags: IPackageTags[];
        duration: string;
        difficulty: string;
        maxElevation: string;
        AccomodationType: string;
        shower: string;
        avgGroupSize: string;
        highlights: string;
        itinerary: TItineraryList[];
    };
};

export type TBookingGuideDetails = {
    id: string;
    slug: string;
    name: string;
    ratings: string;
    contact: string;
    email: string;
    langugage: string[];
    perDayCharge: string;
    age: string;
};

export type TBookingGuidesByPackageDateApi = {
    packageId: string;
    startDate: string;
    endDate: string;
};

export type TBookingGuideChangeCardDetails = {
    id: string;
    name: string;
    guideImg: string;
    coverImg: string;
    experience: string;
    perDayCharge: string;
    ISACTIVE: false;
};

export type TBookingGuidesByPackageDate = TBookingGuideChangeCardDetails[];
