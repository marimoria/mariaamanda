import "@/styles/index.css";
import Spline from "@splinetool/react-spline";

function App() {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background overflow-hidden">
			{/* Desktop Scene */}
			<div className="hidden lg:block w-full h-full">
				<Spline scene="https://prod.spline.design/Fv9sgZEncUJvrqHU/scene.splinecode" />
			</div>

			{/* Mobile Scene */}
			<div className="block lg:hidden w-full h-full">
				<Spline scene="https://prod.spline.design/Fv9sgZEncUJvrqHU/scene.splinecode" />
			</div>
		</div>
	);
}

export default App;
