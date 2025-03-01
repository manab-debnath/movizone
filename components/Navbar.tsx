"use client";

import { motion, AnimatePresence } from "motion/react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { getList, menuList } from "@/config/index";
import SearchCard from "./SearchCard";
import { IoIosArrowForward } from "react-icons/io";

export const Navbar = () => {
	const isScrollingDown = useScrollDirection();
	const pathname = usePathname();
	const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const mobileSearchRef = useRef<HTMLDivElement>(null);
	const [input, setInput] = useState<string>("");
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(e.target as Node) &&
				mobileSearchRef.current &&
				!mobileSearchRef.current.contains(e.target as Node)
			) {
				setIsSearchBarActive(false);
				setInput("");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	const handleSearch = async () => {
		const value = input;
		if (value.trim() === "") {
			setSearchResults([]);
			return;
		}

		setIsLoading(true);
		try {
			const res = await getList({
				path: `search/multi?query=${value}&include_adult=false&language=en-US&page=1`,
			});
			setSearchResults(res.results);
		} catch (error) {
			console.error("Search error:", error);
			setSearchResults([]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const timer = setTimeout(handleSearch, 500);
		return () => clearTimeout(timer);
	}, [input]);

	return (
		<AnimatePresence>
			<motion.div
				className="w-screen fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-4"
				initial={{ y: -100 }}
				animate={{
					y: isScrollingDown ? -100 : 0,
					opacity: isScrollingDown ? 0 : 1,
				}}
				transition={{
					duration: 0.3,
					type: "spring",
					stiffness: 100,
					damping: 20,
				}}
			>
				<div className="max-w-[1400px] mx-auto relative">
					<div className="navbar rounded-lg shadow-lg px-2 sm:px-4 bg-black bg-opacity-90">
						{/* Logo and Mobile Menu Button */}
						<div className="flex items-center justify-between w-full lg:w-auto">
							<Link
								href="/"
								className="pl-2 font-bold text-xl cursor-pointer group flex items-center"
							>
								<img
									src="/MoviZone-logo.png"
									alt="logo"
									className="w-8 sm:w-10"
								/>
								<span className="group-hover:text-red-500 transition-all duration-300">
									MOVI
								</span>
								<span className="text-red-500">ZONE</span>
							</Link>

							<div className="flex items-center gap-2 lg:hidden">
								{/* Mobile Search Icon */}
								<button
									className="p-2"
									onClick={() => {
										setIsSearchBarActive(!isSearchBarActive);
										setIsMobileMenuOpen(false);
									}}
								>
									<CiSearch size={24} className="hover:text-red-500" />
								</button>

								{/* Mobile Menu Button */}
								<button
									className="btn btn-ghost lg:hidden"
									onClick={() => {
										setIsMobileMenuOpen(!isMobileMenuOpen);
										setIsSearchBarActive(false);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d={
												isMobileMenuOpen
													? "M6 18L18 6M6 6l12 12"
													: "M4 6h16M4 12h8m-8 6h16"
											}
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* Desktop Navigation - Updated to use minimal necessary space */}
						<div className="hidden lg:flex justify-center flex-1">
							<div className="flex-1 flex justify-center w-full">
								<ul className="flex flex-row items-center">
									{menuList.map((item, index) => {
										const isActive =
											item.href === "/"
												? pathname === "/"
												: pathname.startsWith(item.href);
										return (
											<li
												key={index}
												className="hover:text-red-500 list-none cursor-pointer transition-all duration-300"
											>
												<Link
													href={item.href}
													className={`px-4 py-2 whitespace-nowrap ${
														isActive && "text-red-500"
													}`}
												>
													{item.name}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>

						{/* Desktop Search and Auth */}
						<div
							className="hidden lg:flex items-center gap-2  justify-end"
							ref={searchRef}
						>
							<div
								className={`${isSearchBarActive ? "w-96" : "w-auto"} relative`}
							>
								{isSearchBarActive ? (
									<input
										type="text"
										placeholder="Search"
										value={input}
										className="px-4 block w-full outline-none outline-red-500 bg-transparent h-10 rounded-3xl transition-all duration-300 mr-2"
										onChange={(e) => setInput(e.target.value)}
									/>
								) : (
									<CiSearch
										size={28}
										className="cursor-pointer hover:text-red-500 mr-2"
										onClick={() => setIsSearchBarActive(true)}
									/>
								)}

								{/* Desktop Search Results Dropdown */}
								{isSearchBarActive && input.length > 0 && (
									<div className="absolute top-14 right-0 bg-black bg-opacity-90 w-full rounded-xl py-6 px-4 flex flex-col">
										{isLoading ? (
											<span className="loading loading-spinner loading-md"></span>
										) : searchResults.length === 0 ? (
											<p>No results!!</p>
										) : (
											<>
												{searchResults.slice(0, 5).map((item: any) => (
													<SearchCard
														key={item.id}
														details={item}
														setIsSearchBarActive={setIsSearchBarActive}
														setInput={setInput}
													/>
												))}
												{searchResults.length > 5 && (
													<p className="flex items-center justify-center ml-auto text-white cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out group">
														Show All
														<IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
													</p>
												)}
											</>
										)}
									</div>
								)}
							</div>
							<Link href="/login" className="btn btn-ghost border-white">
								Login
							</Link>
							<Link
								href="/signup"
								className="btn bg-[#9747FF] text-white hover:bg-[#8033FF]"
							>
								Signup
							</Link>
						</div>
					</div>

					{/* Mobile/Tablet Search Bar */}
					<AnimatePresence>
						{isSearchBarActive && (
							<motion.div
								ref={mobileSearchRef}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="absolute top-14 left-0 right-0 bg-black bg-opacity-90 rounded-lg p-4 lg:hidden z-50"
							>
								<div className="relative w-full">
									<input
										type="text"
										placeholder="Search"
										value={input}
										className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-3xl outline-none focus:border-red-500"
										onChange={(e) => setInput(e.target.value)}
									/>

									{/* Mobile/Tablet Search Results - Updated to match navbar width */}
									{input.length > 0 && (
										<div className="mt-2 bg-black bg-opacity-90 rounded-xl overflow-hidden">
											{isLoading ? (
												<div className="p-4 flex justify-center">
													<span className="loading loading-spinner loading-md"></span>
												</div>
											) : searchResults.length === 0 ? (
												<p className="p-4">No results!!</p>
											) : (
												<div className="py-2">
													{searchResults.slice(0, 5).map((item: any) => (
														<SearchCard
															key={item.id}
															details={item}
															setIsSearchBarActive={setIsSearchBarActive}
															setInput={setInput}
														/>
													))}
													{searchResults.length > 5 && (
														<div className="p-2 flex justify-center">
															<p className="flex items-center text-white cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out group">
																Show All
																<IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
															</p>
														</div>
													)}
												</div>
											)}
										</div>
									)}
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Mobile Menu */}
					<AnimatePresence>
						{isMobileMenuOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								className="absolute top-16 left-0 right-0 bg-black bg-opacity-90 rounded-lg lg:hidden"
							>
								<ul className="px-4 py-2">
									{menuList.map((item, index) => {
										const isActive =
											item.href === "/"
												? pathname === "/"
												: pathname.startsWith(item.href);
										return (
											<li
												key={index}
												className={`py-2 hover:text-red-500 cursor-pointer transition-all duration-300 ${
													isActive && "text-red-500"
												}`}
											>
												<Link href={item.href}>{item.name}</Link>
											</li>
										);
									})}
									<div className="divider"></div>
									<li className="py-2 hover:text-red-500 cursor-pointer">
										<Link href={"/login"}>Login</Link>
									</li>
									<li className="py-2 hover:text-red-500 cursor-pointer">
										<Link href={"/signup"}>Signup</Link>
									</li>
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
