export class UserB {
    constructor(private username: string, private password: string) {
    }

    updatePassword(password: string): void {
        this.password = password;
    }
}

export interface UserRepositoryB {
    save: (user: UserB) => void;
}

export class UserService {
    constructor(private repository: UserRepositoryB) {
    }

    updatePassword(user: UserB, password: string) {
        user.updatePassword(password);
        this.repository.save(user);
    }
}