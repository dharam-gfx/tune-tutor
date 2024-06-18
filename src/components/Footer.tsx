import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="px-4 py-20 text-white bg-black">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
                        <a href="/" title="Go to Kutty Home Page" className="col-span-2 mb-12 md:col-span-1">
                           <img className='w-12' src="/tuneTutor.png" alt="" />
                        </a>
                        <nav className="mb-8">
                            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">Product</p>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Features</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Integrations</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Documentation</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">FAQs</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Pricing</a>
                        </nav>
                        <nav className="mb-8">
                            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">About</p>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Press-Kit</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Company</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Blog</a>
                        </nav>
                        <nav className="mb-8">
                            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">Contact</p>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Twitter</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Instagram</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Email</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Advertising</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Chat</a>
                        </nav>
                        <nav className="mb-8">
                            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">Legal</p>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Terms of Service</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy Policy</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Cookie Policy</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Affiliate Program</a>
                            <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Manage Cookies</a>
                        </nav>
                    </div>
                    <p className="text-sm font-medium text-left text-gray-600 md:text-center">© Copyright 2024 dharam_gfx. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer