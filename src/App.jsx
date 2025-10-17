import "@/styles/App.css";

function App() {
	return (
		<div className="min-h-screen">
			<div className="lg:grid lg:grid-cols-2">
				<div className="lg:min-h-0 min-h-screen lg:flex lg:flex-col bg-background">
					{/* Row 1 on mobile */}
					<div className="lg:hidden h-[10vh] p-6 bg-background flex flex-col justify-center">
						<h1 className="text-3xl font-satoshi-bold text-title">Your Title Here</h1>
						<p className="text-content mt-2">Header content</p>
					</div>

					{/* Row 2 on mobile */}
					<div className="lg:hidden h-[45vh] bg-background">
						<div className="w-full h-full flex items-center justify-center">3D Scene Container (Mobile)</div>
					</div>

					{/* Row 3 on mobile */}
					<div className="lg:hidden h-[45vh] p-6 bg-background flex flex-col justify-center overflow-hidden">
						<h2 className="text-2xl font-satoshi-regular mb-2">Content Section</h2>
						<p className="text-content">Content that will switch with GSAP...</p>
					</div>

					{/* Desktop Content - Scrollable */}
					<div className="hidden lg:block p-6 space-y-6">
						<div className="mb-8">
							<h1 className="text-4xl font-satoshi-bold text-title">Your Title Here</h1>
							<p className="text-content mt-2">Header content</p>
						</div>

						<section>
							<h2 className="text-2xl font-satoshi-medium mb-4 text-title">Section 1</h2>
							<p className="text-content">Your information content goes here...</p>
						</section>

						<section>
							<h2 className="text-2xl font-satoshi-regular mb-4 text-title">Section 2</h2>
							<p className="text-content">More content...</p>
						</section>

						<section>
							<h2 className="text-2xl font-satoshi-regular mb-4 text-title">Section 3</h2>
							<p className="text-content">More content...</p>
						</section>
					</div>
				</div>

				{/* 3D Scene (Desktop only) */}
				<div className="hidden lg:block lg:h-screen lg:sticky lg:top-0 bg-background">
					<div className="w-full h-full flex items-center justify-center">3D Scene Container (Desktop)</div>
				</div>
			</div>
		</div>
	);
}

export default App;

