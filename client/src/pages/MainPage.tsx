import { useEffect, useState } from 'react';
import type { Background, Category } from '../components/types';
import CardList from '../components/CardList';
import SearchInput from '../components/SearchInput';

const MainPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [backgrounds, setBackgrounds] = useState<Background[] | null>(null);
    const [filteredBackgrounds, setFilteredBackgrounds] = useState<
        Background[] | null
    >(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log(filteredBackgrounds);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const resCategories = await fetch(
                    'http://localhost:3000/categories'
                );
                const jsonCategories = await resCategories.json();
                setCategories(jsonCategories);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch data. Check your server connection.');
                setIsLoading(false);
            }
        };

        const fetchBackgrounds = async () => {
            try {
                const resBackgrounds = await fetch(
                    'http://localhost:3000/backgrounds'
                );
                const jsonBackgrounds = await resBackgrounds.json();
                setBackgrounds(jsonBackgrounds);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch data. Check your server connection.');
                setIsLoading(false);
            }
        };

        fetchCategories();
        fetchBackgrounds();
    }, []);

    const filterBackgrounds = (searchTerm: string) => {
        if (!backgrounds) return;

        setFilteredBackgrounds(backgrounds);
        const filtered = backgrounds.filter(
            (bg) =>
                bg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bg.tags.some((tag) =>
                    tag.toLowerCase().includes(searchTerm.toLowerCase())
                ) ||
                bg.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBackgrounds(filtered);
    };
    return (
        <>
            {error ? (
                <div className="text-red-500 text-center text-3xl  justify-center mt-10">
                    {error}
                </div>
            ) : isLoading ? (
                <div className="text-gray-500 text-center text-3xl  justify-center mt-10">
                    Loading...
                </div>
            ) : (
                <div className="mt-20 ml-20 mr-20">
                    <SearchInput onSearchChange={filterBackgrounds} />
                    {filteredBackgrounds &&
                        categories &&
                        categories.map((category) => (
                            <CardList
                                key={category.id}
                                title={category.name}
                                cards={filteredBackgrounds.filter(
                                    (bg) => bg.categoryId === category.id
                                )}
                            />
                        ))}
                </div>
            )}
        </>
    );
};

export default MainPage;
