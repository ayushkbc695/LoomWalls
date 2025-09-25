import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            setQuery(''); // Clear input after search
        }
    };

    return (
        <form onSubmit={handleSubmit} className="h-[50px] w-[60%] rounded-xl bg-zinc-200 flex items-center justify-between">
            <div className='inline-flex items-center justify-center px-5 mx-3 bg-inherit h-full w-full rounded-xl '>
                <input type="text" placeholder='Search for free Photos...' value={query} onChange={(e) => setQuery(e.target.value)} className='flex-1 outline-none bg-inherit h-full text-[18px]' />
                <button type="submit">
                    <SearchIcon className="w-5 cursor-pointer hover:text-gray-600 transition duration-300" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;