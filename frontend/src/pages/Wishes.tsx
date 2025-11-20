import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { GetWishes} from "../services/apiServices";

interface DisplayWishes {
    id: number;
    price: number;
    name: string;
    link: string;
}

export default function StudentsPage() {
    const [wishes, setWishData] = useState<DisplayWishes[]>([]);

    const API_URL = import.meta.env.VITE_API_URL;
    const results: DisplayWishes[] = [];

    useEffect(() => {
        const fetchData = async () => {
            const wishes = await GetWishes(API_URL);
            console.log("Welcome to the student page")
            for(const wish of wishes){
                console.log(`Getting all students`)
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
    }, []);

    return(
    <Layout children={undefined}>
        
    </Layout>
    )}