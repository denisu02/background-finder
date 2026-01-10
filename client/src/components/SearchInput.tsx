import { useState } from 'react';

type SearchInputProps = {
    onSearchChange: (searchTerm: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <div className="text-center">
            <input
                type="text"
                placeholder="Search backgrounds..."
                className="p-2 border border-gray-300 text-gray-500 rounded"
                onChange={(event) => {
                    onSearchChange(event.target.value);
                    setSearchTerm(event.target.value);
                }}
                value={searchTerm}
            />
        </div>
    );
};

export default SearchInput;
