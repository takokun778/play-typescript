export type TableTestDriven<Args, Expected> = {
    name: string;
    setup: () => void;
    args: Args;
    expected?: Expected;
    isErr: boolean;
    err?: Error;
};
