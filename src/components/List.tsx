const RetroPCs = require('../assets/images/RetroPCs.jpg')
const KeyboardImage = require('../assets/images/KeyboardImage.jpg')
const GamingGrowth = require('../assets/images/GamingGrowth.jpg')

type props = {
    source: string
    order: string
    title: string
    text: string
}

function Item(props: props) {
    return (
        <div className="flex space-x-4">
            <img src={props.source} alt="" className="w-24"/>
            <div className="space-y-1 text-left px-2">
                <h3 className="font-Inter text-Grayish-Blue text-3xl font-bold">{props.order}</h3>
                <button className="hover:underline ">
                    <h4 className="text-lg text-Very-Dark-Blue font-Inter font-bold">{props.title}</h4>
                </button>
                <p className="text-paragraph text-Dark-Grayish-Blue leading-6">{props.text}</p>
            </div>
        </div>
    )
}

export default function List(){
    return (
        <section className="space-y-8">
            <Item 
            source={RetroPCs} 
            order="01"
            title="Reviving Retro PCs" 
            text="What happens when old PCs are given modern upgrades?"
            />

            <Item 
            source={KeyboardImage}
            order="02"
            title="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets"
            />

            <Item 
            source={GamingGrowth}
            order="03"
            title="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
            />
        </section>
    )
}