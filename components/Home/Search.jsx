"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Search() {
    let router = useRouter()
    let [query, setQuery] = useState()
    let handleSearch = () => {
        router.push(`/search?query=${query}`)
    }
    return (
        <div className=" ">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            handleSearch()
                        }
                    }}
                    type="search"
                    className="block w-full  ps-10 text-sm text-gray-900 border border-gray rounded-full "
                    placeholder="Type and enter..."
                    required
                />
            </div>
        </div>
    )
}

export default Search