export class BackupService {
    create(files: string[]) {
        // ...
    }
}

export class UserRepositoryC {
    findAll() {
        return [];
    }
}

export class UserFileService {
    constructor(
        private repository: UserRepositoryC,
        private backup: BackupService
    ) {
    }

    backupPremiumUsers() {
        this.repository.findAll().forEach((user) => {
            if (user.isPremium()) {
                this.backup.create(user.files());
            }
        });
    }
}