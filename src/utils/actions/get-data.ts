import { redirect } from "next/navigation"

export async function getDataHome(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}-9b7dbe40-a9fb-11f0-88d7-8199dde1faab/objects/68eff4d844a29761315c5c44?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, {next: {revalidate: 120}})

        if(!res.ok){
            throw new Error("Failed to fetch data") 
        }

        return res.json()
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}

export async function getSubmenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}-9b7dbe40-a9fb-11f0-88d7-8199dde1faab/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`)


        if(!res.ok){
            throw new Error("Failed to fetch data") 
        }

        return res.json();
    } catch (err) {
        throw new Error(`Failed to fetch data: ${err}`);

    }
}


export async function getItemBySlug(itemSlug: string){
    const base_url = `${process.env.NEXT_PUBLIC_API_URL}-9b7dbe40-a9fb-11f0-88d7-8199dde1faab/objects`;

    // Definindo o objecto de consulta pelo slug
    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug, title, metadata, type',
        read_key: process.env.READ_KEY as string
    })

    const url = `${base_url}?${queryParams.toString()}`;

    try {
        const res = await fetch(url, {next: {revalidate: 120}})

        if(!res.ok){
            throw new Error("Failed to get Item by slug")
        }
        return res.json()
    } catch (error) {
        console.log(error)
        redirect("/")
    }
}
// https://api.cosmicjs.com/v3/buckets/dev-motors-production-9b7dbe40-a9fb-11f0-88d7-8199dde1faab/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=xpwNrM4vMlg5Qz8u3apEw73kgQnXz43xMlS4qfkA3AAaixJoqV&depth=1&props=slug,title,

//https://api.cosmicjs.com/v3/buckets/dev-motors-production-9b7dbe40-a9fb-11f0-88d7-8199dde1faab/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=xpwNrM4vMlg5Qz8u3apEw73kgQnXz43xMlS4qfkA3AAaixJoqV&depth=1&props=slug,title,