export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Client {
    id?: number;
    name?: string;
    country?: Country;
    identity?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}