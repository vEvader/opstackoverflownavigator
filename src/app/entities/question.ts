import {QuestionOwner} from './question-owner';

export class Question {
    tasg: string[];
    owner: QuestionOwner;
    isAnswered: boolean;
    viewCount: number;
    acceptedAnswerId: number;
    answerCount: number;
    score: number;
    lastActivityDate: number;
    creationDate: number;
    lastEditDate: number;
    questionId: number;
    link: string;
    title: string;

    static Deserialize(jsonData) {
        const resultItem = new Question();
        resultItem.owner = QuestionOwner.Deserialize(jsonData.owner);
        resultItem.isAnswered = jsonData.is_answered;
        resultItem.viewCount = jsonData.view_count;
        resultItem.acceptedAnswerId = jsonData.accepted_answer_id;
        resultItem.answerCount = jsonData.answer_count;
        resultItem.score = jsonData.score;
        resultItem.lastActivityDate = jsonData.last_activity_date;
        resultItem.creationDate = jsonData.creation_date;
        resultItem.lastEditDate = jsonData.last_edit_date;
        resultItem.questionId = jsonData.question_id;
        resultItem.link = jsonData.link;
        resultItem.title = jsonData.title;
        return resultItem;
    }
}