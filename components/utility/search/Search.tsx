import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Search.module.css';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const btnClass = styles.search__btn + " btn-primary";

  
  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className={btnClass}>
          Google Search
        </button>
        <button
          onClick={() => alert('FEATURE COMING SOON!')}
          className={btnClass} 
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
