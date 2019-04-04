export class QuestionOwner {
    reputation: number;
    userType: string;
    acceptRate: number;
    profileImage: string;
    displayName: string;
    link: string;

    static Deserialize(jsonData) {
        const result = new QuestionOwner();
        result.reputation = jsonData.reputation;
        result.userType = jsonData.user_type;
        result.acceptRate = jsonData.accept_rate;
        result.profileImage = jsonData.profile_image;
        result.displayName = jsonData.display_name;
        result.link = jsonData.link;
        return result;
    }
}
