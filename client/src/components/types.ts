export type Category = {
    id: number;
    name: string;
};

export type Background = {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    image: string;
    price?: number;
    tags: string[];
};
