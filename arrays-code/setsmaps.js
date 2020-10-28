const ids = new Set([1, 2, 3, 4]);
ids.add(2);
if(ids.has(2)){
    ids.delete(2);
}

for(const entry of ids.entries()){
    console.log(entry[0]);
}