import { EventTarget } from 'cc';

export enum eventName {
    enterRoom = "enter_room"
}

export const eventTarget = new EventTarget();