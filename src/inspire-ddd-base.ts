import { DateTime } from 'luxon';
import * as uuid from 'uuid';

interface UserProps {
    id: string;
    lastName: string;
    firstName: string;
    birthday: DateTime;
}

export class User {
    private readonly props: Readonly<UserProps>

    private constructor(props: UserProps) {
        this.props = props;
    }

    get id() {
        return this.props.id;
    }

    get lastName() {
        return this.props.lastName;
    }

    get firstName() {
        return this.props.firstName;
    }

    get birthday() {
        return this.props.birthday;
    }

    static new(init: Omit<UserProps, 'id'>) {
        return new User({
            id: uuid.v4(),
            lastName: init.lastName,
            firstName: init.firstName,
            birthday: init.birthday,
        });
    }

    update(props: Partial<Omit<UserProps, 'id'>>) {
        return new User({
            id: this.props.id,
            lastName: props.lastName ?? this.lastName,
            firstName: props.firstName ?? this.firstName,
            birthday: props.birthday ?? this.birthday,
        });
    }
}
