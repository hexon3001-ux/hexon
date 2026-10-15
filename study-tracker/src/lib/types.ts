export type Status='Not started'|'Learning'|'Needs revision'|'Practised'|'Completed';
export type Task={id:string;title:string;subject:string;chapter:string;objective:string;description:string;duration:number;difficulty:string;type:string;reason:string;done:boolean;date:string;notes?:string};
export type MCQ={question:string;options:[string,string,string,string];correctIndex:number;explanation:string;wrongOptionExplanations?:string[];chapter:string;topic:string;difficulty:'Easy'|'Medium'|'Hard';sourceClassification:'AI-generated practice'};
