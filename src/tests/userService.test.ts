import {UserB, UserRepositoryB, UserService} from "../user/userService";

class RepositorySpy implements UserRepositoryB {
    public savedUser: UserB;

    save(user: UserB): void {
        this.savedUser = user;
    }
}

describe('The User Service', () => {
    it('saves user throughout the repository', () => {
        //we create a spy to check
        const repository = new RepositorySpy();
        const service = new UserService(repository);
        const user = new UserB('irrelevant-name', 'irrelevant-password');

        service.updatePassword(user, '1234');

        expect(repository.savedUser).toEqual(user);
    });
});