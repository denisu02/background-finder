import { useState } from 'react';
import './SearchInput.css';

type SearchInputProps = {
    onSearchChange: (searchTerm: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <div className="input-field-container">
            <input
                type="text"
                placeholder="Search backgrounds..."
                className="input-field"
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
