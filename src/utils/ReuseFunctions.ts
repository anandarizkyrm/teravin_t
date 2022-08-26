

export const getDataFromLocalStorage = () =>{
    const lists = JSON.parse(localStorage.getItem("lists") || '[]');
    return lists
}

export const saveToStorage = (data : any) : void =>{
    let newdata = getDataFromLocalStorage()

    newdata.push(data)
    localStorage.setItem('lists', JSON.stringify(newdata))
}



export const handleChange = (e : Event, state : any , setState : any) : void =>{
    const { name , value} = e.target as HTMLInputElement
    setState({
        ...state,
        [name] : value
    })
}


export const handleArrObjectChange = (e : Event, state : any , setState : any, index : number, type_name : string) : void =>{
    const { name , value} = e.target as HTMLInputElement
     let newArr = [...state[type_name]];
     newArr[index][name] = value;
}