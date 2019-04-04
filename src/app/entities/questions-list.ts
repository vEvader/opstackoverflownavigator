import { Question } from './question';

export class QuestionList {
    items: Question[];
    hasMore: boolean;
    quotaMax: number;
    quotaRemainig: number;

    static Deserialize(jsonData) {
        const result = new QuestionList();
        result.items = jsonData.items.map((item) => Question.Deserialize(item));
        result.hasMore = jsonData.has_more;
        result.quotaMax = jsonData.quota_max;
        result.quotaRemainig = jsonData.quota_remainig;
        return result;
    }
}
