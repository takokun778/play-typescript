import { DateTime } from 'luxon';
import * as uuid from 'uuid';

export class User {
    id!: string;
    lastName!: string;
    firstName!: string;
    birthday!: DateTime;

    private constructor(init: Partial<User>) {
        Object.assign(this, init);
    }

    static new(init: Partial<User>) {
        return new User({
            id: uuid.v4(),
            lastName: init.lastName,
            firstName: init.firstName,
            birthday: init.birthday,
        });
    }

    update(props: Partial<Omit<User, 'id'>>) {
        return new User({
            id: this.id,
            lastName: props.lastName ?? this.lastName,
            firstName: props.firstName ?? this.firstName,
            birthday: props.birthday ?? this.birthday,
        });
    }
}
