import { Entity, Identifier } from 'ddd-base';
import { DateTime } from 'luxon';
import * as uuid from 'uuid';

class Id extends Identifier<string> {}

interface UserProps {
    id: Id;
    lastName: string;
    firstName: string;
    birthday: DateTime;
}

export class User extends Entity<UserProps> {
    private constructor(props: UserProps) {
        super(props);
    }

    static new(init: Omit<UserProps, 'id'>) {
        return new User({
            id: new Id(uuid.v4()),
            lastName: init.lastName,
            firstName: init.firstName,
            birthday: init.birthday,
        });
    }

    update(props: Partial<Omit<UserProps, 'id'>>) {
        return new User({
            id: this.props.id,
            lastName: props.lastName ?? this.props.lastName,
            firstName: props.firstName ?? this.props.firstName,
            birthday: props.birthday ?? this.props.birthday,
        });
    }
}
