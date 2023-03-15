const API_URL = 'http://localhost:3333';

export async function createNewHabit(habit:string){
    const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({habit})
    })

    const data = await response.json()
    return data
}

export async function getHabitOptionList(){
    const response = await fetch(`${API_URL}/habits`)
    const data = await response.json()
    return data;
}

export async function registerDailyHabit(habits:string,month:number,day:number){
   await fetch(`${API_URL}/registerhabit`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            habits,
            month,
            day
        })
    })
}

export async function registeredHabitsByMonth(month:string){
    const result = await fetch(`${API_URL}/${month.charAt(0).toUpperCase() + month.slice(1)}`)
    const data = await result.json()
    return data;
}