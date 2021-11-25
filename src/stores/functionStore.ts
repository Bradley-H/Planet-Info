export async function getData(){
    const res = await fetch('./json/data.json')
    const data = await res.json();
    return data;
}