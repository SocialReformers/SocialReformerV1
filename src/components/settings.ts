export interface Settings {
    geoPredictionServerUrl?: string;
    geoLatLangServiceUrl?: string;
    geoLocDetailServerUrl?: string;
    geoCountryRestriction?: any;
    geoTypes?: any;
    geoLocation?: any;
    geoRadius?: number;
    keyword?:String;
    name?:String;
    types?:String;
    libraries?:String;
    cid?:String;
    placeId?:String;
    reference?:String;
    serverResponseListHierarchy?: any;
    serverResponseatLangHierarchy?: any;
    serverResponseDetailHierarchy?: any;
    resOnSearchButtonClickOnly?: boolean;
    useGoogleGeoApi?: boolean;
    inputPlaceholderText?: string;
    inputString?: string;
    showSearchButton?: boolean;
    showRecentSearch?: boolean;
    showCurrentLocation?: boolean;
    recentStorageName?: string;
    noOfRecentSearchSave?: number;
    currentLocIconUrl?: string;
    searchIconUrl?: string;
    locationIconUrl?: string;
  }