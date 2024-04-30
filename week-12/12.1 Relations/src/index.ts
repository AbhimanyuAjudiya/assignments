interface User {
    name: string;
    age: number;
    id: number;
    email: number;
}

type UserProp = Pick<User, | 'name' | 'age'>;

type UserPropOptional = Partial<UserProp>;

const dispUser = (user: UserProp) => {
    console.log(`Name ${user.name} age ${user.age}`);
}



dispUser({name : 'abhimanyu' , age : 20})