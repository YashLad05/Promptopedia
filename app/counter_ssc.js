import React from 'react';
import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function counter_ssc() {
  return (
    <>
    <nav>
        <Logo />
        <SearchBar />
    </nav>

    <main>
        <p>This component will be rendered on Server Side.</p>
    </main>
    </>
  )
}
