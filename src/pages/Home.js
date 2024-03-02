const Home = () => {

    return (
        <div className="hero py-10 h-90">

            <div className=" container mx-auto flex items-center justify-between">
                <div className="w-1/2">

                    <h6 className="italic mx-10">
                        Are You Hungry ?
                    </h6>
                    <h1 className="text-3xl md:text-6xl font-bold"> Don't Wait !!</h1>
                    <button className="px-6 py-2 mt-5 mx-10 text-white bg-yellow-400 rounded-md hover:bg-yellow-600">Order Now</button>
                </div>
                <div className="w-1/2">

                    <img className="h-4/5 w-4/5" src="/images/pizza.png" alt=""></img>

                </div>

            </div>


        </div>
    )

}


export default Home;