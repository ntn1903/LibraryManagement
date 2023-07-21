export interface Order {
    id: number;
    userId: string;
    bookId: string;
    title: string;
    dateOfRent?: string;
    dateOfReturn?: string;
    isReturn?: boolean;
}