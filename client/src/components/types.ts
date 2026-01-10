export type Category = {
    id: number;
    name: string;
};

export type Background = {
    id: number;
    categoryId: number;
    image: string;
    price?: number;
};
