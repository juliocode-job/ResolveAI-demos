interface User {
    name: string;
    age: number;
}

export function processUser(u: any) {
    console.log(u.profile.bio); 
}


export function runCastBug() {
    const value: unknown = "25";
    const user = value as unknown as User;
    
    console.log(user.age); 
}

