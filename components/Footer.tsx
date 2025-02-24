import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { menuList } from "@/config/index";

export const Footer = () => {
	return (
		<div className="bg-black text-white mt-14">
			<footer className="px-8 sm:p-10 sm:px-24 container mx-auto">
				{/* Grid Layout Adjusted for Mobile */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:justify-between">
					{/* LOGO SECTION */}
					<div className="flex flex-col sm:items-start">
						<aside className="flex items-center gap-4 cursor-pointer group">
							<img src="/MoviZone-logo.png" alt="logo" className="w-12 mt-1" />
							<p className="font-bold text-xl">
								<span className="group-hover:text-red-500 transition-all duration-300">
									MOVI
								</span>
								<span className="text-red-500 group-hover:text-white transition-all duration-300">
									ZONE
								</span>
							</p>
						</aside>
					</div>

					{/* USEFUL LINKS */}
					<div className="flex flex-col sm:items-start">
						<h6 className="font-bold text-lg mb-2">Useful Links</h6>
						<ul className="flex flex-col gap-2">
							{menuList.map((item, index) => (
								<li key={index}>
									<Link
										href={item.href}
										className="hover:text-red-500 transition-all duration-300"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* ADDRESS & EMAIL */}
					<div className="flex flex-col sm:items-start">
						<h6 className="border-b border-gray-600 text-lg font-bold pb-2">
							Address
						</h6>
						<p className="text-gray-400 mt-2 text-sm">
							1234 Elm Street, Suite 567, Downtown City, State Zip Code
						</p>

						<h6 className="border-b border-gray-600 text-lg font-bold pb-2 mt-4">
							Email
						</h6>
						<p className="text-gray-400 mt-2 text-sm cursor-pointer hover:text-red-500 transition-all duration-300">
							email@example.com
						</p>
					</div>

					{/* PHONE & SOCIALS */}
					<div className="flex flex-col sm:items-start">
						<h6 className="border-b border-gray-600 text-lg font-bold pb-2">
							Phone
						</h6>
						<p className="text-gray-400 mt-2 text-sm">
							Service: (123) 456-7890
						</p>
						<p className="text-gray-400 mt-1 text-sm">Office: (123) 456-7890</p>

						{/* SOCIAL ICONS */}
						<div className="flex gap-4 mt-6">
							<Facebook className="cursor-pointer hover:text-red-500 transition-all duration-300" />
							<Twitter className="cursor-pointer hover:text-red-500 transition-all duration-300" />
							<Instagram className="cursor-pointer hover:text-red-500 transition-all duration-300" />
							<Linkedin className="cursor-pointer hover:text-red-500 transition-all duration-300" />
						</div>
					</div>
				</div>
			</footer>

			{/* COPYRIGHT SECTION */}
			<div className="border-t border-gray-600 py-4 text-center text-sm mt-4">
				&#169; 2024 MoviZone. All rights reserved.
			</div>
		</div>
	);
};
