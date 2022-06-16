export async function getData(path){
    const res = await fetch('./json/data.json')
    const data = await res.json();
    if(path){
        let info = data.find((item) => {
            return item.name === path;
        });
        return info
    } else{
        return data;
    }
}

