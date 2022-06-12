
export interface roomContexter {
    id: string
    base: string
    multiple: string
    owner: string
}

export var roomContext: roomContexter = null;