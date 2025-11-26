import Layout from "../components/Layout";
//import { useState, useEffect } from "react";
//import { GetWishes} from "../services/apiServices";

interface DisplayWishes {
    id: number;
    price: number;
    name: string;
    link: string;
}

export default function WishPage() {
    /*const [wishes, setWishData] = useState<DisplayWishes[]>([]);

    const API_URL = import.meta.env.VITE_API_URL;
    const results: DisplayWishes[] = [];

    useEffect(() => {
        const fetchData = async () => {
            /*const wishes = await GetWishes(API_URL);
            console.log("Welcome to the wishlist page")
            for(const wish of wishes){
                console.log(`Getting all wishes`)
                const w = wishes.find(item => item.id === wish.id);
                if(w){
                    results.push({
                                id: w.id,
                                price: w.price,
                                name: w.name,
                                link: w.link,
                            });
                        console.log(w.id)
                        console.log(w.price)
                        console.log(w.name)
                        console.log(w.price)
                        }
                }           
            setWishData(results);
        };
        fetchData();
    }, []);*/

    return(
    <Layout>
        <div>
            <section className="flex flex-col items-center justify-center text-center py-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text 
                            bg-linear-to-r from-red-400 via-green-400 to-pink-400
                            bg-size-[200%_200%] animate-gradient-colors text-glow
                            leading-tight">
                Welcome to Viktor's wishlist
                </h2>
                <p className="text-gray-400 max-w-xl mb-8">
                This is my wishlist
                </p>
 
            </section>
                <h2>Wishlist</h2>


                <table className="table">
                <thead>
                    <tr>
                    <th>Price</th>
                    <th>Name</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{639}</td>
                        <td>{'Märklin 40402 Start up - Dobbeltdækker Styrevogn 2. klasse'}</td>
                        <td>{'https://www.smtmodeltog.dk/shop/marklin-40402-start-21780p.html'}</td>
                    </tr>
                    <tr >
                        <td>{"Ukendt"}</td>
                        <td>{'Bukser'}</td>
                        <td>{}</td>
                    </tr>
                    <tr >
                        <td>{"Ukendt"}</td>
                        <td>{'Ny smartphone'}</td>
                        <td>{}</td>
                    </tr>
                </tbody>
                </table>


            </div>
        
    </Layout>
    )}