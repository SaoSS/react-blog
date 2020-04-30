export const ADD_BOOk = 'ADD_BOOK';
export type ADD_BOOK = 'ADD_BOOK';

export const REMOVE_BOOk ='REMOVE_BOOK';
export type REMOVE_BOOk ='REMOVE_BOOK';

export interface ADDBOOK {
    type: ADD_BOOK;
    name:string;
}

export interface REMOVEBOOK {
    type:REMOVE_BOOk;
    name:string;
}

export type BookType = ADDBOOK | REMOVEBOOK;

export function addBook(text:string){
    return {
        type: ADD_BOOk,
        name:text
    }
}

export const removeBook = (text:string):REMOVEBOOK =>({
    type:REMOVE_BOOk,
    name:text
})

