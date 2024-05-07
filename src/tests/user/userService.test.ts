import {UserB, UserRepositoryB, UserService} from "../../core/user/userService";

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

class RepositoryMock implements UserRepositoryB {
    called = 0;

    save(user: UserB): void {
        this.called++;
    }

    verify() {
        if (this.called > 1) {
            throw new Error('Saved method was called more than once')
        }
    }
}

describe('The User Service', () => {
    it('saves user throught the repository', () => {
        const repositoryMock = new RepositoryMock();
        const service = new UserService(repositoryMock);
        const user = new UserB('irrelevant-name', 'irrelevant-password');

        service.updatePassword(user, '1234');
        // if we execute twice we will get an error as the repositoryMocks execute
        // service.updatePassword(user, '1234');

        repositoryMock.verify();
    });
});