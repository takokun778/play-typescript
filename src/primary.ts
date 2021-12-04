type BaseType = 'a' | 'b'

abstract class Base {
    constructor(public name: string, public type: BaseType) {}
}

class A extends Base {}

class B extends Base {}

class Primary {
    private bases: Map<BaseType, Base>

    constructor(...base: Base[]) {
        this.bases = new Map();
        base.forEach((base) => {
            this.bases.set(base.type, base)
        })
    }

    use(baseType: BaseType): Base {
        const res = this.bases.get(baseType)
        if (!res) {
            throw new Error(`Base ${baseType} not found`);
        }
        return res;
    }
}

const a = new A('a', 'a');

const b = new B('b', 'b');

const primary = new Primary(a, b);

console.log(primary.use('b').name);
