import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo.png'
export default function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="relative flex justify-center items-center">
                <div class="absolute left-0">
                    <Link to="/Portfolio" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-12 w-auto" src={logo} alt=""/>
                    </Link>
                </div>
                <div className="flex space-x-5">
                    <a href="https://www.linkedin.com/in/son-vu-920995239/" target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex size-9" viewBox="0 0 100 100" id="Linkedin"><path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/sonnvu_/" target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex size-9" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" id="instagram"><g transform="translate(-40 -40)" fill="#000000" class="color000000 svgShape"><rect width="24" height="24" x="40" y="40" fill="none"></rect><path fill="#ffffff" d="M110.9,199C110.9,195.744 108.256,193.1 105,193.1C105,193.1 95,193.1 95,193.1C91.744,193.1 89.1,195.744 89.1,199C89.1,199 89.1,209 89.1,209C89.1,212.256 91.744,214.9 95,214.9C95,214.9 105,214.9 105,214.9C108.256,214.9 110.9,212.256 110.9,209L110.9,199ZM109.1,199L109.1,209C109.1,211.263 107.263,213.1 105,213.1L95,213.1C92.737,213.1 90.9,211.263 90.9,209L90.9,199C90.9,196.737 92.737,194.9 95,194.9L105,194.9C107.263,194.9 109.1,196.737 109.1,199ZM104.89,203.238C104.575,201.109 102.891,199.425 100.762,199.11C100.524,199.074 100.284,199.057 100.043,199.057C97.355,199.057 95.143,201.269 95.143,203.957C95.143,206.645 97.355,208.857 100.043,208.857C102.731,208.857 104.943,206.645 104.943,203.957C104.943,203.716 104.926,203.476 104.89,203.238ZM103.11,203.502C103.132,203.653 103.143,203.805 103.143,203.957C103.143,205.657 101.744,207.057 100.043,207.057C98.343,207.057 96.943,205.657 96.943,203.957C96.943,202.256 98.343,200.857 100.043,200.857C100.195,200.857 100.347,200.868 100.498,200.89C101.845,201.09 102.91,202.155 103.11,203.502ZM105.5,197.6C105.997,197.6 106.4,198.003 106.4,198.5C106.4,198.997 105.997,199.4 105.5,199.4C105.003,199.4 104.6,198.997 104.6,198.5C104.6,198.003 105.003,197.6 105.5,197.6Z" transform="translate(-48 -152)" class="color2c2c2c svgShape"></path></g></svg>
                    </a>
                    <a href="https://github.com/Sonnvu" target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex size-9" viewBox="0 0 1792 1792" id="Github"><path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5T1376 1664h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </a>
                    <a href="https://www.youtube.com/@shawnvu4799" target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex size-9" viewBox="0 0 16 16" id="Youtube"><path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </a>
                    <a href="https://leetcode.com/u/SonnVu/" target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex size-8" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" fill="#ffffff" class="color000000 svgShape"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </a>
                </div>
                <div className="absolute right-0">
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/Portfolio#about" class="hover:underline me-4 md:me-6">About</Link>
                        </li>
                
                        <li>
                            <a href="#license" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <Link to="/Portfolio#contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Developed by Son Vu</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
