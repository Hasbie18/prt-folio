
export const HeroSection = () =>{
    return(
        <section className="relative h-screen bg-cover bg-center text-white flex items-center" style={{ 
            backgroundImage: "url('https://i.pinimg.com/originals/ae/06/54/ae0654dfb0d0157d6c8c6c25063d0a19.jpg')"
         }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Insider title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4">TIME TO TRAVEL</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque praesentium molestias quos!
                </p>

                {/* Deteail section */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
                    {/* detail box 1 */}
                    <div className="flex flex-col items-start space-y-2">
                        <div className="text-sm">🏔</div>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo fugit!
                        </p>
                        <button className="text-sm font-medium underline hover:text-gray-300">MORE DETAILED</button>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <div className="text-sm">🏔</div>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo fugit!
                        </p>
                        <button className="text-sm font-medium underline hover:text-gray-300">MORE DETAILED</button>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <div className="text-sm">🏔</div>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo fugit!
                        </p>
                        <button className="text-sm font-medium underline hover:text-gray-300">MORE DETAILED</button>
                    </div>
                </div>
            </div>
        </section>
    )
}