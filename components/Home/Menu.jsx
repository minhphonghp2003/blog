"use client"
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Search from './Search'

function MenuNavBar() {
  
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ">
                    <img src='hamburger.svg' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-[90vw] origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm"
                            >
                                Topics
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm"
                            >
                                Reading Lists
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm"
                            >
                                Write a post
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm"
                            >
                                Contact
                            </a>
                        </Menu.Item>
                        <Menu.Item >
                            <Search />
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MenuNavBar