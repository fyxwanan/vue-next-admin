export interface KnowledgeItem {
    id: number;
    author: string;
    content: string;
    title: string;
    createTime?: string;
    labels: string[];
    readCount: number;
    likesCount: number;
    cover?: string;
}

export enum KnowledgeTypeEnum {
    RECOMMOND = "recommond",
    NEWEST = "Newest",
}