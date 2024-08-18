import React from "react";

const footer = () => {
  return (
    <footer class="bg-black">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Abstract
            </h2>
            <a
              href="#"
              class="text-gray-500 dark:text-gray-400 font-medium hover:underline"
            >
              Branches
            </a>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Blog
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Help Center
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Release Notes
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Community
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Dribble
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  About Us
                </a>
              </li>
              <li class="mb-1">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
              <li class="mb-8">
                <a href="#" class="hover:underline">
                  Legal
                </a>
              </li>
              <li class="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <a href="#" class="">
                  Contact Us
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  info@abstract.com
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:mt-36 mx-auto">
            <img
              src="https://assets.website-files.com/5ff3926f03b3ba26b7d639cb/600211d2d5625c70ed5ba4e1_abstract-white-badge.png"
              className="w-8 mb-4"
              alt=""
            />
            <ul>
              <li>
                <a
                  href="#"
                  class="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                >
                  © Copyright 2022
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                >
                  Abstract Studio Design, Inc.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 dark:text-gray-400 font-medium hover:underline"
                >
                  All rights reserved
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
