import {User, UserFinder, UserRepository} from "../user/userFinder";

class stubUserRepository implements UserRepository {
    findUsersByName(name: string): User[] {
        return [];
    }

    findUsersBySurname(surname: string): User[] {
        return [];
    }
}

describe('The User Finder', (): void => {
    it('searches user by name first', () => {
        const aName = 'irrelevant-name';
        const aUser = new User(aName, '');
        //create a stub instantiating the class and then overriding the method
        const repository: stubUserRepository = new stubUserRepository();
        repository.findUsersByName = (): User[] => [aUser];
        const usersFinder: UserFinder = new UserFinder(repository);

        const result: User[] = usersFinder.findUsers(aName);

        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(aUser);
    });

    it('searches user by surname when nothing is found by name', () => {
        const aSurname = 'irrelevant-name';
        const aUser = new User('', aSurname);
        const repository = new stubUserRepository();
        repository.findUsersBySurname = () => [aUser];
        const usersFinder = new UserFinder(repository);

        const result = usersFinder.findUsers(aSurname);

        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(aUser);
    });
});