
export interface UserProfile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    screenName: string;
    address: AddressModel;
    securityQuestions: SecurityQuestionModel[]
}

interface AddressModel {
    address: string;
    country: string;
    zipcode: string;
    state: string;
    city: string;
}

interface SecurityQuestionModel {
    question: string;
    answer: string;
}