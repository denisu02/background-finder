import { useEffect, useState } from 'react';
import type { Background, Category } from '../components/types';

const MainPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [backgrounds, setBackgrounds] = useState<Background[] | null>(null);

    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [backgroundsLoading, setBackgroundsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const resCategories = await fetch('http://localhost:3000/categories');
                const jsonCategories = await resCategories.json();
                setCategories(jsonCategories);
                setCategoriesLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setCategoriesLoading(false);
            }
        };

        const fetchBackgrounds = async () => {
            try {
                const resBackgrounds = await fetch('http://localhost:3000/backgrounds');
                const jsonBackgrounds = await resBackgrounds.json();
                setBackgrounds(jsonBackgrounds);
                setBackgroundsLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setBackgroundsLoading(false);
            }
        };

        fetchCategories();
        fetchBackgrounds();
    }, []);

    console.log(categories, backgrounds, error);

    return <div>{!categoriesLoading && !backgroundsLoading && !error && <h1>Fetching is completed</h1>}</div>;
};

export default MainPage;
