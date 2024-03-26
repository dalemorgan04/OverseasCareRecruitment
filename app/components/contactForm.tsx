export default function ContactForm() {
    return (
        <div className="container mx-auto">
            <div className=" bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                        <p className="font-medium text-lg">Introduce yourself</p>
                        <p>Please fill out your details with a short summary of your details</p>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-5">
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value=""
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value=""
                                    placeholder="email@domain.com"
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="h-[200px] border mt-1 rounded px-4 w-full bg-gray-50"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="country">Country / region</label>
                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                    <input
                                        name="country"
                                        id="country"
                                        placeholder="Country"
                                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                        value=""
                                    />
                                    <button
                                        tabIndex={-1}
                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                    >
                                        <svg
                                            className="w-4 h-4 mx-2 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                    <button
                                        tabIndex={-1}
                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                    >
                                        <svg
                                            className="w-4 h-4 mx-2 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="md:col-span-5 text-right">
                                <div className="inline-flex items-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
