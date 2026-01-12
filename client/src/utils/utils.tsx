import type { Background, Category } from '../components/types';

export const getCategoryNameById = (
    id: number,
    categories: Category[]
): string => {
    const category = categories?.find((cat) => cat.id === id);
    return category ? category.name : 'Unknown category';
};

export const filterCriteria = (
    bg: Background,
    searchTerm: string,
    categories: Category[]
) => {
    return (
        bg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bg.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        bg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getCategoryNameById(bg.categoryId, categories)
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );
};
