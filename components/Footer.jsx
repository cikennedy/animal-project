import Link from 'next/link';
// import { useState } from 'react';
import React from 'react';


export const Footer = () => {
    return (
        <>
        <div class="pt-12">
                <footer id="footer" class="relative z-50 dark:bg-gray-900">
                    <div tabindex="0" aria-label="footer" class="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16">
                        <div class="mx-auto container px-4 xl:px-12 2xl:px-4">
                            <div class="lg:flex">
                                <div class="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                    <div class="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a class="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Home</a></li>
                                            <li class="mt-6"><a class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Search</a></li>
                                            <li class="mt-6"><a class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">About</a></li>
                                            <li class="mt-6"><a class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Contact</a></li>
                                            <li class="mt-6"><a href="javascript:void(0)" class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Log In</a></li>
                                        </ul>
                                    </div>
                                    <div class="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Dashboard</a></li>
                                            <li class="mt-6"><a class="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-full lg:w-1/2 flex">
                                    <div class="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a href="javascript:void(0)" class="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Privacy policy</a></li>
                                            <li class="mt-6"><a class="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Terms of service</a></li>
                                        </ul>
                                    </div>
                                    <div class="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                        <div class="flex items-center mb-6">
                                            <a  aria-label="Github" href="javascript:void(0)">
                                                <div class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                                                    <svg class="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-16 flex flex-col justify-center items-center">
                        <a class="focus:outline-none" tabindex="0" role="link" aria-label="home link" href="javascript:void(0)">
                        </a>
                        <p tabindex="0" class="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2021 Find My Pet</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

