type newsTopics = {
    title: string
    text: string
}

function NewsTopics(props: newsTopics){
    return (
        <div className="my-8 space-y-2">
            <h3 className="font-Inter font-semibold text-white hover:text-Soft-Orange text-left text-xl">
                <button>{props.title}</button>
            </h3>
            <p className="font-Inter text-white opacity-60 text-left text-paragraph">{props.text}</p>
        </div>
    )
}

export default function News(){
    return (
        <section className="my-8 lg:flex lg:mb-12">
            <div className="space-y-8 lg:w-full lg:mr-6">
                <picture>
                    <source media="(min-width: 640px)" srcSet={require('../assets/images/image-web-3-desktop.jpg')} />
                    <img src={require('../assets/images/image-web-3-mobile.jpg')} alt="" />
                </picture>
                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-10 lg:space-y-6 lg:space-x-0 lg:flex-col xl:flex-row xl:space-y-0 xl:space-x-8">
                    <h1 className="text-left text-5xl text-Very-Dark-Blue font-bold font-Inter md">The Bright Future of Web 3.0?</h1>
                    <div className="space-y-4 sm:flex sm:flex-col sm:justify-between lg:space-y-10">
                        <p className="font-Inter text-paragraph text-Dark-Grayish-Blue text-left leading-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <nav className="flex justify-start">
                            <button type="button" className="bg-Soft-Red hover:bg-Very-Dark-Blue hover:scale-105 transition duration-300 text-white font-bold tracking-widest px-8 py-3">
                                <p className="uppercase">Read more</p>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="max-w-full bg-Very-Dark-Blue my-16 p-4 py-6 lg:m-0 lg:w-component-size lg:pb-0">
                <h2 className="text-Soft-Orange font-bold font-Inter text-3xl lg:text-4xl text-left">New</h2>
                <NewsTopics
                title="Hydrogen VS Electric Cars"
                text="Will hydrogen-fueled cars ever catch up to EVs?"
                />
                <hr className="border-Dark-Grayish-Blue"/>

                <NewsTopics
                title="The Downside of AI Artistry"
                text="What are the possible adverse effects of on-demand AI image generation?"
                />
                <hr className="border-Dark-Grayish-Blue"/>
                
                <NewsTopics
                title="Is VC Funding Drying Up?"
                text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
                />
            </div>
        </section>
    )
}