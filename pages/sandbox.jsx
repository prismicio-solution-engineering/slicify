import { useState } from 'react'
import { useEffect } from "react";
import { RadioGroup } from '@headlessui/react'
import { Container } from '../components/Container'
import { HomeIcon } from '@heroicons/react/20/solid'
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { QuoteIcon } from "@/components/QuoteIcon";
import hljs from "highlight.js";

hljs.configure({
    ignoreUnescapedHTML: true,
    languages: ["javascript", "js", "jsx", "typescript", "ts", "tsx", "mts", "cts", "css"]
})
const footerNavigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
]

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

const memoryOptions = [
    { name: 'All articles', inStock: true },
    { name: 'Cat 1', inStock: true },
    { name: 'Cat 2', inStock: true },
    { name: 'Cat 3', inStock: true },
]

const tabs = [
    { name: 'Applied', href: '#', count: '52', current: false },
    { name: 'Phone Screening', href: '#', count: '6', current: false },
    { name: 'Interview', href: '#', count: '4', current: true },
    { name: 'Offer', href: '#', current: false },
    { name: 'Disqualified', href: '#', current: false },
]

const stats = [
    { label: 'Business was founded', value: '2012' },
    { label: 'People on the team', value: '120+' },
    { label: 'Users on the platform', value: '250k' },
    { label: 'Paid out to creators', value: '$70M' },
]

const featuredPost = {
    id: 1,
    title: 'We’re incredibly proud to announce we have secured $75m in Series B',
    href: '#',
    description:
        'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
}

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
    // More posts...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CategoriesRadioGroup() {
    const [mem, setMem] = useState(memoryOptions[2])

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium leading-6 text-gray-900">Filter by category</h2>
                {/* <a href="#" className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                    See performance specs
                </a> */}
            </div>

            <RadioGroup value={mem} onChange={setMem} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a category</RadioGroup.Label>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    {memoryOptions.map((option) => (
                        <RadioGroup.Option
                            key={option.name}
                            value={option}
                            className={({ active, checked }) =>
                                classNames(
                                    option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                                    // active ? 'ring-2 ring-light-blue ring-offset-2' : '',
                                    checked
                                        ? 'bg-vibrant-blue text-white hover:bg-vibrant-blue'
                                        : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                    'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1'
                                )
                            }
                            disabled={!option.inStock}
                        >
                            <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}

function CategoriesTabs() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}

function CategoriesTabsAndBadge() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href="#"
                                className={classNames(
                                    tab.current
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                                {tab.count ? (
                                    <span
                                        className={classNames(
                                            tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                                            'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                                        )}
                                    >
                                        {tab.count}
                                    </span>
                                ) : null}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

function BlogHeader() {
    return (
        <></>
    )
}

function MainArticles() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                    <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600">
                        {featuredPost.date}
                    </time>
                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">{featuredPost.description}</p>
                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                        <div className="flex">
                            <a
                                href={featuredPost.href}
                                className="text-sm font-semibold leading-6 text-indigo-600"
                                aria-describedby="featured-post"
                            >
                                Continue reading <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                            <a
                                href={featuredPost.author.href}
                                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                            >
                                <img src={featuredPost.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                {featuredPost.author.name}
                            </a>
                        </div>
                    </div>
                </article>
                <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                    <div className="-my-12 divide-y divide-gray-900/10">
                        {posts.map((post) => (
                            <article key={post.id} className="py-12">
                                <div className="group relative max-w-xl">
                                    <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
                                        {post.date}
                                    </time>
                                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h2>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="mt-4 flex">
                                    <a
                                        href={post.author.href}
                                        className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        {post.author.name}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function NewsletterCta() {
    return (
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we’re launching.
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                </p>
                <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Notify me
                    </button>
                </form>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

function TextTwoColumns() {
    return (
        <section className='bg-slate-700'>
            <div className="px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We love creators</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                            </p>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                                auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                                hac adipiscing egestas.
                            </p>
                        </div>
                        <div>
                            <p>
                                Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                                eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                                voluptate.
                            </p>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                                auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                                hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                            </p>
                        </div>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                        {stats.map((stat, statIdx) => (
                            <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </section>
    )
}

function FeaturedArticlesThreeColumn() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

function ArticlesListSingleColumn() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">{post.author.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ArticleListThreeColumnBackgroundImage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Breadcrumbs() {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

function FooterSimple() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {footerNavigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; 2020 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

function Quote() {
    return (
        <div className="mx-auto relative max-w-3xl text-base leading-7 text-gray-700">
            <QuoteIcon className="absolute left-3 top-0 fill-slate-100" />
            <figure className="mt-10 relative border-l-4 border-l-vibrant-blue px-9">
                <blockquote className="font-semibold text-slate">
                    <p>
                        “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                        purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                        aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                        tristique.”
                    </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 items-center">
                    <img
                        className="h-14 w-14 object-cover flex-none rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div>
                        <p className="font-semibold text-base font-display text-slate-900">
                            Maria Hill
                        </p>
                        <p className="text-sm text-slate-500">Marketing Manager</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

function ImageWithCaption() {
    return (
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <figure className="mt-16">
                <img
                    className="aspect-video rounded-xl bg-gray-50 object-contain"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-light-blue">
                    <InformationCircleIcon
                        className="mt-0.5 h-5 w-5 flex-none text-light-blue"
                        aria-hidden="true"
                    />
                    Faucibus commodo massa rhoncus, volutpat.
                </figcaption>
            </figure>
        </div>
    )
}

function YoutubeEmbedVideo() {
    return (
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <figure className="mt-16">
                <img
                    className="aspect-video rounded-xl bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-light-blue">
                    <PlayCircleIcon
                        className="mt-0.5 h-5 w-5 flex-none text-light-blue"
                        aria-hidden="true"
                    />
                    Youtube Video
                </figcaption>
            </figure>
        </div>
    )
}

function Highlight() {
    return (
        <div className="px-9 py-6 my-10 mx-auto max-w-3xl text-base bg-indigo-50 shadow-md">
            <strong className="font-display text-lg text-vibrant-blue">
                Highlight
            </strong>
            <p className="rounded-md text-slate">
                <br /> Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique.
            </p>
        </div>
    )
}

function ListWithIcons() {
    return (
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p>List with icons</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                        aria-hidden="true"
                    />
                    <span>
                        <strong className="font-semibold text-slate">
                            Push to deploy.
                        </strong>{" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate
                        blanditiis ratione.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                        aria-hidden="true"
                    />
                    <span>
                        <strong className="font-semibold text-slate">
                            SSL certificates.
                        </strong>{" "}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ServerIcon
                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                        aria-hidden="true"
                    />
                    <span>
                        <strong className="font-semibold text-slate">
                            Database backups.
                        </strong>{" "}
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
                        magna sit morbi lobortis.
                    </span>
                </li>
            </ul>
        </div>
    )
}

function CodeBlock() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div className="my-10 mx-auto max-w-3xl">
            <pre className="p-6 bg-[#0d1117] rounded-xl shadow-lg">
                <code className="whitespace-pre-wrap">{`
// useEffect(() => {
//   hljs.highlightAll();
// });

<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-700">
  <li className="list-disc">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
    impedit perferendis suscipit eaque, iste dolor cupiditate
    blanditiis ratione.
  </li>
  <li className="list-disc">
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    lorem cupidatat commodo.
  </li>
  <li className="list-disc">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
    magna sit morbi lobortis.
  </li>
</ul>
          `}</code>
            </pre>
        </div>
    )
}

function TextWithStickyImage() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-vibrant-blue">
                                Deploy faster
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate sm:text-4xl">
                                A better workflow
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                                id at vitae feugiat egestas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                                sed amet vitae sed turpis id.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon
                                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-slate">
                                            Push to deploy.
                                        </strong>{" "}
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Maiores impedit perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon
                                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-slate">
                                            SSL certificates.
                                        </strong>{" "}
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                                        qui lorem cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon
                                        className="mt-1 h-5 w-5 flex-none text-vibrant-blue"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-slate">
                                            Database backups.
                                        </strong>{" "}
                                        Ac tincidunt sapien vehicula erat auctor pellentesque
                                        rhoncus. Et magna sit morbi lobortis.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                odio id et. Id blandit molestie auctor fermentum dignissim.
                                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                                et ut. Ac lorem vel integer orci.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate">
                                No server? No problem.
                            </h2>
                            <p className="mt-6">
                                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                turpis ipsum eu a sed convallis diam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TextSimple() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <div className="mt-10">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                        enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                        praesent donec est. Odio penatibus risus viverra tellus varius sit
                        neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                        Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-700">
                        <li className="list-disc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                            impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </li>
                        <li className="list-disc">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo.
                        </li>
                        <li className="list-disc">
                            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
                            magna sit morbi lobortis.
                        </li>
                    </ul>
                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                        odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
                        diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                        hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
                        vel integer orci.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate">
                        From beginner to expert in 3 hours
                    </h2>
                    <p className="mt-6">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
                        in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
                        mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                        tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                        Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
                        diam.
                    </p>
                    <figure className="mt-10 border-l-4 border-l-light-blue pl-9">
                        <blockquote className=" text-slate">
                            <p>
                                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                                purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                                aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                                enim tristique.”
                            </p>
                        </blockquote>
                    </figure>
                    <p className="mt-10">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                        enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                        praesent donec est. Odio penatibus risus viverra tellus varius sit
                        neque erat velit.
                    </p>
                </div>
                <figure className="mt-16">
                    <img
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                        alt=""
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm font-display leading-6 text-light-blue">
                        <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-light-blue"
                            aria-hidden="true"
                        />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate">
                        Everything you need to get up and running
                    </h2>
                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
                        varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
                        cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
                        molestie. Gravida quis fringilla amet eget dui tempor dignissim.
                        Facilisis auctor venenatis varius nunc, congue erat ac. Cras
                        fermentum convallis quam.
                    </p>
                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                        enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                        praesent donec est. Odio penatibus risus viverra tellus varius sit
                        neque erat velit.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Example() {
    return (
        <></>
    )
}


export default function Sandbox() {
    return (
        <Container className="pb-16 pt-20 lg:pt-32">
            <div className="grid grid-cols-1 gap-y-20">
                <h1 className="font-display text-2xl">Sandbox</h1>
                <section className='grid gap-y-10'>
                    <h2 className="font-display text-xl">Blog sections</h2>
                    {/* Hero/Header */}
                    <BlogHeader />
                    {/* Search / Filters */}
                    TODO

                    {/* Categories/Filters*/}
                    <CategoriesRadioGroup />
                    <CategoriesTabs />
                    <CategoriesTabsAndBadge />

                    {/* Main article(s) */}
                    <MainArticles />

                    {/* Results/All articles grid */}
                    <ArticlesListSingleColumn />
                    <ArticleListThreeColumnBackgroundImage />

                    {/* CTA section with form*/}
                    <NewsletterCta />

                    {/* Text 2 cols */}
                    <TextTwoColumns />


                </section>
                <section>
                    <h2 className="font-display text-xl">Blog Article sections</h2>
                    {/* Header with title, featured image, excerpt, reading time, author, category (static) */}
                    TODO

                    {/* Table of content (navigation tab boolean) */}
                    TODO

                    {/* Text +/-  heading (variation) */}
                    <TextSimple />

                    {/* Quote bloc */}
                    <Quote />

                    {/* Image */}
                    <ImageWithCaption />

                    {/* Embedded video  */}
                    <YoutubeEmbedVideo />

                    {/* CTA section with form */}
                    TODO

                    {/* Featured articles */}
                    <Highlight />
                    <ListWithIcons />
                    <FeaturedArticlesThreeColumn />

                    {/* Code section */}
                    <CodeBlock />

                    {/* Breadcrumbs (navigation tab) */}
                    <Breadcrumbs />

                </section>
                <section>
                    <h2 className="font-display text-xl">Landing page sections</h2>
                    {/* Menu with anchors */}
                    TODO

                    {/* Hero with form */}
                    TODO

                    {/* Text with sticky image */}
                    <TextWithStickyImage />


                    {/* Features https://tailwindui.com/components/marketing/sections/feature-sections */}
                    TODO

                    {/* CTA section with form */}
                    TODO

                    {/* Proof */}
                    TODO

                    {/* Numbers */}
                    TODO

                    {/* Simple footer */}
                    <FooterSimple />

                    {/* Pricing with CTA : OK */}
                    {/* Testimonials : OK */}
                    {/* FAQ : OK */}
                    {/* Logo cloud : OK */}

                </section>
            </div>
        </Container>
    );
}
