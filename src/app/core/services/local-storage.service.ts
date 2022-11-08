import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorage {
    constructor() { }

    getItem(key: string): any {
        let item: string = localStorage.getItem(key) || '';
        let json = <Object>JSON.parse(item || '{}');

        return item === '' ? null : json;
    }

    setItem(key: string, data: any): void {
        const stringData: string = JSON.stringify(data);
        localStorage.setItem(key, stringData);
    }

    clearItems(): void {
        localStorage.clear();
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}