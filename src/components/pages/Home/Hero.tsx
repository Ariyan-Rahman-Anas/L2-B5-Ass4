import { Button } from "@/components/ui/button";
import heroBg from "./../../../../public/hero-bg.jpg"

const Hero = () => {
    return (
        <section className="bg-white h-full md:min-h-[85vh] flex items-center justify-center">
            <div className="max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                {/* Text Content */}
                <div className="mb-10 lg:mb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Manage Your Library <span className="text-blue-600">Efficiently</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-700">
                        Streamline your library operations with our powerful, user-friendly management system.
                        Track books, manage users, and handle borrowing all in one place.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button className="px-6 h-12">Get Started</Button>
                        <Button variant="outline" className="px-6 h-12">Learn More</Button>
                    </div>
                </div>

                {/* Illustration / Image */}
                <div className="flex justify-center">
                    <img
                        src={heroBg}
                        alt="Library MS."
                        className="w-full h-full rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;